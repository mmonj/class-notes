# CSCI 370 – Midterm Review Sheet

<small>March 20 Lecture</small>

## Lecture Focus: Design Patterns - Factory and Singleton

---

### 1. **Factory Design Pattern**

**Definition**: The Factory Pattern is a _creational_ design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created. In simpler terms, it lets you delegate the instantiation logic to a separate component (the factory).

#### **Problem It Solves**:

- Prevents unrestricted object creation by clients.
- Ensures objects are created in a controlled manner.
- Promotes loose coupling by eliminating the need for code to instantiate specific subclasses directly.

#### **Example from Lecture**:

- We define an interface `Bicycle` with a method `ride()`.
- Several classes implement this interface:
  - `Tricycle` (for kids)
  - `TenSpeedBicycle` (for teens)
  - `Motorcycle` (for adults)

Initially, the user can instantiate any of these classes freely, which leads to potential misuse.

```java
Bicycle b = new Tricycle(); // Anyone can do this
```

#### **Refactor Using Factory**:

- Create a `BicycleFactory` class with a method like `getNewBicycle(int age)`:

```java
public class BicycleFactory {
    public static Bicycle getNewBicycle(int age) {
        if (age < 6) return new Tricycle();
        else if (age < 19) return new TenSpeedBicycle();
        else return new Motorcycle();
    }
}
```

- Hide the constructors of the bike classes by making them `private` or package-private and moving them inside the factory.

#### **Benefit**:

- Now, clients cannot instantiate bikes directly.
- Object creation logic is centralized and protected.
- Enforces business rules at object creation time (e.g. assigning a type of bike based on age).

---

### 2. **Singleton Design Pattern**

**Definition**: The Singleton Pattern ensures that a class has only one instance and provides a global point of access to it.

#### **Why Not Use Regular Globals?**

- Global variables can be changed from anywhere, leading to hard-to-track bugs.
- They break encapsulation and make code less modular and harder to test.

#### **Illustration from Lecture**:

- Imagine we want to assign unique IDs to invoices.
- Using a global `id` counter works, but it's unsafe because any class can change the value.

```java
public class Invoice {
    public int id;
}

Invoice i1 = new Invoice();
i1.id = 3;
Invoice i2 = new Invoice();
System.out.println(i2.id); // prints 0 (not what we want)
```

#### **Better Approach**:

- Use a static field to store the global ID counter.
- Example:

```java
public class Invoice {
    public static int globalId = 0;
    public int id;

    public Invoice() {
        id = ++globalId;
    }
}
```

Now, each new invoice automatically gets a new, incremented ID.

#### **Problem with Static Global**:

- Still accessible and modifiable from anywhere.
- Anyone can reset `globalId` to 0 or a negative value.

#### **Singleton as a Solution**:

- Encapsulate the ID logic inside a singleton class so that it can't be tampered with.
- Only one instance can manage ID generation.

#### **Preview of Singleton Implementation (to be completed in next lecture)**:

```java
public class IdGenerator {
    private static IdGenerator instance;
    private int currentId = 0;

    private IdGenerator() {} // private constructor

    public static IdGenerator getInstance() {
        if (instance == null) {
            instance = new IdGenerator();
        }
        return instance;
    }

    public int getNextId() {
        return ++currentId;
    }
}
```

- Prevents misuse by making the constructor private.
- Enforces a single instance using a static method.

#### **Summary**:

- Factory pattern is used to **control and centralize object creation**.
- Singleton pattern is used to **control access to a shared resource**, such as a global ID counter.

---

### Best Practices from Lecture:

- Avoid using global variables directly.
- Use Factory pattern to encapsulate object creation logic.
- Use Singleton pattern to manage shared state safely.
- Make constructors private or protected when control is needed over instance creation.

---

### Next Lecture Preview:

- Completing the implementation of the Singleton pattern.
- Finalizing the solution to global state issues.
- Midterm review coming soon.

---

### Instructor's Anecdotes:

- Real-world example: Company database objects controlled via a factory.
- Mentioned previous developer who overused globals — caused maintainability issues.

> "If you ever see globals, run away!"

---
