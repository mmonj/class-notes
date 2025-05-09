import { createEffect, For, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import "./App.css";
import { calculateScore, getDefaultGradeRows, NUM_GRADE_ROWS } from "./utils";
import type { TGradeRow } from "./utils/types";

const LOCAL_STORAGE_KEY = "gradeInputs";

const MIN_SCORE = 0;
const MAX_SCORE = 200;

export default function App() {
  const [rows, setRows] = createStore<TGradeRow[]>(getDefaultGradeRows());

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
  });

  createEffect(() => {
    const data = rows.map(({ e1, e2, e3 }) => [e1, e2, e3]);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  });

  return (
    <>
      <h1>CSCI 320 Obrenic Calculator</h1>
      <p class="text-xl py-4">Input your normalized grades below</p>
      <div class="p-6">
        <table class="w-full table-auto border-collapse text-lg">
          <thead>
            <tr class="border-b">
              <th class="px-4 py-2 text-left">Attempt</th>
              <th class="px-4 py-2 text-left">Exam 1</th>
              <th class="px-4 py-2 text-left">Exam 2</th>
              <th class="px-4 py-2 text-left">Exam 3</th>
              <th class="px-4 py-2 text-left">Final Grade</th>
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
                      <input
                        type="number"
                        class="w-24 px-2 py-1 border rounded"
                        min={MIN_SCORE}
                        max={MAX_SCORE}
                        value={row.e1}
                        onInput={(e) => handleScoreInput("e1", +e.currentTarget.value)}
                      />
                    </td>
                    <td class="px-4 py-2">
                      <input
                        type="number"
                        class="w-24 px-2 py-1 border rounded"
                        min={MIN_SCORE}
                        max={MAX_SCORE}
                        value={row.e2}
                        onInput={(e) => handleScoreInput("e2", +e.currentTarget.value)}
                      />
                    </td>
                    <td class="px-4 py-2">
                      <input
                        type="number"
                        class="w-24 px-2 py-1 border rounded"
                        min={MIN_SCORE}
                        max={MAX_SCORE}
                        value={row.e3}
                        onInput={(e) => handleScoreInput("e3", +e.currentTarget.value)}
                      />
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
