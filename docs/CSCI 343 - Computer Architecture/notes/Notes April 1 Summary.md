# CSCI 343 April 1: Control Unit, Instruction Execution, and Clock Cycle Timing

## Control Unit and Control Signals

The **control unit** receives the **opcode** (bits 31 to 26 of the instruction) and sets all relevant control lines to drive the datapath to perform the desired operation. These lines influence components such as multiplexers, the ALU, register file, and memory units.

### Control Signals by Instruction Type

Each instruction type (R-format, load, store, branch, jump) triggers specific settings in the control lines.

| Signal   | R-format | Load | Store | Branch | Jump |
| -------- | -------- | ---- | ----- | ------ | ---- |
| RegDst   | 1        | 0    | X     | X      | X    |
| MemtoReg | 0        | 1    | X     | X      | X    |
| ALUSrc   | 0        | 1    | 1     | 0      | X    |
| RegWrite | 1        | 1    | 0     | 0      | 0    |
| MemRead  | 0        | 1    | 0     | 0      | 0    |
| MemWrite | 0        | 0    | 1     | 0      | 0    |
| Branch   | 0        | 0    | 0     | 1      | 0    |
| Jump     | 0        | 0    | 0     | 0      | 1    |

Note:

- "X" means the value is irrelevant for that instruction.
- **RegDst** determines destination register (R-format uses `rd`, load uses `rt`).
- **MemtoReg** selects source for register write (ALU result or memory).
- **ALUSrc** selects second ALU operand (register vs. immediate).

### ALU Control

- The **ALU** doesn't care about instruction type; it needs to know what operation to perform.
- **ALUOp** (2 bits) from control unit and **function field** (6 bits) from instruction are inputs to a smaller ALU control unit.
- ALUOp encodings:
  - 00: Load/Store (add)
  - 01: Branch (subtract)
  - 10: R-format (use funct field)
- Output: 4-bit ALU control signal indicating operation like ADD, SUB, AND, OR, SLT, etc.

- For R-format instructions, the ALU control unit uses both `ALUOp` (10) and the instruction's function field to generate the final control signal.
- For Load/Store and Branch, the ALU control signal is derived directly from `ALUOp`.

## Clock Cycle Timing and Instruction Execution Time

Two approaches to evaluating instruction timing:

### 1. Fixed Clock Cycle (Single-Cycle CPU)

- The entire instruction executes in one clock cycle.
- Clock cycle length is determined by the **longest instruction path**.
- Once determined, it is **fixed for all instructions**.

### Component Delays (Given in picoseconds)

- Instruction/Data Memory: 200 ps
- ALU: 100 ps
- Register File (read/write): 50 ps

### Instruction Timing (Single Cycle)

| Instruction | Steps                                                               | Total Time (ps) |
| ----------- | ------------------------------------------------------------------- | --------------- |
| R-format    | Fetch (200) + Decode (50) + ALU (100) + Write-back (50)             | 400             |
| Load        | Fetch (200) + Decode (50) + ALU (100) + Memory Read (200) + WB (50) | 600             |
| Store       | Fetch (200) + Decode (50) + ALU (100) + Memory Write (200)          | 550             |
| Branch      | Fetch (200) + Decode (50) + ALU/Branch Addr Calc (100, parallel)    | 350             |

### Result

- **Load** takes the longest time: **600 ps**.
- The **clock cycle time** must be **600 ps** to accommodate the load instruction.
- Total program time = `# of instructions * 600 ps`

### 2. Weighted Average Timing (Alternative)

- Use percentages of instruction types and their individual execution times.
- Example:
  - R-format: 20% of instructions
  - Load: 50%
  - Store: 15%
  - Branch: 15%
- Total execution time = sum of (`% * instruction time`) for each type

This approach allows a more realistic evaluation of average performance, but not used in single-cycle CPU implementation.

## Inefficiencies and the Motivation for Pipelining

Using a fixed-length clock cycle based on the slowest instruction introduces inefficiencies. Instructions that require less time (like R-format or branch) are forced to wait for the full cycle length of the longest instruction (e.g., load). This means a lot of clock time is wasted on idle components during the execution of faster instructions.

For example:

- R-format completes in 400 ps, but must wait for the full 600 ps cycle.
- Branch completes in 350 ps, also delayed by 250 ps of idle time.

This waste leads to performance limitations in single-cycle designs.

**Pipelining** addresses this inefficiency by overlapping instruction stages. Instead of executing one instruction at a time from start to finish, pipelining divides execution into stages (e.g., fetch, decode, execute, memory, write-back), allowing multiple instructions to be in different stages simultaneously. This boosts throughput and better utilizes hardware resources.

## Exam-Relevant Topics Summary

- Control line settings for each instruction
- Usage of each multiplexer and associated control signals
- Individual datapath diagrams per instruction (no multiplexers; just focus on what each instruction needs)
- Address computation for PC (using two multiplexers shared by all instructions)
- Execution time analysis based on both fixed clock and weighted average approaches
- Understanding inefficiencies in single-cycle CPU as a precursor to pipelining

## Additional Notes

- In exams, the datapath diagrams will be provided.
- You must be able to determine control line values and draw individual instruction datapaths.
- Understanding what each control signal and multiplexer does is key, more than memorization.

## Next Topic: Pipelining (Coming Next Lecture)

- Will build on sequential execution
- Introduce parallelism for improved performance
- Covered using the same instruction types and datapath foundations
