import { createEffect, createSignal, For, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import "./App.css";
import { calculateScore, getDefaultGradeRows, NUM_GRADE_ROWS } from "./utils";
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

  let currentPlayCount = 0;

  function handleToggleAudioOverlay(): void {
    const audio = document.getElementById("beat-audio") as HTMLAudioElement | null;
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
        const parsed = JSON.parse(saved) as number[][];
        const limited = parsed.slice(0, NUM_GRADE_ROWS);
        const restored: TGradeRow[] = limited.map(([e1, e2, e3]) => ({
          e1: e1 ?? 0,
          e2: e2 ?? 0,
          e3: e3 ?? 0,
        }));
        while (restored.length < NUM_GRADE_ROWS) {
          restored.push({ e1: 0, e2: 0, e3: 0 });
        }
        setRows(restored);
      } catch {
        console.warn("invalid local storage data, resetting");
      }
    }

    setupAudioBeatEffect("#beat-audio", ".beater1");
  });

  createEffect(() => {
    const data = rows.map(({ e1, e2, e3 }) => [e1, e2, e3]);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  });

  return (
    <>
      <h1>CSCI 320 Obrenic Grade Calculator</h1>
      <p class="text-xl py-4">Input your normalized exam scores below</p>
      <div class="text-center p-4">
        <button
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleToggleAudioOverlay}
        >
          {playBtnText()}
        </button>
        <audio
          id="beat-audio"
          src={bossMusic}
          preload="auto"
          // controls
          class="hidden"
        />
      </div>
      <div class="overflow-x-auto">
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
              {(row, idx) => {
                const handleScoreInput = (field: keyof TGradeRow, value: number) => {
                  if (value < MIN_SCORE || value > MAX_SCORE || isNaN(value)) return;
                  setRows(idx(), field, value);
                };

                return (
                  <tr class="border-b">
                    <td class="px-4 py-2">{idx() + 1}</td>
                    <td class="px-4 py-2">
                      <div class="relative">
                        <input
                          type="number"
                          class="w-24 px-2 py-1 border rounded"
                          min={MIN_SCORE}
                          max={MAX_SCORE}
                          value={row.e1}
                          onInput={(e) => handleScoreInput("e1", +e.currentTarget.value)}
                        />
                        {showOverlay() && (
                          <img
                            src={beaterOfStudents}
                            alt="overlay"
                            class="beater1 absolute right-1 top-1 w-6 h-6 pointer-events-none opacity-80 transition-transform duration-100"
                          />
                        )}
                      </div>
                    </td>
                    <td class="px-4 py-2">
                      <div class="relative">
                        <input
                          type="number"
                          class="w-24 px-2 py-1 border rounded"
                          min={MIN_SCORE}
                          max={MAX_SCORE}
                          value={row.e2}
                          onInput={(e) => handleScoreInput("e2", +e.currentTarget.value)}
                        />
                        {showOverlay() && (
                          <img
                            src={beaterOfStudents}
                            alt="overlay"
                            class="beater1 absolute right-1 top-1 w-6 h-6 pointer-events-none opacity-80 transition-transform duration-100"
                          />
                        )}
                      </div>
                    </td>
                    <td class="px-4 py-2">
                      <div class="relative">
                        <input
                          type="number"
                          class="w-24 px-2 py-1 border rounded"
                          min={MIN_SCORE}
                          max={MAX_SCORE}
                          value={row.e3}
                          onInput={(e) => handleScoreInput("e3", +e.currentTarget.value)}
                        />
                        {showOverlay() && (
                          <img
                            src={beaterOfStudents}
                            alt="overlay"
                            class="beater1 absolute right-1 top-1 w-6 h-6 pointer-events-none opacity-80 transition-transform duration-100"
                          />
                        )}
                      </div>
                    </td>
                    <td class="px-4 py-2">{calculateScore(row.e1, row.e2, row.e3)}</td>
                  </tr>
                );
              }}
            </For>
          </tbody>
        </table>
      </div>
    </>
  );
}
