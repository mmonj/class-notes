# CSCI 370 - Lecture 9 Review: SOLID Principles Continued, Low-Code/No-Code Platforms, and Dependency Inversion

---

## Table of Contents

1. [Low-Code and No-Code Development Tools](#1-low-code-and-no-code-development-tools)
2. [SOLID Principles - Continued](#2-solid-principles---continued)
   - Liskov Substitution Principle (Review)
   - Interface Segregation Principle (ISP)
   - Dependency Inversion Principle (DIP)
3. [Precision in Financial Software](#3-precision-in-financial-software)
4. [Using Interfaces for Flexibility](#4-using-interfaces-for-flexibility)
5. [Designing for Generalization](#5-designing-for-generalization)

---

## 1. Low-Code and No-Code Development Tools

- **Low-Code** platforms allow app development using mostly visual tools, requiring minimal traditional programming.
  - Example tools: Google AppSheet, Microsoft Power Apps, ServiceNow
- **No-Code** platforms go further by enabling app development without any programming knowledge.
  - Example tools: Wix, WordPress
- **Benefits:**
  - Faster development cycles
  - Accessible to non-developers
  - Easier prototyping and iteration
  - Business users can create tools without needing a dev team
- **Challenges:**
  - Limited customization and scalability
  - Risk of vendor lock-in
  - Performance may degrade with complex or data-heavy apps

---

## 2. SOLID Principles - Continued

### Liskov Substitution Principle (Review)

- A derived class should be substitutable for its base class without altering the correctness of the program.
- **Example:**
  - If `Rectangle` is a base class and `Square` inherits from it, then calling methods on `Square` should behave like `Rectangle`.
  - If `Rectangle.getArea()` gives expected results, so should `Square.getArea()`.

### Interface Segregation Principle (ISP)

- Clients should not be forced to depend on methods they do not use.
- **Explanation:**
  - Rather than having one large interface with unrelated methods, split into smaller, more cohesive interfaces.
  - **Example:**
    - Interface `Math` has `add()` and `printResult()`.
    - `Calculator` class shouldn’t be forced to implement `printResult()` if it just does math.
    - Solution: Split into `Math` and `PrintMathResult` interfaces.

### Dependency Inversion Principle (DIP)

- High-level modules should not depend on low-level modules. Both should depend on abstractions.
- **Explanation:**
  - Rather than hardcoding a dependency (e.g., `BankAccount` uses `MySQL`), depend on an interface.
  - **Example:**
    - Create a `Database` interface with method `saveBalance()`.
    - `MySQL` and `Oracle` both implement `Database`.
    - `BankAccount` depends on `Database`, not specific implementations.
- **Benefits:**
  - Easier to switch implementations
  - Promotes code reuse and testability
  - Reduces tight coupling

---

## 3. Precision in Financial Software

- **Avoid using `double`** for financial calculations due to floating-point inaccuracies.
- **Preferred solutions:**
  - Use integers representing the smallest unit (e.g., pennies)
  - For $1.00, store 100 (pennies)
- **Real-world practice:**
  - Companies like Stripe store monetary values in integers (pennies or smaller)
  - Ensures accuracy, especially when dividing amounts

---

## 4. Using Interfaces for Flexibility

- **Scenario:** Switching from `MySQL` to `Oracle` requires refactoring if tightly coupled.
- **Solution:**
  - Define an interface `Database`
  - `BankAccount` uses a `Database` reference instead of a concrete class
  - Pass either `MySQL` or `Oracle` objects at runtime
- **Key Design Idea:**
  - Depend on the **most general type possible** (e.g., interfaces) to support flexibility and reduce change

---

## 5. Designing for Generalization

- Prefer **general data structures** (e.g., `Iterable`) over specific ones (e.g., `List`) when possible
- **Example:**
  - A method takes `List<BankAccount>` but only iterates through it
  - Better to use `Iterable<BankAccount>` to allow more data structures (e.g., sets, queues)
- **Lesson:**
  - The more general your method parameter types, the more reusable and flexible your code becomes

---

## Summary of Key Takeaways

- Use low-code/no-code tools for quick prototypes and simple apps
- Interface Segregation Principle: Keep interfaces cohesive and purpose-specific
- Dependency Inversion Principle: Depend on abstractions, not concrete implementations
- Financial software should avoid floating-point errors by storing money in integer units
- Generalize method inputs to reduce coupling and increase compatibility

---

> **Next Class:** No Thursday class due to Wednesday schedule. Exam expected on **March 25th** (as per course schedule).
