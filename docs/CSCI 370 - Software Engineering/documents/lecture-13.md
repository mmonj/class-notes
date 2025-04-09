# CSCI 370 - Lecture 13: Decorator Pattern, Builder Pattern

<small>Tuesday, April 1</small>

---

## Overview

Lecture 13 covered two major software design patterns: the **Decorator Pattern** and the **Builder Pattern**. Both are important for organizing code in ways that promote flexibility, reusability, and clarity. This lecture focused heavily on practical examples and live coding to reinforce the core ideas.

---

## Decorator Pattern

### Core Idea

The **Decorator Pattern** allows behavior to be added to individual objects, dynamically, without affecting the behavior of other objects from the same class. It is used to wrap objects so that additional behaviors can be applied at runtime.

### Motivation Example: Logging

A logging system was used to demonstrate the decorator pattern. The logger could send logs to:

- A file
- A database
- An email

Rather than hardcoding combinations of these outputs, decorators allow us to chain these logging behaviors flexibly.

### Initial Naive Approach

A base interface `Logger` defines a method:

```java
void log(String message);
```

Concrete implementations include:

- `LogToFile implements Logger`
- `LogToDatabase implements Logger`
- `LogToMail implements Logger`

Each class logs in its respective way. A `SendLog` class might call all three manually:

```java
new LogToFile().log(msg);
new LogToDatabase().log(msg);
new LogToMail().log(msg);
```

### Problems with This Approach

- Not scalable: Needs hardcoded combinations.
- Repetitive: Each new log path requires new logic.

### Decorator-Based Solution

Each `Logger` holds a reference to a "previous" logger and delegates the `log()` call down the chain:

```java
class LogToFile implements Logger {
    private Logger previousLogger;
    public LogToFile(Logger previous) {
        this.previousLogger = previous;
    }
    public void log(String message) {
        if (previousLogger != null) previousLogger.log(message);
        System.out.println("Logging to file: " + message);
    }
}
```

This pattern allows dynamic chaining:

```java
Logger logger = new LogToMail(new LogToFile(new LogToDatabase(null)));
logger.log("Some message");
```

### Key Benefits

- Extensible: Add/remove loggers without changing client code.
- Flexible: Easy to build logger chains.
- Clean: Avoids multiple `if` conditions or hardcoded sequences.

### Comparison with Coffee Example

The professor mentioned the classic "coffee and condiments" example (adding milk, sugar, caramel, etc.) but noted it's less intuitive than the logger example. Still, it's a textbook illustration of how decorators can represent layered functionality.

### Takeaway

> Decorator pattern enables treating a chain of components as a single unit while maintaining modular, pluggable behavior.

---

## Builder Pattern

### Core Idea

The **Builder Pattern** separates the construction of a complex object from its representation, allowing the same construction process to create different representations.

### Problems it Solves

1. **Invalid Object States**: When constructors allow empty or placeholder values, users may misuse them (e.g., pass null or dummy data just to compile).
2. **Unclear Parameters**: It’s not always obvious what each constructor parameter does, leading to confusion or misuse.

### Example: Person Class

A `Person` class might have fields:

- name
- age
- phone
- street
- category (e.g., a classification A-Z)

Traditional constructor:

```java
public Person(String name, int age, String phone, String street, String category)
```

Problems:

- Hard to tell which parameter does what
- Easy to mix up or pass junk values

### Builder-Based Solution

Use a builder class to explicitly construct a valid person:

```java
public class PersonBuilder {
    private Person person = new Person();

    public void setImportantInfo(String phone, String name) {
        person.phone = phone;
        person.name = name;
    }

    public void setOptionalInfo(int age, String street) {
        person.age = age;
        person.street = street;
    }

    public void setCategory(String category) {
        // explain what the category means
        person.category = category;
    }

    public void validate() {
        // Ensure mandatory fields are set, throw error if not
    }

    public Person build() {
        validate();
        return person;
    }
}
```

### Benefits

- Forces proper construction
- Improves readability and usage
- Separates object creation logic from actual object

### Summary of Differences

| Aspect      | Decorator Pattern        | Builder Pattern                     |
| ----------- | ------------------------ | ----------------------------------- |
| Purpose     | Add behavior dynamically | Create complex objects step-by-step |
| Flexibility | Runtime composition      | Compile-time validation             |
| Focus       | Behavior extension       | Object construction                 |

---

## Final Thoughts

- The **Decorator Pattern** is useful when you want to add functionality without modifying original classes.
- The **Builder Pattern** is key for constructing complex objects where constructors become unwieldy.
- Both patterns promote **cleaner**, **more modular**, and **more maintainable** code.

### Up Next

- Upcoming assignments will involve implementing and demonstrating use of design patterns in your projects.
- Next lecture will continue with more design patterns, possibly covering **State Pattern**.

---

**Reminder**: Always think about why a pattern is used, not just how to implement it. Understanding the motivation helps apply it in new contexts effectively.
