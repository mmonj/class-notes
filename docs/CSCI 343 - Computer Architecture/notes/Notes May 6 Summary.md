# CSCI 343 May 6: Cache Misses, Associativity, Replacement Policies, and Snooping Protocols

---

## Types of Cache Misses

Cache misses occur when the CPU requests a memory block that is not currently in the cache. These are categorized as follows:

1. **Compulsory Misses**:

   - Also known as cold-start misses.
   - Occur when a block is accessed for the first time and is not yet in the cache.
   - Unavoidable on first access.

2. **Capacity Misses**:

   - The cache cannot contain all the blocks needed during execution.
   - Even with optimal replacement, some blocks are evicted and then needed again.

3. **Conflict Misses**:

   - Also known as collision misses.
   - Occur when multiple blocks compete for the same cache line or set.
   - For example, blocks 0 and 4 both mapping to line 0 in a direct-mapped cache will cause conflicts.

---

## Cache Mapping and Associativity

Cache mapping strategies influence the occurrence of conflict misses:

1. **Direct-Mapped Cache**:

   - Each block maps to exactly one line.
   - Simplest and fastest lookup.
   - High conflict miss rate due to fixed mapping.

2. **Fully Associative Cache**:

   - Any block can go into any line.
   - Minimizes conflict misses.
   - Hardware is complex due to the need to search all lines.

3. **Set-Associative Cache**:

   - A compromise between direct-mapped and fully associative.
   - The cache is divided into sets, and each set contains multiple lines.
   - An _n_-way set-associative cache allows a block to go into _n_ different locations (within its set).

---

## Replacement Policies

When a cache set is full, a block must be replaced. Common strategies:

1. **Random Replacement**:

   - Replace a randomly selected block in the set.
   - Simple but potentially inefficient.

2. **Least Recently Used (LRU)**:

   - Replaces the block that hasn’t been used for the longest time.
   - Effective but requires tracking access order.

3. **First-In-First-Out (FIFO)**:

   - Removes the block that has been in the cache the longest.
   - Simpler than LRU, but may evict frequently used blocks.

4. **Least Frequently Used (LFU)**:

   - Replaces the block used least often.
   - Can become expensive due to frequency tracking.

---

## Snooping Protocols and Cache Coherence

In multiprocessor systems, **cache coherence** ensures that all processors see a consistent view of memory. The **snooping protocol** is one method used to maintain coherence.

### Overview of Snooping Protocol

- Each cache controller monitors (or "snoops on") a shared communication bus.
- When a processor writes to a memory block, all other caches check if they have a copy of that block.
- If a copy exists, they take action based on the protocol (e.g., invalidate, update).

### Common Snooping-Based Protocols

1. **Write-Invalidate**:

   - When a processor writes to a block, all other caches invalidate their copies.
   - Simple and efficient for cases where writes are infrequent.

2. **Write-Update (or Write-Broadcast)**:

   - When a processor writes to a block, it also broadcasts the new data to other caches.
   - Keeps caches updated but may incur high traffic.

### Key Points

- Snooping works best with a broadcast medium (e.g., a shared bus).
- Protocols must ensure that only one processor can write to a block at a time (using mechanisms like MESI).
- In contrast, **directory-based protocols** are more scalable and are used in systems without a broadcast bus.

---

## Summary of Cache Line Assignment Effects

- A fully associative cache allows total flexibility in block placement but has more complex hardware.
- Set-associative caches provide a good balance and are common in practice.
- The number of sets and the degree of associativity directly affect the miss rates.

---

## Diagram Hint

To visualize conflict misses in direct-mapped caches, you can draw a diagram showing:

- A few cache lines (e.g., 4 lines).
- Memory blocks that map to the same line.
- A sequence of accesses showing how earlier blocks are evicted when a new block with the same mapping arrives.

---

This lecture solidifies the foundational understanding of cache behavior, emphasizing the importance of associativity, replacement, and coherence in multiprocessor systems.
