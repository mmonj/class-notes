# CSCI 370 - Lecture 13: Object-Oriented Design Patterns: Singleton, Factory, Observer, Strategy

<small>March 25 (first 15 minutes of class)</small>

## Singleton Pattern

### Problem Being Solved

- Global variables are dangerous because they can be modified from anywhere, making the logic of the program hard to follow and debug.
- Example issue: A variable like `id` being set to `-100` arbitrarily in some part of the code.

### Solution: Singleton Pattern

- **Encapsulation**: Make the global variable private.
- **Access Control**: Provide a public getter method (`getId()`) that returns the value without allowing direct modification.

### Purpose

- Restricts instantiation of a class to a single object.
- Controls access to a shared resource (e.g., ID generator, database connection).
- Protects global variables from unauthorized modification.

### Two Forms of Singleton

#### 1. **Eager Initialization**

- Instance is created at **load time**.

```java
private static NextId instance = new NextId();
```

- Good when you always need the instance and it doesn't require parameters.

#### 2. **Lazy Initialization**

- Instance is created **on first use**.

```java
private static DatabaseConnection connection = null;

public static DatabaseConnection getConnection() {
    if (connection == null) {
        connection = new DatabaseConnection();
    }
    return connection;
}
```

- Useful when object creation depends on runtime information.

#### Common Issue: Not Thread Safe

- Multiple threads may call `getConnection()` simultaneously and both create a new object.
- Fix: Use synchronization or other thread-safety mechanisms.

---

## Factory Pattern

### Purpose

- **Encapsulates object creation** based on some logic (e.g., user age).
- Prevents outside code from directly instantiating certain classes.
- Provides a single access point for creating related objects.

### Example Use Case

```java
public Bicycle getBicycle(int age) {
    if (age < 10) return new KidsBike();
    else return new MountainBike();
}
```

- Makes it easier for developers (especially new ones) to use the correct class.
- Ensures consistency and maintainability.

### Key Benefits

- Hides object creation logic.
- Reduces dependency on concrete classes.
- Easier to manage and change creation logic in one place.

---

## Observer Pattern

### Purpose

- **Implements a publish-subscribe model**: multiple observers watch a single subject.
- All observers implement a common interface (e.g., `notify()` method).

### Benefit

- One subject can notify all registered observers of changes.
- Observers are loosely coupled; they can be of different types but are treated the same if they implement the observer interface.

### Example

- `StockMarket` notifies `WallStreet` and `SEC` objects, both of which implement the `Observer` interface.

```java
interface Observer {
    void notify();
}
```

---

## Strategy Pattern

### Purpose

- Replaces inheritance with **composition** for behavior reuse.
- Promotes **code flexibility** by injecting behavior rather than inheriting it.

### Design Principle

- **Favor composition over inheritance**.
- Inheritance leads to fragile base class problems:
  - Modifying the parent class can unintentionally break child classes.
- Composition allows passing only the required behavior.

### Example: Duck Simulation

```java
Duck d = new Duck(new RealFly(), new LoudQuack());
```

- `RealFly` and `LoudQuack` are strategy classes implementing `FlyBehavior` and `QuackBehavior` interfaces.
- Different behaviors can be swapped easily.

### Open/Closed Principle

- **Open for extension**, **closed for modification**.
- Add new behaviors (e.g., `SilentQuack`) without modifying existing code.
- Reduces risk of introducing bugs in stable code.

---

## Summary of Design Patterns Covered

| Pattern   | Purpose                                           | Benefit                                         |
| --------- | ------------------------------------------------- | ----------------------------------------------- |
| Singleton | One instance only; global control                 | Prevents uncontrolled access to shared resource |
| Factory   | Encapsulate object creation                       | Easy, centralized, controlled instantiation     |
| Observer  | Notify multiple dependent objects on state change | Loose coupling, unified notification interface  |
| Strategy  | Behavior injection using composition              | Flexible, avoids inheritance problems           |

---

## Interview Tips

- Singleton issues: Understand thread-safety.
- Factory: Explain control of object creation.
- Observer: Focus on decoupling and interfaces.
- Strategy: Emphasize open/closed principle and composition.

---

## Instructor Notes

- Avoid global variables.
- Avoid inheritance where possible.
- Reuse via composition is safer and more flexible.
- Real-world example: Different database APIs at work benefit from factory and strategy patterns.
