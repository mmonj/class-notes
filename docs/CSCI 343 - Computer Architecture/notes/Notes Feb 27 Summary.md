# CSCI 343 March 27 - Instruction Field Usage, Register Selection, ALU Input Control, and PC Update Logic

---

### Instruction Register Field Mapping

Modern instruction sets (like MIPS) use specific bit fields within the 32-bit instruction to specify registers and control logic.

#### Key Register Fields:

- **Bits 25-21**: Register source 1 (rs)
- **Bits 20-16**: Register source 2 (rt) or destination for I-type instructions
- **Bits 15-11**: Register destination (rd) for R-type instructions
- **Bits 15-0**: Immediate value or offset (for I-type instructions)

### Reading Registers

#### Which Instructions Read the Second Register (rt)?

- **R-type instructions**: Yes (uses `rt` as a source)
- **Load (e.g., lw)**: No (uses only `rs` for address calculation)
- **Store (e.g., sw)**: Yes (data to be stored comes from `rt`)
- **Branch (e.g., beq)**: Yes (compares two registers)

> **Read Register 2 always maps to bits 20-16**, regardless of instruction type.

---

### Writing to Registers

#### Which Instructions Write to a Register?

- **Load**: Writes loaded value to destination register (`rt`, bits 20-16)
- **R-type**: Writes ALU result to `rd` (bits 15-11)

#### Multiplexer for Write Register

- **Purpose**: Selects destination register based on instruction type.
- **Inputs**:
  - `rt` (bits 20-16) for load
  - `rd` (bits 15-11) for R-type
- **Control Line**: `RegDst`
  - 0 → I-type (e.g., load)
  - 1 → R-type

---

### ALU Input Selection

#### ALU Operand 1 (First Source)

- Always comes from **rs** (bits 25-21) and is named `Read data 1`
- Used in:
  - R-type: arithmetic/logical
  - Load/Store: base address for effective address
  - Branch: one of the registers to compare

#### ALU Operand 2 (Second Source)

Two cases:

- **R-type / Branch**: Use register `rt` (bits 20-16)
- **Load/Store**: Use sign-extended immediate (offset from bits 15-0)

#### ALU Source Multiplexer

- **Inputs**:
  - Register value (`Read data 2` from `rt`)
  - Sign-extended immediate
- **Control Line**: `ALUSrc`
  - 0 → Register (R-type/Branch)
  - 1 → Immediate (Load/Store)

---

### Memory Access & Write-Back

#### Memory Access

- **Store**: Data to write comes from `rt`
- **Load**: Memory content is written back to register

#### Write-Back Stage (To Register File)

- Two sources for data to be written:
  - **From ALU**: R-type instruction result
  - **From Memory**: Load instruction

#### Multiplexer for Write Data

- **Inputs**:
  - ALU Result
  - Memory Data
- **Control Line**: `MemToReg`
  - 0 → ALU result (R-type)
  - 1 → Memory data (Load)

---

### PC (Program Counter) Update Logic

#### Instructions and PC Updates:

- **Load/Store/R-type**: `PC + 4`
- **Branch (beq)**:
  - If condition false: `PC + 4`
  - If true: `PC + 4 + (offset << 2)`
- **Jump (j)**:
  - `PC[31:28] || (instr[25:0] << 2)`

#### Multiplexers and Logic for PC Update

- **Two multiplexers chained together**:

  1. **Branch Mux**:

     - Input 0: `PC+4`
     - Input 1: branch target
     - Control: Output of `Zero AND Branch`

  2. **Jump Mux**:
     - Input 0: Output from Branch Mux
     - Input 1: jump target
     - Control: `Jump`

#### ALU `Zero` Signal Always Active

- The ALU **always sets the `Zero` signal**, regardless of the instruction.
- This means even non-branch instructions can produce a `Zero = 1` when their result is zero.
- **Why this matters**:
  - Without additional gating, the branch mux might choose the wrong path based on irrelevant ALU output.

#### Role of the AND Gate in Branch Logic

- The control logic uses an AND gate with:
  - ALU `Zero`
  - Control signal `Branch`
- This ensures that only when both are 1 (i.e., the condition is true **and** the instruction is a branch), the branch path is selected.
- Prevents false branching due to `Zero = 1` from non-branch instructions.

#### Unified PC Routing

- All instructions pass through the **same PC update chain**.
- Control lines (`Jump`, `Branch`, and ALU `Zero`) and **MUX hierarchy** ensure that the correct target is selected based on instruction type and execution result.

---

### Summary of Control Lines and their Roles

| Control Line | Purpose                               | 0 Setting          | 1 Setting          |
| ------------ | ------------------------------------- | ------------------ | ------------------ |
| `RegDst`     | Choose write register                 | `rt` (Load/I-type) | `rd` (R-type)      |
| `ALUSrc`     | Select second ALU input               | Register           | Immediate          |
| `MemToReg`   | Select write-back data                | ALU result         | Memory data        |
| `Branch`     | Used with `Zero` to decide branch     | -                  | Enable branch path |
| `Jump`       | Select between Branch result and Jump | Branch/PC+4        | Jump address       |

---

### Expectations for the Exam

- Understand and explain **each multiplexer**, including inputs, output, and control logic
- Be able to **trace PC update logic** using muxes and control lines
- For individual data paths:
  - Draw **only the necessary components**
  - Label all signal sizes and meanings
  - Include control lines **only if needed** (e.g., for branch condition)
- The full datapath diagram will be **provided on the exam**
- However, **individual instruction datapaths must be drawn manually** without unrelated parts

---
