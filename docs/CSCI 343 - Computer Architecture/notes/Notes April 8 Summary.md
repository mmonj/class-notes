# CSCI 343 April 8: Midterm 2 Review (Datapaths, Pipelining, and Hazards in MIPS Architecture)

<small>Tuesday April 8, 2025</small>

---

## Drawing Individual Datapaths

- You may be required to draw one or two individual datapaths for specific instructions.
- **No control lines** are needed for these, except for the **branch instruction**, which includes a single multiplexer controlled by a zero-check.
- All wires and paths must be **labeled with bit widths** (e.g., 32-bit, 16-bit, 5-bit, etc.) and **meaningful annotations** (e.g., operand, offset, address).
- For **branch, store, load, jump** instructions, be able to explain how the **target address** is calculated.

---

## Multiplexers in the Full Datapath

### Key Multiplexers:

1. **Register Destination (RegDst)**
2. **Memory to Register (MemtoReg)**
3. **Jump/Branch Control**
4. **ALU Source (ALUSrc)**
5. **PC Source Multiplexers (e.g., for branch/jump)**

### What to Know for Each Mux:

- Which **instructions** use the mux.
- What are the **inputs**, **output**, **bit widths**, and **control signals**.
- Diagram of each mux showing:
  - All labeled inputs.
  - Labeled output.
  - Control line and setting.

### Additional Note:

- Only **one mux** (in branch datapath) connects to the zero-check signal.

---

## Control Signal Logic and Target Address Calculation

- Know how **PC + 4**, **branch target address**, and **jump address** are computed.
- The **control lines** involved include branch, jump, and zero-check.
- Know what values feed into the PC via muxes depending on the instruction.
- Understand **sign-extend vs. shift-left-2** order in target address computation.

---

## Execution Time: Single-Cycle vs. Pipeline

### Single-Cycle Design:

- **All instructions take one cycle** (fixed-length clock cycle).
- Clock cycle length must accommodate the **slowest instruction**.
- Example: Compute time required for a load by summing durations of all involved components.
  - Give **brief explanations** for each component's time.
  - Multiply by instruction count for total execution time.

### Pipelining:

- **Five pipeline stages** (not four):
  1. Instruction Fetch (IF)
  2. Instruction Decode/Register Fetch (ID)
  3. Execution (EX)
  4. Memory Access (MEM)
  5. Write Back (WB)
- Must draw pipelined execution diagrams.
- Cycle duration is determined by **longest stage**.
- Compare total execution time between single-cycle and pipelined architectures.

---

## Pipeline Hazards and Solutions

### Structural Hazards:

- **Not an issue in MIPS**, due to consistent stage use across instructions.

### Data Hazards:

- Occur when instructions **depend on results** of previous ones.
- Types:
  - **Read-after-write (RAW)** is most common.
- Examples:
  ```
  load $s1, 24($s0)
  sub $t0, $s1, $s2
  ```
  - `sub` needs `$s1` before it is updated by the load.
- **Solutions**:
  - **Stalling with bubbles**
    - Introduce NOPs to delay dependent instruction.
    - Implemented by the **Data Hazard Unit (DHU)**.
  - **Forwarding**
    - Uses pipeline registers to forward data.
    - Not always effective, e.g., `load` followed by dependent instruction.
    - Works when result is available at EX stage and needed at ALU input.

### Control Hazards:

- Caused by **branches** and **jumps**.
- Uncertainty in next PC value leads to stalls.
- MIPS uses **Delayed Branch** strategy:
  - Always execute **next sequential instruction**.
  - Ignores branch prediction logic.
  - Simple, but may execute incorrect instructions, requiring **pipeline flush**.

---

## Registers Between Pipeline Stages

- Needed to transfer data and control signals between pipeline stages.
- Important for **data forwarding** and ensuring **instructions in different stages don’t interfere**.
- Example: Load result must be passed from MEM to WB via a register.

---

## Instruction Phase Behavior

- Not all instructions are active in all pipeline phases.
- **Load** is active in all 5 stages.
- Understand instruction behavior across each phase (especially for Load, Store, R-type).

---

## Hazard Units

- **Forwarding Unit**:
  - Complex and costly.
  - Implements data forwarding to minimize stalls.
- **Hazard Detection Unit (DHU)**:
  - Detects RAW hazards.
  - Inserts bubbles as needed.

---

## Compiler Techniques for Optimization

- Compilers may **reorder instructions** to reduce hazards.
- You are **not expected** to reorganize instructions, but should be able to:
  - Identify **dependencies**.
  - Understand why reordering could help.

---

## Final Exam Relevance

- Expect problems related to:
  - **Datapath diagrams**
  - **Mux control logic**
  - **Pipelining vs. single-cycle comparisons**
  - **Hazard detection and resolution**
  - **Instruction dependencies**
- Memory and cache topics will also be introduced in the next lecture, and some **specific problems** from that area will appear in the final exam.

---

## Tips for Exam Preparation

- Practice drawing and annotating datapaths and pipeline stages.
- Understand how each instruction flows through the pipeline.
- Memorization of control settings isn't required—**reason through what control signals are needed**.
- Use pipeline diagrams to reason about **stalls, bubbles, and forwarding**.
- Be able to provide **examples of data and control hazards**, and how they are resolved.
- Review PowerPoint slides mentioned in class for concrete diagrams and forwarding examples.
