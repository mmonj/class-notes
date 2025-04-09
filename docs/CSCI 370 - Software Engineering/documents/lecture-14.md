# CSCI 370 Lecture 14: UML Diagrams, Builder Pattern, State Pattern, Decorator Pattern

<small>Thursday, April 3</small>

---

## Unified Modeling Language (UML) Diagrams: Visualizing Software Architecture

UML diagrams serve as a foundational tool in software engineering for visualizing, specifying, constructing, and documenting the artifacts of a system. They allow developers to communicate system structure and behavior in a consistent and clear way.

During this lecture, the top three most frequently used UML diagrams were covered:

### 1. Class Diagrams

Class diagrams are arguably the most commonly used UML diagram type. They:

- Depict the **static structure** of a system.
- Define the **classes**, **attributes**, **methods**, and **relationships** (such as inheritance and associations).
- Are useful for:
  - **Detailed system design**: outlining internal classes and their interaction.
  - **Database schema modeling**: representing tables as classes and relationships as associations.
  - **Documentation**: helping future developers or new team members understand class responsibilities and data models.

Example use case: In a banking application, a class diagram might illustrate the `Account`, `Customer`, and `Transaction` classes, including the methods each supports and how they interrelate.

### 2. Sequence Diagrams

These diagrams model **dynamic behavior** by showing how objects interact over time:

- Emphasize **time-based interactions** between objects.
- Display the **order of messages exchanged**.
- Include lifelines (representing the lifetime of an object), activations (when an object is active), and messages (function calls or returns).
- Used to:
  - Validate use cases.
  - Document **specific scenarios** or **user flows**.
  - Clarify **message ordering and timing**.

Example use case: Representing a login scenario in a web application where the user enters credentials, which are validated by the authentication service, and either a success or failure is returned.

### 3. Use Case Diagrams

Use case diagrams show **functional requirements** and how users (actors) interact with the system:

- Focus on **what the system should do**, not how.
- Useful for:
  - Gathering requirements from stakeholders.
  - Defining the **scope** of a system.
  - Facilitating early-stage discussions and planning.

These diagrams typically include users (actors) and the system’s capabilities (use cases), showing which users can perform which actions.

Example: A file upload system might have a use case diagram showing `Upload Document`, `Delete Document`, and `View Document`, with actors such as `User`, `Admin`, and `Guest`, each with different access.

### Summary: Why UML Matters

UML diagrams simplify communication, planning, and documentation. They allow developers to:

- Explain large codebases quickly to newcomers.
- Reduce misunderstandings and improve system design quality.
- Handle complexity by breaking systems into clear components.

Without UML, onboarding new team members or managing large projects becomes significantly more difficult.

---

## Builder Pattern: Controlled Object Construction with Validation

The **Builder Pattern** provides a flexible solution to object creation problems when a class has numerous fields. Rather than having a constructor with dozens of parameters, the builder allows step-by-step creation with validation along the way.

### Builder Pattern Goals

1. **Prevent creation of invalid objects** by encapsulating validation logic.
2. **Make object creation more readable and self-documenting**, with method names indicating required and optional fields.

### Key Concepts

- The object is built in **stages**, with each setter returning the builder.
- The `build()` method performs **validation checks** before returning the object.
- Often uses **method chaining**, making the API intuitive.

### Code Architecture (From Lecture)

We had the following structure:

- `Person`: An **abstract base class** defining common fields.
- `PersonBuilder`: Extends `Person` and includes logic for building a `Person` safely.
- `_Person`: A **private inner class** inside `PersonBuilder`, instantiated only if validation passes.

#### Person.java (simplified structure):

```java
public abstract class Person {
    protected String name;
    protected int age;
    protected String phone;
    protected String street;
    protected String category;
    public Person() {}
}
```

#### PersonBuilder.java

```java
public class PersonBuilder extends Person {
    public PersonBuilder setImportantInfo(String phone, String name) { ... }
    public PersonBuilder setOptionalInfo(int age, String street) { ... }
    public PersonBuilder setCategoryAthruZ(String category) { ... }

    private boolean validate() {
        return !(phone.isBlank() || name.isBlank());
    }

    public Person build() {
        if (!validate()) return null;
        Person p = new _Person();
        // Copy all fields into new object
        return p;
    }

    private class _Person extends Person {}
}
```

### Building the Object

```java
PersonBuilder pb = new PersonBuilder();
Person p = pb.setImportantInfo("12888", "FRED")
             .setOptionalInfo(0, "")
             .setCategoryAthruZ("D")
             .build();
```

If `phone` or `name` is blank, the object is not created (returns `null`).

### Benefits in Practice

- Reduces reliance on verbose constructors.
- Enforces constraints at build time.
- Improves clarity and maintenance.
- Particularly useful when only a subset of fields is required.

This approach also conveys developer intent directly through method names (e.g., `setImportantInfo` vs. `setOptionalInfo`).

---

## State Pattern: Modeling Object Behavior Across States

