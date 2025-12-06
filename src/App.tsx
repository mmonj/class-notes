import {
  createEffect,
  createMemo,
  createSignal,
  For,
  onMount,
  Show,
  type Accessor,
} from "solid-js";
import { createStore } from "solid-js/store";
import "./App.css";
import {
  getAggregatedScore,
  getDefaultGradeRows,
  getLetterGrade,
  GRADE_THRESHOLDS,
  NUM_GRADE_ROWS,
} from "./utils";
import { setupAudioBeatEffect } from "./utils/audioVisualizer";
import type { TGradeRow } from "./utils/types";

import beaterOfStudents from "./assets/beater-of-students-circle.png";
import bossMusic from "./assets/beater-of-students.mp3";

const LOCAL_STORAGE_KEY = "gradeInputs";

const MIN_SCORE = 0;
const MAX_SCORE = 200;

export default function App() {
  const [rows, setRows] = createStore<TGradeRow[]>(getDefaultGradeRows());
  const [showOverlay, setShowOverlay] = createSignal(false);
  const [playBtnText, setPlayBtnText] = createSignal("Play Study Music");

  let audioElement: HTMLAudioElement;

  let currentPlayCount = 0;

  function handleToggleAudioOverlay(): void {
    const audio = document.querySelector<HTMLAudioElement>("#beat-audio");
    if (!audio) return;

    if (showOverlay()) {
      audio.pause();
      setPlayBtnText(() => "Play Study Music");
    } else {
      audio.play();

      if (currentPlayCount === 0) {
        setPlayBtnText(() => "Pause Music");
        setTimeout(() => {
          setPlayBtnText(() => "Wait, why do I hear boss music??");
        }, 1000);
        setTimeout(() => {
          if (showOverlay()) {
            setPlayBtnText(() => "Pause Music");
          } else {
            setPlayBtnText(() => "Play Study Music");
          }
        }, 6000);
      } else {
        setPlayBtnText(() => "Pause Music");
      }

      currentPlayCount += 1;
    }

    setShowOverlay((prev) => !prev);
  }

  onMount(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        let storedGrades = JSON.parse(saved) as number[][];
        storedGrades = storedGrades.slice(0, NUM_GRADE_ROWS);

        const gradeDataList: TGradeRow[] = storedGrades.map(([e1, e2, e3]) => ({
          e1: e1 ?? 0,
          e2: e2 ?? 0,
          e3: e3 ?? 0,
        }));

        while (gradeDataList.length < NUM_GRADE_ROWS) {
          gradeDataList.push({ e1: 0, e2: 0, e3: 0 });
        }
        setRows(gradeDataList);
      } catch {
        console.warn("invalid local storage data, resetting");
      }
    }

    setupAudioBeatEffect(audioElement!, ".beater1");

    audioElement!.addEventListener("ended", () => {
      setShowOverlay(() => false);
      setPlayBtnText(() => "Play Music");
    });
  });

  createEffect(() => {
    const data = rows.map(({ e1, e2, e3 }) => [e1, e2, e3]);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  });

  return (
    <>
      <h1>CSCI 320/331 Obrenic Grade Calculator</h1>
      <p class="text-xl py-4">Input your normalized exam scores below</p>
      {/* <div class="text-sm text-muted py-2">
        <p class="font-semibold">How to calculate normalized exam score:</p>
        <p>
          Divide your plain score (points earned) by the full credit value (f₁,
          f₂, or f₃) for that exam.
        </p>
      </div> */}
      <div class="text-center p-4 flex items-center justify-center gap-2">
        <button
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2"
          onClick={handleToggleAudioOverlay}
        >
          <span>
            {showOverlay() ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 4a1 1 0 011 1v10a1 1 0 01-2 0V5a1 1 0 011-1zm8 0a1 1 0 011 1v10a1 1 0 01-2 0V5a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6.5 4.5l7 5-7 5v-10z" />
              </svg>
            )}
          </span>
          {playBtnText()}
        </button>
        <audio
          id="beat-audio"
          src={bossMusic}
          preload="auto"
          // controls
          class="hidden"
          ref={audioElement!}
        />
      </div>
      <div class="overflow-x-auto py-4">
        <table class="w-full min-w-[600px] table-auto border-collapse text-lg">
          <thead>
            <tr class="border-b">
              <th class="px-4 py-2">Attempt</th>
              <th class="px-4 py-2">Exam 1</th>
              <th class="px-4 py-2">Exam 2</th>
              <th class="px-4 py-2">Exam 3</th>
              <th class="px-4 py-2">Final Grade</th>
            </tr>
          </thead>
          <tbody>
            <For each={rows}>
              {(row, idx) => (
                <AttemptRow
                  idx={idx()}
                  row={row}
                  showOverlay={showOverlay}
                  onScoreChange={(field, value) => {
                    if (value < MIN_SCORE || value > MAX_SCORE || isNaN(value))
                      return;
                    setRows(idx(), field, value);
                  }}
                />
              )}
            </For>
          </tbody>
        </table>
      </div>
      <div class="text-sm py-2">
        <p class="font-semibold mb-2">Grading Thresholds Used:</p>
        <div class="flex flex-wrap justify-center gap-4">
          <For each={GRADE_THRESHOLDS}>
            {(entry) => (
              <span>
                <span class="font-semibold">{entry.grade}:</span>{" "}
                {entry.minScore}+
              </span>
            )}
          </For>
          <span>
            <span class="font-semibold">F:</span> Below{" "}
            {GRADE_THRESHOLDS[GRADE_THRESHOLDS.length - 1].minScore}
          </span>
        </div>
      </div>
    </>
  );
}

