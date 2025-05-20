# CSCI 370 - Lec 4: Optimization and Design Patterns in Software Engineering

---

## Topics Covered

- Optimization Algorithms (Christofides' Algorithm & TSP)
- AI in Drug Discovery and Development
- Strategy Pattern (Design Pattern)
- Observer Pattern (Design Pattern)

---

## Traveling Salesman Problem (TSP) & Christofides' Algorithm

### The Problem

- The Traveling Salesman Problem (TSP) asks: What is the shortest route to visit a set of cities and return to the starting point?
- It is NP-hard; the number of possible routes grows factorially (e.g., 10 cities = ~3.6 million routes).

### Real-World Relevance

- Logistics (e.g., UPS delivery optimization)
- Fiber optic cable layout
- Genome sequencing

### Christofides' Algorithm Overview

Christofides' algorithm offers an approximate solution with a guaranteed upper bound of 1.5 times the optimal route length.

#### Steps:

1. **Minimum Spanning Tree (MST):**

   - Connect all nodes (cities) without creating loops.
   - Use shortest possible total edge weight.

2. **Find Odd-Degree Vertices:**

   - Identify vertices in the MST with an odd number of connections.

3. **Minimum Weight Perfect Matching:**

   - Pair all odd-degree vertices with minimum-weight connections.

4. **Combine to Form Eulerian Circuit:**

   - Result is a multigraph with all even-degree vertices, allowing an Eulerian circuit (visits every edge once).

5. **Convert to Hamiltonian Circuit:**
   - Remove repeated cities to obtain a path visiting each city exactly once.

#### Benefits:

- Near-optimal solution
- Efficient compared to brute-force

#### Example Use Case:

> A delivery company must visit 15 addresses. Christofides' algorithm reduces route length, saving fuel and time.

---

## AI in Drug Discovery & Healthcare

### AI Applications in Healthcare

- Speeds up drug development
- Improves hospital efficiency
- Enables personalized treatment based on patient data

### Machine Learning in COVID-19 Detection

- **Radiomics + Deep Learning:**
  - Extract features from X-rays/CT scans to classify pneumonia
- **CAD Systems:**
  - Aid radiologists by highlighting affected areas
- **Explainability Tools (e.g., SHAP):**
  - Help understand AI decisions

### Model Performance

- Example model (Random Forest) achieved ~82% accuracy for detecting COVID-19 from imaging data

### AI in Vaccine Development

- Predicts protein structures
- Accelerates analysis of vaccine candidates (e.g., Pfizer during COVID)
- Enables scaling up of vaccine production

### Limitations

- AI models require large, high-quality datasets
- Poor data = inaccurate predictions

### Future Outlook

- Projects like Oracle's "Stargate" invest in predictive healthcare using AI (e.g., early cancer detection)

---

## Strategy Pattern (Design Pattern)

### Problem with Inheritance:

- Inheritance makes code tightly coupled.
- Adding new behaviors requires modifying many classes.

### Strategy Pattern Solution:

> Encapsulate interchangeable behaviors and pass them to objects.

#### Structure:

- **Context:** Class using a behavior (e.g., `Duck`)
- **Strategy Interface:** Common interface for all behaviors (e.g., `FlyBehavior`)
- **Concrete Strategies:** Implement different behaviors (e.g., `FlyHigh`, `NoFly`)

#### Benefits:

- Favor **composition over inheritance**
- Avoid code duplication
- Open for extension, closed for modification (OCP)
- Add new behaviors without changing existing code

#### Real-World Analogy:

- Payment system: define `Payment` interface and implement strategies like `Cash`, `CreditCard`, `PayPal`, etc.

---

## Observer Pattern (Design Pattern)

### Use Case:

> Notifying interested parties (observers) when an object (subject) changes.

### Example:

- **Subject:** Stock Market
- **Observers:** Wall Street, SEC
- Observers want to be notified when a stock is bought or sold.

### Initial Problem:

- Code modification was needed every time a new observer was added.

### Observer Pattern Structure:

- **Subject Interface:** Manages observers (add/remove/notify)
- **Observer Interface:** Contains `notify()` method
- **Concrete Observers:** Implement specific behavior on notification

### Benefits:

- Decouples subject from observers
- Open for extension, closed for modification
- Easily add/remove observers without touching core logic

### Real-World Example:

- GUI Button in C#: adding/removing click event listeners behaves like the observer pattern

---

## Key Software Engineering Principle:

### Open-Closed Principle (OCP)

> Software entities should be open for extension but closed for modification.

- Add functionality via new code
- Avoid changing existing, working code
- Helps prevent bugs and ensures stability

---

## Summary

Lecture 5 focused on optimization and design patterns that emphasize clean, maintainable code. Christofides' algorithm provides a real-world solution to TSP, while Strategy and Observer patterns illustrate how to write flexible, reusable object-oriented code. These patterns support the Open-Closed Principle, ensuring scalable and bug-resistant systems.
