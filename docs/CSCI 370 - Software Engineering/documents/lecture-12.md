# CSCI 370 Lecture 12 Review Sheet: Design Principles, Software Process Models, and the Singleton & Factory Patterns

---

## ✅ Key Topics Covered

- Functional vs. Non-Functional Requirements
- Software Process Models (Agile, Waterfall, Incremental)
- Design Principles (Composition over Inheritance, Open/Closed Principle)
- Design Patterns Overview (Singleton, Factory, Strategy, Observer)
- UML Relationships (Inheritance, Composition, Association)
- Software Maintainability & Reusability
- Singleton & Factory Pattern Java Implementations
- Design Pattern Benefits and Interview Tips

---

## 🔍 Functional vs. Non-Functional Requirements

**Functional Requirements** describe what the system should do, i.e., the features and functionalities requested by the user or client.

**Non-Functional Requirements** describe how the system performs a function, covering broader system attributes like performance, usability, reliability, etc. They often span multiple functional requirements.

> Example: A system must process user logins (functional) and must do so within 2 seconds (non-functional).

---

## 🌩️ Cloud Software Benefits

- No need for internal maintenance
- Scalability and flexibility
- Accessible from anywhere
- Automatic updates

Correct answer to the multiple-choice example: **All of the above**

---

## 🧠 Design Principles

### Composition Over Inheritance

- **Composition**: Using object references to other classes to build functionality. Preferred in many cases because it avoids the tight coupling of inheritance.
- **Inheritance**: "Is-a" relationship, tightly couples subclasses with their superclasses. Can lead to fragile systems.

> Example: A `MedicalRecord` class contains a `Database` object => Composition ("has-a")

### Open/Closed Principle

- Software entities (classes, modules, functions, etc.) should be **open for extension** but **closed for modification**.
- Supported by patterns like Strategy, Observer, and State.

---

## 🧪 Incremental Development and Agile Models

**Incremental** development includes:

- Agile, Scrum, Extreme Programming (XP)
- Encourages continuous integration and frequent feedback
- Customer involvement is essential

Models **not** using incremental development:

- **Waterfall** – a linear, phased approach used when changes are costly or infeasible.

---

## ✈️ When to Use the Waterfall Model

Used when changes are expensive or difficult after development begins. Examples:

- Medical software (regulated by FDA)
- Airplane systems (regulated by FAA)

Reasons:

- Requires certification
- Changes trigger extensive revalidation

Not suitable for:

- Games
- E-commerce platforms

---

## 🧬 UML and Object-Oriented Relationships

### Types of Relationships:

- **Inheritance**: A class "is a" type of another class (denoted by a solid line with a triangle arrowhead)
- **Composition**: A class "has a" reference to another class; ownership implies lifecycle control
- **Association**: General binary relationship; can be one-way or bidirectional

Examples:

- `MedicalRecord` **composes** `Database` => "has-a"
- `Database` is public => **no encapsulation**, therefore **not protected**

---

## ⚙️ Singleton Pattern (Java Implementation)

### Problem Being Solved

- Global variables are dangerous because they can be modified from anywhere, making the logic of the program hard to follow and debug.
- Example: A variable like `id` being set to `-100` arbitrarily in some part of the code.

### Solution: Singleton Pattern

- **Encapsulation**: Make the global variable private.
- **Access Control**: Provide a public getter method (`getId()`) that returns the value without allowing direct modification.

### Purpose

- Restricts instantiation of a class to a single object.
- Controls access to a shared resource (e.g., ID generator, database connection).
- Protects global variables from unauthorized modification.

### Two Forms of Singleton

#### 1. **Eager Initialization**

```java
private static NextId instance = new NextId();
```

- Instance is created at load time.
- Suitable when the instance is always needed and simple to construct.

#### 2. **Lazy Initialization**

```java
private static DatabaseConnection connection = null;

public static DatabaseConnection getConnection() {
    if (connection == null) {
        connection = new DatabaseConnection();
    }
    return connection;
}
```

