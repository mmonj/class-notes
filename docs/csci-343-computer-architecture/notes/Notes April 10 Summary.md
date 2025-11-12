# CSCI 343 April 10: Memory Hierarchy, Address Decoding, and RAM Expansion

---

## Memory Structure: Small to Big, Access from Big to Small

- **Memory Composition**: Memory is built from the smallest unit (memory cell) up to larger structures:

  - A **memory cell** stores 1 bit
  - 8 cells = 1 **byte**
  - 4 bytes = 1 **word** (in MIPS)
  - Words can be grouped into **blocks**

- **Access Pattern**:

  - Building: from **cell → byte → word → block**
  - Accessing: from **block → word → byte → cell** (big to small)

- **Analogy**: Like navigating to a house:
  - Start from the **country → state → city → street → house number**
  - First worry about locating the **correct country** before we go looking for the **state**, followed by the **city**
  - Locate the **street**, and finally the **specific house number**

---

## Memory Unit: Size and Structure

- Represented as **2<sup>k</sup> × m**:

  - `k` = address size (number of bits needed for addressing)
  - `m` = word size (number of bits per word)

- A memory unit includes:

  - **Read/Write control line**
  - **Input and output data lines**
  - **Select line** (for chip selection in multi-chip setups)

- **Addressing Modes**:
  - **Byte Addressing** (e.g. in MIPS): each address points to a byte
  - **Word Addressing**: each address points to a word

---

## RAM: Types and Characteristics

### RAM = Random Access Memory

- Allows access to any location in **constant time**
- Enables uniform latency regardless of which memory location is accessed

### Two Main Types:

- **Static RAM (SRAM)**:

  - Faster, more expensive
  - Used in **cache memory**
  - Doesn't need refreshing
  - Stores data using flip-flops
  - More reliable for frequent and fast access

- **Dynamic RAM (DRAM)**:

  - Slower, cheaper
  - Used in most main memory systems
  - Stores data using capacitors that leak charge
  - Needs **periodic refreshing** (read then re-write the value to restore it)
  - Less expensive and denser than SRAM, allowing for higher capacity

- **Refreshing DRAM**:
  - DRAM cells must be refreshed periodically to retain data
  - Refresh = read the value (1 or 0) and write it back to the same cell
  - Required because capacitor charge dissipates over time

---

## Expanding RAM with Multiple Chips

### Goal: Increase memory capacity or word size

### Example Setup:

- **Base chip**: 1K × 8 RAM chip
  - 1K = 1024 words, each 8 bits
  - Address size = 10 bits (2<sup>10</sup> = 1024)

### Increase Capacity:

- Add **10 chips**, each 1K × 8
- Total capacity = **10K words**
- **Chip numbering**: 0 to 9

### Accessing Memory:

- **Decoder** is used to activate the correct chip:
  - Needs 4-bit input to uniquely identify 10 chips
  - Decoder: **4-to-16** (2<sup>4</sup> = 16 outputs, use only first 10)
  - Each output line enables **chip select** of one chip

---

## Address Partitioning and Access Logic

### Absolute Address Breakdown

- Example: access word at address **3079**
- Convert to binary: `110000001111` (12 bits)
- Assume full 32-bit address: leading zeros added

### Partitioning the Address:

- Done from **right to left**
- Two fields:
  1. **Offset** (within chip)
     - Size = address lines in chip = 10 bits (for 1K chip)
  2. **Chip number**
     - Size = input bits to decoder = 4 bits

### Offset:

- Used as address inside selected chip
- Shared across all chips, but only selected chip responds

### Chip Number:

- Extracted from higher bits
- Used as input to decoder
- Decoder activates **only one chip's select line**

---

## General Guidelines for Decoder and Memory Access

- **Decoder size** = log<sub>2</sub>(number_of_chips)

  - Example: 10 chips → 4 input bits → 16 outputs

- **Write operations**:

  - Use decoder to route to correct chip
  - Ensure correct **control line** is set

- **Read operations**:

  - Often use **multiplexers**
  - Read is passive and doesn’t modify memory

- **Multiplexers and Decoders**:
  - Multiplexers: pick specific **output** (used for reading)
  - Decoders: pick specific **input** (used for writing)

---

## Summary

- Memory grows by adding chips; addressing logic must scale with that
- Memory addresses are **partitioned into chip number and offset**
- Decoders help select the chip; offset selects the word within the chip
- SRAM vs DRAM: know their properties and usage
- The same addressing logic used in **register files** applies to RAM
- Important for exams: **explain all steps**, **justify decoder size**, and **convert addresses properly**

---