interface AttemptRowProps {
  idx: number;
  row: TGradeRow;
  showOverlay: Accessor<boolean>;
  onScoreChange: (field: keyof TGradeRow, value: number) => void;
}

function AttemptRow(props: AttemptRowProps) {
  const aggregatedScore = createMemo(() =>
    getAggregatedScore(props.row.e1, props.row.e2, props.row.e3)
  );
  const letterGrade = createMemo(() => getLetterGrade(aggregatedScore()));
  const hasScores = createMemo(
    () => props.row.e1 !== 0 || props.row.e2 !== 0 || props.row.e3 !== 0
  );

  const ScoreInput = (inputProps: {
    field: keyof TGradeRow;
    value: number;
  }) => (
    <div class="relative">
      <input
        type="number"
        class="w-24 px-2 py-1 border rounded"
        min={MIN_SCORE}
        max={MAX_SCORE}
        value={inputProps.value}
        onInput={(e) =>
          props.onScoreChange(inputProps.field, +e.currentTarget.value)
        }
      />
      {props.showOverlay() && (
        <img
          src={beaterOfStudents}
          alt="overlay"
          class="beater1 absolute right-1 top-1 w-6 h-6 pointer-events-none opacity-80 transition-transform duration-100"
        />
      )}
    </div>
  );

  return (
    <tr class="border-b">
      <td class="px-4 py-2">{props.idx + 1}</td>
      <td class="px-4 py-2">
        <ScoreInput field="e1" value={props.row.e1} />
      </td>
      <td class="px-4 py-2">
        <ScoreInput field="e2" value={props.row.e2} />
      </td>
      <td class="px-4 py-2">
        <ScoreInput field="e3" value={props.row.e3} />
      </td>
      <td class="px-4 py-2">
        <div class="flex flex-col items-center gap-1">
          <div>
            {aggregatedScore()}
            {"  "}
            <Show when={hasScores()}>
              <span
                classList={{
                  "font-bold": true,
                  "text-success": aggregatedScore() >= 66,
                  "text-warning":
                    aggregatedScore() >= 40 && aggregatedScore() < 66,
                  "text-danger": aggregatedScore() < 40,
                }}
              >
                ({letterGrade()})
              </span>
            </Show>
          </div>
        </div>
      </td>
    </tr>
  );
}
