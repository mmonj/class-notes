# CSCI 343 Review Sheet: Pipelining, Hazards, and MIPS Architecture

## Overview

This lecture focuses on instruction-level parallelism through pipelining, hazards that arise during pipelined execution, and why MIPS is designed to be pipeline-friendly. It also discusses how pipeline performance is evaluated and techniques to mitigate pipeline hazards.

---

## Instruction Execution Cycle (Non-Pipelined)

MIPS instructions generally proceed through these five stages:

1. **Instruction Fetch (IF)** – Retrieve instruction from instruction memory.
2. **Instruction Decode/Register Fetch (ID)** – Decode instruction and fetch operands from register file.
3. **Execute (EX)** – Perform operation via the ALU.
4. **Memory Access (MEM)** – Read/write data from/to memory (only for load/store).
5. **Write Back (WB)** – Write result back to register file.

Each of these phases uses a distinct component of the computer architecture, enabling the basis for parallelism.

---

## Pipelining Fundamentals

Pipelining allows overlapping the execution of multiple instructions by breaking down instruction processing into independent stages. Each stage works on a different instruction, enabling simultaneous processing.

### Visual Example

![Pipelining Instructions](image.png)

This diagram illustrates five instructions moving through five pipeline stages (IF, ID, EX, MEM, WB) over nine clock cycles. Without pipelining, 5 instructions x 5 stages = **25 clock cycles**. With pipelining: **9 clock cycles**, demonstrating a major improvement in throughput.

### Analogy: Doing Laundry

Imagine doing laundry for four loads:

- **Serially**: Wash → Dry → Fold → Store each load sequentially = 4x total time.
- **Pipelined**: Start folding the first load while drying the second and washing the third. All stages are utilized in parallel, just like pipelining.

### Benefits

- **Increased Instruction Throughput**: More instructions completed per time unit.
- **Efficient Hardware Utilization**: Each unit (e.g., ALU, register file) used every cycle.
- **Latency per instruction remains the same**, but **total runtime improves significantly** for long programs.

---

## Performance Comparison: Single-Cycle vs. Pipelined

| Metric                      | Single-Cycle                                          | Pipelined                                       |
| --------------------------- | ----------------------------------------------------- | ----------------------------------------------- |
| Clock Cycle Time            | Determined by slowest instruction (e.g., Load: 800ps) | Based on longest stage (e.g., EX or MEM: 200ps) |
| Total Time (5 Instructions) | 5 x 800ps = 4000ps                                    | 9 x 200ps = 1800ps                              |
| Throughput                  | 1 instr / 800ps                                       | 1 instr / 200ps (after fill)                    |

**Note**: Pipeline takes time to fill and drain. For small instruction sets, overhead is noticeable, but becomes negligible for large programs (e.g., 10,000 instructions).

---

## Pipeline Registers and Stage Isolation

To prevent data from being overwritten and to carry values between stages, **pipeline registers** are placed between stages:

- `IF/ID`: Stores instruction + PC (64 bits)
- `ID/EX`: Stores control signals, operands, etc.
- `EX/MEM`: Carries ALU results and destination registers
- `MEM/WB`: Stores memory output or ALU result to be written back

These registers enable concurrent execution by isolating stages and allowing independent operation.

---

## Hazards in Pipelining

Hazards are conditions that disrupt the smooth execution of pipelined instructions.

### 1. Structural Hazards

- Occur when hardware components are insufficient for parallel execution.
- **Avoided in MIPS** due to separate instruction/data memory and register file design.

### 2. Data Hazards

Caused by data dependencies between instructions.

#### Example:

```assembly
add $s0, $s1, $s2
sub $t0, $s0, $t1
```

- `$s0` is used by `sub` before `add` writes it back.

#### Solutions:

- **Stalling (Bubbles)**: Insert NOPs to delay execution.
- **Forwarding (Bypassing)**: Use ALU output directly without waiting for WB.
- **Load-Use Hazard**: When a `load` is immediately followed by a dependent instruction, forwarding alone is not enough—must **stall then forward**.

### Forwarding Example:

```assembly
add $s0, $s1, $s2
sub $t0, $s0, $t3
```

- ALU result from `add` can be forwarded to `sub`’s EX stage.

### Load-Use Example:

```assembly
lw $s0, 0($t0)
sub $t1, $s0, $t2
```

- `lw` result is only available after MEM stage, too late for `sub`’s EX stage.
- Must stall `sub` for one cycle, then forward result.

### 3. Control Hazards (Branch Hazards)

Occur due to uncertainty of branch outcome during instruction fetch.

#### Example:

```assembly
beq $s1, $s2, loop
sub $t0, $t1, $t2
```

- While branch is being resolved, the pipeline has already fetched the next instruction (`sub`).

#### Strategies:

- **Delayed Branch**: MIPS executes the next instruction after the branch regardless.
- **Branch Prediction**: Some CPUs predict and fetch accordingly, flushing if wrong.
- MIPS keeps it simple: always executes next instruction and flushes if branch is taken.

---

## MIPS Design for Pipelining

### Pipelining-Friendly Features:

- **Fixed-length instructions** (4 bytes): Easier to decode, align, and move through stages.
- **Few instruction formats**: Simplifies decoding and control logic.
- **Memory access only in load/store**: ALU instructions do not access memory.
- **Operands aligned to 4-byte boundaries**: Ensures efficient memory access.
- **Sequential data access**: Maintains order of execution and supports pipeline assumptions.

### Implications:

- Simpler pipeline control logic
- Reduced risk of hazards
- Easier hardware design and verification

---

## Hazard Detection and Forwarding Units

### Forwarding Unit

- Detects data hazards and routes data from later stages (EX/MEM or MEM/WB) back to EX inputs.
- Reduces or eliminates stalls for most ALU-ALU dependencies.

### Hazard Detection Unit

- Monitors instruction sequence for load-use hazards.
- When detected, inserts NOP by setting control signals to 0.

### Bubble (NOP) Insertion:

- Done by hazard detection unit.
- **NOP = All control lines set to 0**
- Pushes the dependent instruction one cycle forward to wait for data readiness.

---

## Summary Table of Hazard Types

| Hazard Type      | Cause                        | Solution(s)                       |
| ---------------- | ---------------------------- | --------------------------------- |
| Structural       | Hardware resource conflict   | Avoided by MIPS design            |
| Data             | Dependency on earlier result | Forwarding, Stalling, Both        |
| Control (Branch) | Uncertain branch outcome     | Delayed Branch, Static Prediction |

---

## Key Exam Tips

- Be able to **calculate total execution time** for both single-cycle and pipelined models.
- Understand when and how to apply **stalling or forwarding**.
- Draw **pipeline diagrams** showing stage progression per clock cycle.
- Provide **examples of data hazards** and how they’re resolved.
- Know how delayed branches work in MIPS and how they differ from prediction-based architectures.

---

This expanded review sheet now includes a visual diagram, detailed examples, and in-depth explanations of pipeline design and hazard handling in MIPS.
