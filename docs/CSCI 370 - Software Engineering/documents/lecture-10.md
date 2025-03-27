# CSCI 370 - Lecture 10 Review: Principles of DRY, YAGNI, Delegation, and Intro to Agile

---

## DRY Principle (Don't Repeat Yourself)

### Definition

The DRY principle emphasizes that **each piece of knowledge or logic should exist in only one place in a codebase**. Repeating logic across multiple places makes it harder to maintain and update code, as changes would need to be made in multiple locations.

### Example

```java
class AreaCalculator {
    public int area(int length, int width) {
        return length * width;
    }

    public int volume(int length, int width, int height) {
        int baseArea = area(length, width);
        return baseArea * height;
    }
}
```

Here, the `volume` method reuses the `area` method instead of duplicating the multiplication logic. This allows centralized control over how the area is calculated. If the calculation changes (e.g., for performance reasons), only the `area` method needs to be updated.

### Benefits

- **Maintainability**: Changes happen in one place.
- **Consistency**: Avoids logic drift.
- **Improved readability**.
- **Better debugging**: Easier to track logic.

### Real-World Analogy

A method calculating string length might work in English, but break in Unicode or other languages. Keeping a single method ensures language compatibility issues are only dealt with once.

---

## YAGNI (You Aren't Gonna Need It)

### Definition

YAGNI promotes writing **only the code you currently need**, not what you think you might need later. Avoid including features or methods that are not immediately required by the system.

### Key Idea

Unused code:

- Adds clutter to the codebase.
- Requires maintenance.
- Can confuse other developers.
- Leads to potential bugs or misinterpretation.

### Practical Application

- Delete unused or unnecessary code from your working environment.
- Use version control systems to retrieve old code if needed.
- Avoid the hoarder mentality (e.g., a person keeping newspapers "just in case").

### Analogy

Leaving old or unused code in your codebase is like hoarding—eventually it becomes a fire hazard (or in programming, a maintenance nightmare).

---

## Delegation Principle

### Definition

**Delegate behavior to the appropriate class**, especially in inheritance hierarchies. Avoid writing child-specific logic in a parent class.

### Bad Example (Anti-Pattern)

```java
class Window {
    String color;
    public void draw() {
        if (color.equals("red")) {
            drawRedWindow();
        } else if (color.equals("blue")) {
            drawBlueWindow();
        }
    }
}
```

### Good Example (Using Delegation)

```java
class Window {
    public void draw() {
        // to be overridden
    }
}

class RedWindow extends Window {
    public void draw() {
        drawRedWindow();
    }
}

class BlueWindow extends Window {
    public void draw() {
        drawBlueWindow();
    }
}
```

### Benefits

- Cleaner, more maintainable code.
- Each subclass handles its own logic.
- Avoids fragile base classes (where changes to the base class can break subclasses).

---

## Introduction to Agile Methodology

### What is Agile?

"Agile" refers to a set of software development methodologies based on **iterative development**, where requirements and solutions evolve through collaboration.

### Definition of Agile (Literal)

Agile means **flexible, quick to adapt**—being able to shift direction with minimal overhead.

### Agile Principles in Software Engineering

- Focus on **working software** over comprehensive documentation.
- **Individuals and interactions** over processes and tools.
- **Customer collaboration** over contract negotiation.
- **Responding to change** over following a rigid plan.

### Historical Context

- Emerged around the **year 2000**, in response to the rigidity of traditional methodologies.
- Coincided with the rise of the internet and software gold rush.
- Prompted by challenges like **Y2K**, which revealed the inflexibility and poor planning of older software systems.

### Agile vs. Waterfall

| Agile                  | Waterfall                    |
| ---------------------- | ---------------------------- |
| Iterative, incremental | Sequential, rigid            |
| Adaptable to change    | Difficult to adapt mid-cycle |
| Continuous delivery    | Single final delivery        |

### Real-World Insight

Due to intense demand for programmers during the early 2000s (e.g., Y2K fixes, internet boom), the industry needed faster, more adaptive development processes. Agile arose from this pressure.

---

## Summary

- **DRY**: Don't duplicate logic—centralize it for easier maintenance.
- **YAGNI**: Don’t write code you don’t immediately need.
- **Delegation Principle**: Delegate tasks to the appropriate subclasses—avoid if-statements in parent classes.
- **Agile**: A flexible, iterative approach to development emphasizing responsiveness to change and frequent delivery.

These principles together help create **cleaner, more maintainable, and efficient software systems**.