- Created only on first use.
- More flexible but requires attention to thread-safety.

### Common Issue: Thread Safety

- Multiple threads may call the getter simultaneously and create multiple instances.
- Fix: Use `synchronized` methods or other concurrency techniques.

---

## 🏭 Factory Pattern (Java Implementation)

### Purpose

- Encapsulates object creation based on logic (e.g., age, type).
- Provides a single access point for instantiation.
- Promotes code reuse and consistency.

### Benefits

- Hides object creation logic.
- Reduces dependency on concrete classes.
- Easier to manage and update creation logic in one place.

### Example from Class

```java
public Bicycle getNewBicycle(int age) {
    if(age < 6)
        return new KidsTriCycle();
    if(age < 19)
        return new TenSpeedBicycle();
    return new MotorCycle();
}
```

### Java Usage

```java
Bicycle bicycle = new BicycleFactory().getNewBicycle(6);
bicycle.ride();
```

- Factory prevents misuse of `new` operator.
- Ensures correct object type is instantiated depending on criteria.

---

## 👁️ Observer Pattern

### Purpose

- Implements a publish-subscribe model: one subject notifies multiple observers.
- Observers implement a shared interface (e.g., `notify()`).

### Benefit

- Loose coupling between subject and observers.
- Flexible and modular; easy to add/remove observers.

### Example

```java
interface Observer {
    void notify();
}
```

- `StockMarket` notifies `WallStreet` and `SEC` which both implement `Observer`.

---

## 🧩 Strategy Pattern

### Purpose

- Replaces inheritance with composition to inject behavior at runtime.

### Principle

- Favor **composition over inheritance**.
- Supports Open/Closed Principle: open for extension, closed for modification.

### Example

```java
Duck d = new Duck(new RealFly(), new LoudQuack());
```

- `RealFly` and `LoudQuack` implement `FlyBehavior` and `QuackBehavior`
- Can swap strategies without changing Duck class

---

## 🧭 Software Project Lifecycle Phases (Correct Order)

1. Feasibility Study – Can it be built within budget/tech constraints?
2. Requirements – Define what the system should do
3. Design – Architecting system components
4. Development – Actual coding
5. Testing – Verify correctness and reliability
6. (Optional) Deployment, Maintenance

---

## 🔁 Reusability and Maintainability

- **Reusability**: Design components/modules that can be reused across projects
- **Maintainability**: Especially important in high employee turnover environments
  - Ensures knowledge isn’t lost
  - Simplifies onboarding

---

## 👨‍💻 Software Engineering Essentials

- You **don’t need a degree** to be a software engineer
- A software project involves more than code:
  - People
  - Hardware
  - Budget
  - Legal/regulatory constraints

---

## 📋 Summary of Design Patterns Covered

| Pattern   | Purpose                                           | Benefit                                         |
| --------- | ------------------------------------------------- | ----------------------------------------------- |
| Singleton | One instance only; global control                 | Prevents uncontrolled access to shared resource |
| Factory   | Encapsulate object creation                       | Easy, centralized, controlled instantiation     |
| Observer  | Notify multiple dependent objects on state change | Loose coupling, unified notification interface  |
| Strategy  | Behavior injection using composition              | Flexible, avoids inheritance problems           |

---

## 💬 Interview Tips

- **Singleton**: Be ready to discuss thread-safety and when to use lazy vs. eager loading.
- **Factory**: Emphasize how it helps encapsulate and control object creation.
- **Observer**: Focus on decoupling and flexibility.
- **Strategy**: Highlight extensibility and code maintainability through composition.

---

## 🔚 Summary

This lecture focused on core design principles and the practical implications of software development models. Key design patterns like Singleton, Factory, Observer, and Strategy help implement robust, modular, and maintainable systems. Singleton prevents issues with shared state, Factory simplifies object creation, Observer supports publish-subscribe architecture, and Strategy encourages behavior flexibility. Understanding when and how to apply these patterns is essential for real-world software engineering.
