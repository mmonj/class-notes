# CSCI 370 Lecture 15: Object-Oriented Principles in ADTs, Project Guidelines, and the Memento Pattern

<small>Tuesday, April 8</small>

---

## Abstract Data Types and OOP Principles

### Abstract Data Types (ADTs)

An **Abstract Data Type (ADT)** defines the logical behavior of a data structure without specifying how it is implemented. It is a conceptual blueprint that focuses on _what_ operations are supported, not _how_ they are performed. For example, a Stack ADT typically supports the following operations:

- `push(item)` – add item
- `pop()` – remove the top item
- `peek()` – look at the top item
- `isEmpty()` – check if the stack is empty

These operations are always expected from a stack, regardless of whether it is implemented via an array or linked list.

### OOP Principles Demonstrated in ADTs

1. **Encapsulation**: The internal representation (e.g., array or linked list) is hidden. Only the interface (methods) is exposed.
2. **Abstraction**: The ADT focuses on _what_ the structure does, not _how_.
3. **Runtime Polymorphism**: Different concrete implementations (like `ArrayList` and `LinkedList`) can be used through a common interface (`List`). This allows behavior to remain consistent while the underlying data structure varies.

Example:

```java
List<String> list1 = new ArrayList<>();
List<String> list2 = new LinkedList<>();
```

Both lists support the same operations, demonstrating runtime polymorphism.

---

## Project Guidelines and Deliverables

Each student is assigned a design pattern (with the option to switch to a more challenging one). The final deliverable includes:

### 1. UML Diagram (10%)

- Can be sourced online and edited to match your implementation
- Should reflect your own class and interface names (e.g., `StockMarket` instead of `Subject`)
- Use class diagrams that identify interfaces and concrete implementations appropriately

### 2. Code Implementation (80%)

- Must follow Java coding conventions:
  - Class/type names: Start with uppercase
  - Variables and methods: Start with lowercase
- Should include at least **three classes**, each in a separate file unless using inner classes
- Students may use Replit to build and host the code, but it does not have to compile there—code should be compilable in local environments like IntelliJ or Eclipse
- Complexity is expected but flexible; there is no specific line count requirement as long as the project demonstrates the pattern clearly

### 3. Unit Tests (10%)

- Written using JUnit (e.g., `assertTrue`, `assertFalse`)
- Must test true/false conditions, not rely on manual output checking
- Tests should be **automated and self-contained**, not written inside `main()`

Example:

```java
Assert.assertTrue(p.name.equals("FRED"));
Assert.assertFalse(p != null);  // expects p to be null
```

Unit tests must use assertions and not rely on output statements like `System.out.println()`, since tests may be run in headless environments.

---

## Java Builder Pattern Example Summary

A `PersonBuilder` class extends the `Person` class and allows construction using a step-by-step fluent interface.

### Key Concepts:

- Mandatory fields are set via `setImportantInfo()`
- Optional fields are set via `setOptionalInfo()` and `setCategoryAthruZ()`
- `validate()` ensures that important fields are not blank
- The `build()` method returns a `_Person` object if validation passes, or `null` otherwise

```java
Person p = pb.setImportantInfo("12888", "FRED")
             .setOptionalInfo(0, "")
             .setCategoryAthruZ("D")
             .build();
```

A failed validation returns `null`, which can be checked with assertions in unit testing.

---

## Memento Pattern (Java Implementation)

### Motivation

The **Memento Pattern** is used to capture and restore an object's state, enabling undo functionality. It is an application of the **Single Responsibility Principle (SRP)**: keep history management separate from the object’s core functionality.

### Before Refactoring (Without Memento)

The `WordProcessor` class stored its own history:

```java
List<String> headerHistory = new ArrayList<>();
List<Font> fontHistory = new ArrayList<>();
```

This tightly coupled the history logic with the business logic and violates SRP by making one class manage both content and its history.

### After Refactoring (Using Memento)

Three separate classes are used:

1. **SnapshotOfDocument** – holds a copy of the document state (header and font)
2. **DocHistory** – manages a stack of snapshots, with `save()` and `get()` methods for pushing and popping
3. **WordProcessor2** – the refactored document class
   - Provides `getMemento()` and `setMemento()` methods
   - Only responsible for its current state, not history management

### Main Program Demonstration

```java
WordProcessor2 doc = new WordProcessor2();
DocHistory history = new DocHistory();
doc.setHeader("FRED");
history.save(doc.getMemento());
doc.setHeader("SAM");
System.out.println(doc.getHeader()); // Prints: SAM
doc.setMemento(history.get());
System.out.println(doc.getHeader()); // Prints: FRED
```

This allows history logic to be maintained independently of the WordProcessor’s internal logic, reducing the risk of bugs and improving modularity.

### Benefits

- Cleaner code: `WordProcessor2` has no internal logic for managing previous states
- SRP is upheld: `DocHistory` and `SnapshotOfDocument` take over the history-related responsibilities
- Easy to scale: More fields can be added to `SnapshotOfDocument` as needed, while keeping the `WordProcessor2` class clean

---

## Types of Task Dependencies in Project Management

Dependencies define the order and relationship between tasks. There are four main types:

1. **Finish to Start (FS)**

   - Task B cannot start until Task A is finished
   - Example: Testing cannot begin until development is done

2. **Start to Start (SS)**

   - Task B cannot start until Task A has started
   - Example: You can’t record a tutorial until the coding process has begun

3. **Finish to Finish (FF)**

   - Task B cannot finish until Task A is finished
   - Example: Testing cannot be finalized until all code is finalized

4. **Start to Finish (SF)**
   - Task B cannot finish until Task A has started (less common)
   - Example: Cannot decommission an old server until a new one is up and running

These concepts are useful in project planning, especially in team environments, to prevent overlaps and ensure correct sequencing.

---

## Summary of Lecture 15 Topics

- Object-Oriented Principles applied in ADTs
- Clarified project structure and grading rubric
- Reviewed Builder Pattern implementation in Java
- Detailed Memento Pattern implementation with Java classes
- Covered software design principles like SRP
- Discussed how unit testing with JUnit should be structured
- Introduced types of task dependencies in software project workflows
- Mentioned upcoming design patterns to be covered: Iterator, Memento (completed), and Command

---
