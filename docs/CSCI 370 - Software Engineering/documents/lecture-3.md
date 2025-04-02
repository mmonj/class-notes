# CSCI 370 - Lecture 4: The Problem with Inheritance and the Case for Composition

---

### Overview

This lecture covered several key ideas in Software Engineering, particularly focusing on:

- The pros and cons of adding more team members in software development.
- Differentiating between **requirements** and **specifications**.
- The problems associated with **inheritance** in object-oriented programming (OOP).
- The introduction of **composition** as a preferred alternative to inheritance.
- The **Strategy Design Pattern** as an application of composition.

---

### 1. **Does Adding More Team Members Speed Up Software Development?**

#### Pros:

- **Workload Distribution**: More people can share the workload, reducing stress and potential burnout.
- **Specialization**: Team members can specialize in particular tasks, improving efficiency.
- **Focus**: Reduced workload allows team members to concentrate on specific tasks.

#### Cons:

- **Communication Overhead**: More team members increase the need for clear instructions; miscommunication can lead to duplicate or conflicting work.
- **Skill Alignment**: Adding members with the same specialization leads to inefficiencies.
- **Experience Level**: Adding beginners may slow the team down, especially if their work interferes with advanced developers.

**Conclusion**: Adding team members **does not always** speed up development; it depends on team composition, communication, and skills.

---

### 2. **Requirements vs Specifications**

#### Requirements:

- Describe **what** the system should do.
- Aimed at stakeholders, executives, and customers.
- Example questions:
  - What can the application do?
  - What constraints does it have?
  - What are the selling points?
- Analogy: Like pitching the app to a customer or executive.
- Examples:
  - Uber Eats: allows food ordering, location tracking.
  - Games: describes available gameplay modes.

#### Specifications:

- Describe **how** the system will fulfill requirements.
- Highly technical and meant for the development team.
- Include decisions about:
  - Programming languages
  - Data structures (linked lists, hash tables, etc.)
  - Interfaces and encryption
- Example:
  - User data will be hashed for security.
  - Users will interact through drag-and-drop interfaces.

**Summary**:

- Requirements are promises to stakeholders.
- Specifications are instructions to the development team.

---

### 3. **Problems with Inheritance in OOP**

#### Inheritance:

- Mechanism to **reuse code** from other classes.
- Example: Class `D` inherits from class `C` to reuse `method1`.

#### Major Issues:

1. **Single Inheritance in Java**:

   - Java allows only **single inheritance**.
   - You can't inherit from multiple classes (e.g., can’t get both `A.method1` and `C.method1`).

2. **Inheriting Unwanted Methods**:

   - Subclasses inherit all methods and must **override** or **remove** unwanted ones.
   - Leads to code like empty method implementations (to disable behavior).

3. **Inheritance Chain Complexity**:

   - Long chains (e.g., `C` -> `D` -> `E`) make it hard to understand what functionality is inherited.
   - Changing a parent class can **break child classes**, causing fragility.

4. **Tight Coupling**:
   - Inheritance leads to **strong coupling** between parent and child.
   - A change in one class affects all descendants.

#### Real-World Consequences:

- Developers are hesitant to change parent classes for fear of breaking code.
- Often leads to workarounds and redundant classes.

#### This is known as the **Fragile Base Class Problem**.

---

### 4. **Composition Over Inheritance**

#### Composition:

- A class **contains** instances of other classes instead of inheriting from them.
- Offers more **flexibility** and **decouples** components.
- Example:

  ```java
  class DD {
      A a = new A();
      B b = new B();
      C c = new C();

      void method() {
          a.method1();
          b.method2();
          c.method1();
      }
  }
  ```

#### Benefits:

- Choose exactly which methods to reuse.
- Avoids problems of inheritance chains.
- Easier to understand, maintain, and modify.

#### Principle:

> **Prefer Composition Over Inheritance**

This is the **5th Object-Oriented Principle** covered in the course.

---

### 5. **Strategy Design Pattern**

#### Purpose:

- Demonstrates how to use **composition** to vary behavior at runtime.

#### Problem Example:

- Different duck types: `QuackingDuck`, `FlyingDuck`, etc.
- Instead of creating a massive inheritance structure...

#### Solution:

- Define **interfaces** for behaviors:

  ```java
  interface FlyBehavior {
      void fly();
  }

  interface QuackBehavior {
      void quack();
  }
  ```

- Implement these behaviors in **concrete classes**:

  ```java
  class FlyHigh implements FlyBehavior {
      public void fly() { System.out.println("Flying high!"); }
  }

  class RegularQuack implements QuackBehavior {
      public void quack() { System.out.println("Regular quack"); }
  }
  ```

- Compose them in a `Duck` class:

  ```java
  class Duck {
      FlyBehavior flyBehavior;
      QuackBehavior quackBehavior;

      Duck(FlyBehavior f, QuackBehavior q) {
          this.flyBehavior = f;
          this.quackBehavior = q;
      }

      void performFly() { flyBehavior.fly(); }
      void performQuack() { quackBehavior.quack(); }
  }
  ```

- In `main()`:
  ```java
  Duck d = new Duck(new FlyHigh(), new RegularQuack());
  d.performFly();    // Output: Flying high!
  d.performQuack();  // Output: Regular quack
  ```

#### Key Idea:

- You can switch behavior at runtime by changing the composed objects.
- Promotes **flexibility** and **reuse** without inheritance.

---

### Summary

- Inheritance can lead to **rigid**, **fragile**, and **hard-to-maintain** code.
- **Composition** offers a better way to reuse code with less coupling.
- The **Strategy Design Pattern** illustrates how to apply composition to vary behavior dynamically.
- This lecture introduced the **5th OOP Principle**: **Prefer composition over inheritance**.
