# CSCI 370: Software Engineering - Final Review

## 1. Testing Types and Concepts

### Types of Testing

- **Regression Testing**: Ensures previously fixed issues do not reappear.
- **Red Light, Green Light, Refactor**: A development approach where tests fail initially, then pass after implementation.
- **Unit Testing**: Focuses on testing individual components or methods.
- **Component Testing**: Tests interactions between components.
- **System Testing**: Tests the entire system as a whole.
- **Release Testing**: Ensures the software meets customer requirements.

### Partition and Guideline-Based Testing

- **Partition Testing**: Tests edge cases (e.g., boundaries of input ranges).
- **Guideline-Based Testing**: Tests based on known problematic inputs (e.g., null values, extreme values).

### Unit Test Characteristics

- Must return a value for validation.
- Results should be predictable and repeatable (idempotent).
- Should not rely on complex environments.

### Example of Unit Testing in Java

```java
// Example of a simple unit test
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}

// Unit Test
import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculatorTest {
    @Test
    public void testAdd() {
        Calculator calc = new Calculator();
        assertEquals(5, calc.add(2, 3));
    }
}
```

---

## 2. Design Patterns

### Common Design Patterns

- **Strategy**: Encapsulates behavior that changes and passes it into objects.
- **Observer**: Specialized strategy pattern for notifying multiple observers.
- **Factory**: Controls object creation.
- **Builder**: Ensures objects are created with valid and sufficient data.
- **Singleton**: Restricts instantiation to one object and controls access.
- **Decorator**: Dynamically adds behavior to objects.
- **Memento**: Captures and restores an object's state.
  - Components: Originator, Memento, Caretaker.
- **Command**: Encapsulates user actions as objects for execution and undo.
- **Iterator**: Provides a way to access elements of a collection sequentially.

### Example of Singleton Pattern in Java

```java
// Singleton Pattern Example
public class Singleton {
    private static Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

---

## 3. Software Architecture

### Architectural Patterns

- **Layered Architecture**: Divides software into layers (e.g., presentation, application, database).
  - Dependency flows upward; lower layers cannot be broken by higher layers.
- **Client-Server**: A server provides services to multiple clients.
- **Pipe-Filter**: Processes data through a series of independent filters.
- **Model-View-Controller (MVC)**:
  - **Controller**: Handles user input.
  - **Model**: Manages data and business logic.
  - **View**: Formats and displays data.

### Non-Functional Requirements and Architecture

- **Performance**: Keep components on the same platform for speed.
- **Security**: Use an outer security layer to protect data.
- **Safety**: Group safety-critical operations together.
- **Maintainability**: Use small, fine-grained methods for easier updates.

---

## 4. Diagrams and Models

### Use Case Table

- **Actors**: Entities interacting with the system.
- **Goal**: Objective of the interaction.
- **Preconditions**: Requirements before interaction.
- **Basic Flow**: Normal sequence of events.
- **Alternate Flow**: Deviations from the normal flow.
- **Success**: Criteria for successful completion.

### Use Case Diagram

- **Components**: Actors, activities, system boundary, and relationships.
- **Purpose**: High-level view of user interactions with the system.

### Context Diagram

- **Purpose**: Shows the system and its interactions with external entities.

### Process/Activity Diagram

- **Purpose**: Represents the flow of activities in a system.
- **Symbols**:
  - **Circle**: Start or end.
  - **Arrow**: Transition.
  - **Diamond**: Decision point.
  - **Bars**: Fork (parallel) or join (synchronization).

### Sequence Diagram

- **Components**: Actors, objects, messages, and lifelines.
- **Purpose**: Shows real-time interactions between objects.

### State Diagram

- **Purpose**: Represents states of a single object and transitions between them.
- **Example**: Engine states (off, on) and transmission states (park, drive, reverse).

---

## 5. Principles and Best Practices

### SOLID Principles

- **S**: Single Responsibility Principle.
- **O**: Open-Closed Principle.
- **L**: Liskov Substitution Principle.
- **I**: Interface Segregation Principle.
- **D**: Dependency Inversion Principle.

### Other Best Practices

- **YAGNI**: "You Aren't Gonna Need It" - Avoid unnecessary code.
- **DRY**: "Don't Repeat Yourself" - Avoid code duplication.
- **Prefer Composition Over Inheritance**: Reduces tight coupling between classes.

---

## 6. Scrum and Agile Concepts

- **Product Backlog**: List of desired features.
- **Sprint Backlog**: Tasks for the current sprint.
- **Daily Stand-Up**: Short daily meeting to discuss progress.
- **Potential Release Candidate**: Working software after each sprint.
- **Testing in Scrum**: Continuous testing during development cycles.

---

## 7. Non-Functional Requirements

- **Speed**: Measured by response time or throughput.
- **Reliability**: Measured by mean time to failure.
- **Usability**: Measured by training time or user satisfaction.
- **Portability**: Measured by the number of supported platforms.

---

## 8. Testable Software

- Avoid logic in constructors.
- Use dependency injection for external dependencies.
- Separate side effects (e.g., file I/O) from core logic.
- Ensure tests are repeatable and independent.

---

## 9. Miscellaneous Topics

- **Ethnography**: Understanding the context and culture of software users.
- **Multiplicity**: Numeric relationships between objects in class diagrams.
- **Static vs. Global**: Static variables are tied to a class, while global variables are accessible everywhere.

---

## 10. Key Diagrams to Review

- **Class Diagram**: Shows relationships between classes.
- **Context Diagram**: High-level system interactions.
- **Use Case Diagram**: User interactions with the system.
- **Sequence Diagram**: Real-time object interactions.
- **State Diagram**: States and transitions of a single object.
- **Activity Diagram**: Workflow of activities.

---

## Final Notes

- Focus on post-midterm topics for the final exam.
- Review diagrams and design patterns thoroughly.
- Understand the principles of testable and maintainable software.
