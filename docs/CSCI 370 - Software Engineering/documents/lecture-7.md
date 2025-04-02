# CSCI 370 - Lecture 7: UML Class Diagrams and SOLID Principles

---

## UML Class Diagrams

### What is a UML Class Diagram?

A **UML (Unified Modeling Language) class diagram** provides a visual representation of the structure of a software system by showing its classes, attributes, methods, and relationships among objects. It is a low-level diagram compared to higher-level diagrams like context diagrams.

### Key Components of Class Diagrams

A UML Class Diagram typically shows five main types of information:

1. **Classes (Objects)**: The diagram identifies the different object types or classes (e.g., Animal, Duck, Fish, Zebra).

2. **Attributes and Methods**:

   - **Attributes** (e.g., age) represent the properties of a class.
   - **Methods** (e.g., quack()) represent the behaviors.
   - **Visibility Modifiers**: '+' denotes **public**, '-' denotes **private**.

3. **Relationships Between Classes**:

   - **Inheritance**: Represented with a triangle; shows one class inheriting from another.
   - **Aggregation**: Represented with a hollow diamond; shows whole-part relationships where parts can exist independently.
   - **Composition**: Represented with a filled diamond; shows whole-part relationships where parts cannot exist independently.
   - **Dependency**: Dashed arrow line; shows one class uses another temporarily.
   - **Association**: Simple lines; shows a general relationship without strong ownership.

4. **Multiplicity**:

   - Describes the number of instances of one class related to another.
   - Examples:
     - `0..*` means zero or many.
     - `1` means exactly one.
     - `1..*` means one or more.

5. **Generalization**:
   - Another term for inheritance, indicating that one class (child) generalizes or extends another (parent).

### Class Diagram Example: Online Shopping System

- **Customer to Order**: Association

  - A Customer can have zero or many Orders (`0..*`).
  - Each Order must be associated with one Customer (`1`).

- **Order to OrderDetail**: Aggregation (possibly should be Composition)

  - An Order has one or many OrderDetails (`1..*`).
  - Each OrderDetail belongs to one Order only.

- **OrderDetail to Item**:

  - Each OrderDetail is associated with exactly one Item.
  - An Item can belong to zero or many OrderDetails.

- **Payment and Its Subtypes (Credit, Cash, Check)**:
  - Payments are associated with Orders.
  - An Order must have at least one Payment.
  - A Payment can only pay for one Order.
  - Payments can be polymorphic, using multiple types.

---

## Object-Oriented Principles

### Review of Core OO Principles

1. **Encapsulation**: Hides internal state and only exposes necessary components.
2. **Abstraction**: Hides complexity and shows only essential features.
3. **Inheritance**: One class inherits properties and methods from another.
4. **Polymorphism**: A single function or method can work in different ways depending on input (e.g., `println()` in Java).

### Additional OO Principles

- **Composition over Inheritance**:

  - Prefer using objects via composition rather than inheriting from them.
  - Composition allows for more flexible and maintainable code.

- **Open-Closed Principle**:
  - Classes should be open for extension but closed for modification.
  - Encourages adding new code instead of changing existing code.

---

## SOLID Principles

### S - Single Responsibility Principle (SRP)

Each class should have only **one responsibility** or reason to change. Benefits:

- Easier to maintain and understand.
- Fewer bugs since each class does less.
- More reusable (e.g., separating logic of adding two numbers and printing the result).

### O - Open-Closed Principle

A class should be **open for extension but closed for modification**. This avoids breaking existing code and promotes extensibility.

### L - Liskov Substitution Principle

Subtypes must be substitutable for their base types **without altering the correctness** of the program.

#### Example:

- **Bad Example**: Square extends Rectangle and overrides methods in a way that breaks expected behavior (e.g., setting width changes both width and length).
- **Fix**: Use **composition** instead of inheritance (e.g., a Square class that has a Rectangle as a field and uses it internally).

### I - Interface Segregation Principle

(Not covered in this lecture.)

### D - Dependency Inversion Principle

High-level modules should not depend on low-level modules. Instead, both should depend on abstractions (e.g., interfaces). Also attributed to **Robert C. Martin (Uncle Bob)**.

- Uncle Bob coined many of these ideas and is known for clean code and architecture principles.

---

## Final Notes

- Class diagrams are essential for modeling the system architecture.
- Understanding relationships (inheritance, composition, aggregation, etc.) and multiplicity helps in accurate system design.
- The SOLID principles are foundational to writing maintainable and robust object-oriented software.
- The lecture also emphasized the practical aspect of unit testing and how design choices like inheritance can affect testability and behavior.

---

> Tip: Try reviewing different UML diagrams online and practice identifying the components discussed. Also, test your understanding by applying SOLID principles in your own code.
