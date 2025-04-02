# CSCI 370 - Lecture 6 Review: UML Class Diagrams and Object-Oriented Relationships

## Overview

This lecture focused heavily on UML (Unified Modeling Language) class diagrams and the key relationships between classes in object-oriented design. Concepts such as inheritance, association, aggregation, and composition were discussed in detail, including how these relationships translate into actual code. The lecture also highlighted the importance of testing in real-world environments and gave examples of software failures due to small code errors.

---

## 🛰 Software Failure Case Study: Ariane 5

### Summary:

- The Ariane 5 rocket failure (June 4, 1996) was due to a **software bug**.
- A 64-bit floating-point number was incorrectly cast to a 16-bit signed integer, causing an **overflow**.
- Both the **primary** and **backup systems** failed because they shared the same bug.
- Takeaways:
  - Even **minor coding errors** can lead to catastrophic results.
  - Importance of **testing in real-world environments**.
  - The need for **robust exception handling**.
  - Backup systems must be **independently verified**.

---

## 📦 UML Class Diagrams

### What is UML?

- UML (Unified Modeling Language) is a standardized way to visualize the design of a system.
- The **Class Diagram** is one of the most commonly used UML diagrams.

### Class Diagram Basics

A UML class diagram typically includes:

- **Class Name** (top section)
- **Attributes** (middle section)
- **Methods/Operations** (bottom section)

### Example:

For a class representing an animal:

```
+----------------+
|    Animal      |
+----------------+
| -name: String  |
| -age: int      |
+----------------+
| +getName(): String |
| +setName(String): void |
+----------------+
```

Symbols:

- `+` = public
- `-` = private

---

## 📚 Object-Oriented Relationships in UML

### 1. Inheritance (Generalization)

- Represented by a **hollow triangle** pointing to the parent class.
- Example: `Horse`, `Otter`, and `Slow Loris` inherit from `Animal`.
- Benefit: Enables **code reuse** and **polymorphism**.

### 2. Association

- Represented by a **solid line** between classes.
- Denotes a general relationship, e.g., `Person` owns `Dog`.
- May include **multiplicity** (e.g., one-to-many, one-to-one).

### 3. Aggregation ("Has-a" Relationship)

- Represented by a **hollow diamond**.
- Whole-part relationship where the part **can exist independently**.
- Example: `Class` aggregates `Student`; students can exist without the class.

### 4. Composition

- Represented by a **filled diamond**.
- Strong whole-part relationship where the part **cannot exist without the whole**.
- Example: `Order` has `OrderDetails`; if `Order` is deleted, so is `OrderDetails`.

### 5. Dependency

- Represented by a **dashed arrow**.
- One class **uses** another, typically as a **method parameter**.
- Example: `Dog` depends on `Food` in `eat(Food food)`.

---

## 🔁 Multiplicity in Relationships

Indicates how many instances of one class relate to instances of another.
Examples:

- `1` — exactly one
- `0..1` — zero or one
- `0..*` — zero or many
- `1..*` — at least one
- `0..5` — up to five

Example:

- `Customer` has `0..*` `Orders`.
- Each `Order` belongs to `1` `Customer`.

---

## 🧱 Abstraction and Abstract Classes

- Abstract classes **cannot be instantiated**.
- Serve as **blueprints** for other classes.
- UML typically uses _italicized class names_ to denote abstract classes.

---

## 🧪 Practical Tools & Application

- Tools like **Visual Paradigm** allow users to create UML diagrams easily.
- You can add attributes, methods, and relationships using GUI tools.
- Some software can generate **code from diagrams** or vice versa.

### Code Examples:

**Dependency Example:**

```java
class Food {}
class Dog {
    public void eat(Food food) {}
}
```

**Inheritance Example:**

```java
class Animal {}
class Dog extends Animal {}
```

**Composition Example:**

```java
class Tesla {
    Engine[] engines = new Engine[3];
    public Tesla() {
        engines[0] = new Engine();
    }
    class Engine {}
}
```

**Aggregation Example:**

```java
class Person {
    Dog[] dogs = new Dog[5];
}
```

---

## ✅ Key Takeaways

- Class diagrams model the **structure** of a system using classes and relationships.
- **UML relationships** clarify how objects interact: Inheritance, Association, Aggregation, Composition, Dependency.
- Proper diagramming helps with **code understanding**, **communication**, and **design planning**.
- Code examples reinforce the UML concepts.
- Knowing these concepts is **highly useful** in job interviews and real-world software engineering tasks.

---

> "UML diagrams aren't meant to be perfect; they're meant to communicate design ideas. Spend your time coding, not making perfect diagrams." – Professor