The **State Pattern** is used to allow an object to change its behavior based on its internal state. Each state is represented as a class that defines specific behavior, and the object delegates actions to its current state.

### Key Features

- Implements **behavioral changes at runtime**.
- Avoids large conditional statements (e.g., `if...else` or `switch`).
- Makes code more modular and testable.

### Differences from Strategy Pattern

| State Pattern                              | Strategy Pattern                               |
| ------------------------------------------ | ---------------------------------------------- |
| Behavior depends on current internal state | Behavior selected externally, passed by client |
| States often **change dynamically**        | Strategy typically stays constant              |
| Example: Game characters switching modes   | Example: Choosing payment method               |

### Example: Car Transmission

In this example, the `Car` class has multiple driving modes (`Park`, `Drive`), and behavior changes based on the mode.

#### Class Hierarchy:

- `DriveState`: Abstract class with pointers to `prev` and `next` states, and `drive()` method.
- `Park`: Implements `drive()` as being unable to move.
- `Drive`: Implements `drive()` to simulate cruising.
- `Car`: Maintains `currentState` and delegates actions.

#### DriveState.java:

```java
public abstract class DriveState {
    public DriveState prev, next;
    public abstract void drive();
    public DriveState shiftUp() { return (next != null) ? next : this; }
    public DriveState shiftBack() { return (prev != null) ? prev : this; }
}
```

#### Car.java:

```java
public class Car {
    DriveState park = new Park();
    DriveState drive = new Drive();
    DriveState currentState = park;

    public Car() {
        park.next = drive;
        drive.prev = park;
    }

    public void shiftUp() { currentState = currentState.shiftUp(); }
    public void shiftBack() { currentState = currentState.shiftBack(); }
    public void drive() { currentState.drive(); }
}
```

#### Main.java:

```java
Car car = new Car();
car.drive();       // Output: "VROOM I cannot move"
car.shiftUp();
car.drive();       // Output: "Hi I am cruising at 30 MPH"
car.shiftBack();
car.drive();       // Output: "VROOM I cannot move"
```

### Benefits

- Each state encapsulates logic independently.
- Simplifies context classes (like `Car`) by offloading logic to states.
- New states can be added easily without changing existing code.

This approach is also particularly useful in games, UI workflows, or any application with clearly delineated modes.

---

## Decorator Pattern: Dynamic Behavior Extension

The **Decorator Pattern** is a structural pattern that allows behavior to be added to individual objects, dynamically and transparently, without affecting other objects.

### Key Concepts

- **Interface-based**: All decorators implement a common interface (e.g., `Logger`).
- Each decorator **wraps another object** that implements the same interface.
- Allows **stacking decorators** to create chains of behavior.

### Use Case from Lecture: Logging

The system logs messages to multiple destinations:

- File
- Database
- Email

#### Logger.java:

```java
public interface Logger {
    void log(String message);
}
```

#### LogToFile.java, LogToDataBase.java, LogToMail.java:

Each implements `Logger`, wraps a `Logger` instance, and delegates logging.

#### Chaining Decorators:

```java
Logger logger = new LogToMail(
                     new LogToFile(
                         new LogToDataBase(null)));
logger.log("abc");
```

#### Output:

```
log to database
logging to file
send email
```

This layered approach allows us to combine behaviors flexibly at runtime.

#### SendLog.java:

```java
public void logIt(Logger logger, String message) {
    logger.log(message);
}
```

- Demonstrates how the decorator chain is used to log a message to multiple systems.
- Unlike subclassing, which adds behavior at compile time, the decorator adds behavior **at runtime**.

### Practical Benefits

- Promotes **composition over inheritance**.
- New functionality can be introduced without altering existing code.
- Avoids a combinatorial explosion of subclasses.

---

## Summary of Design Patterns Covered

| Pattern   | Purpose & Use Case                                                                         |
| --------- | ------------------------------------------------------------------------------------------ |
| Strategy  | Encapsulates interchangeable algorithms (e.g., payment methods)                            |
| Observer  | Notifies subscribers about changes (e.g., UI updating on data changes)                     |
| Factory   | Centralizes object creation logic based on input or config                                 |
| Builder   | Step-by-step object creation with internal validation                                      |
| Singleton | Ensures one instance only; used for config, cache, shared resources                        |
| Decorator | Wraps objects to extend behavior dynamically (e.g., multi-level logging)                   |
| State     | Models context-specific behavior that changes over time (e.g., UI modes, character states) |

---

## Instructor Notes and Course Context

- Upcoming sessions will explain **project requirements** and assign final design pattern presentations.
- Students will need to select a design pattern and build a mini-project around it.
- Presentations will be conducted over Zoom for scheduling flexibility.
- Individual work is recommended to avoid coordination problems common in group projects.

---

## Final Takeaway

Understanding these patterns is crucial not only for writing clean, maintainable code, but also for interviewing, system design, and collaborative software development.

These examples, particularly when coupled with UML diagrams, offer a clear roadmap for applying object-oriented principles effectively.
