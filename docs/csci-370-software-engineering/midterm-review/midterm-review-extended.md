# CSCI 370 – Midterm Extended Review Sheet

<small>March 25 Lecture</small>

## Chapter 1: Introduction to Software Engineering

### What is Software Engineering?

- A field concerned with the systematic design, development, and maintenance of software.
- Involves everything needed to deliver a software product, excluding hardware and financing.

### What is a Software Project?

- Everything related to delivering a software product is considered part of the software project.
- **Not included**: hardware and financing components.

---

## 📋 Software Development Lifecycle (SDLC)

### 1. Feasibility

- Can the project be done?
  - **Technical Feasibility**: Does the development team have the skills?
  - **Financial Feasibility**: Does the client have the budget?

### 2. Requirement Specification

- Define what the software should do before writing any code.
- Critical to avoid rework later.

### 3. Design / Architecture

- Plan how the software will be built (components, modules, classes, etc.).
- Often uses UML diagrams or architecture schematics.

### 4. Programming (aka Coding, Development, Implementation)

- Writing the actual software based on the design.
- Tip: On resumes, use varied terminology to describe this.

### 5. Testing (QA)

- Quality Assurance ensures the software works as intended.
- **Unit testing**: Performed by developers, focuses on small pieces of functionality.
- **QA testing**: Done by testers, simulates user behavior and interaction.

### 6. Release and Deployment

- Delivering the software to users.

### 7. Documentation

- Writing guides, manuals, or internal comments.
- **Downside**: Can become outdated if not updated with code changes.

### 8. Maintenance (Software Evolution)

- Ongoing improvements and bug fixes.
- Repeats the software lifecycle steps (like a loop).

---

## 📈 Changes in Software Engineering Over Time

### Technology's Impact

- **AI integration**: Used in tools, code generation, etc.
- **Cross-platform challenges**: Must run on iOS, Android, Windows, etc.
- **Web software**: Easier cross-platform deployment via the browser.
- **Security**: Bigger concern due to global accessibility.
- **Faster delivery**: Shorter time-to-market expectations.

---

## ✅ Software Quality Attributes (Buzzwords)

- **Performance**: Speed and responsiveness.
- **Usability**: How easy and intuitive the interface is (UI/UX).
- **Reliability**: Will it run without crashing?
- **Functionality**:
  - _Functional_: Specific features requested.
  - _Non-functional_: General qualities like performance, security, reliability.
- **Maintainability**: Ease of making changes (affected by code cleanliness).
- **Security vs. Safety**:
  - _Security_: Protection of data and systems.
  - _Safety_: Ensuring physical or real-world harm is prevented (e.g., in cars).

---

## 💻 Types of Software

### 1. Standalone

- No network connection; runs locally.

### 2. Transaction-Based

- Must maintain data integrity (all-or-nothing updates).

### 3. Web Software (Client-Server Architecture)

- Browser is the client; server hosts the logic/data.

### 4. Financial Software

- Must be accurate and often fast (e.g., trading systems).

---

## 🧱 Object-Oriented Programming (OOP)

### Object vs. Class

- **Class**: Template (e.g., `Car`).
- **Object**: Instance of a class (e.g., a specific car with VIN #).

### Four OOP Principles

1. **Inheritance** – Reuse code by having child classes inherit behavior from parent classes.
2. **Encapsulation** – Protect internal data using access control (e.g., private fields with getters/setters).
3. **Polymorphism** – One method name behaves differently depending on input types.
4. **Abstraction** – Hide complex logic behind simple interfaces/methods.

---

## 📆 Design Principles & Patterns

### Composition Over Inheritance

- Prefer using object composition to reuse behavior rather than extending classes.
- Avoids inheritance's drawbacks:
  - Single inheritance limitation in Java.
  - Fragile base class problem.

### Strategy Pattern

- A design pattern where behaviors are encapsulated as objects and can be swapped at runtime.
- Promotes **open/closed principle**.

### Observer Pattern

- Allows objects (observers) to subscribe to and receive updates from another object (subject).
- Used in event-driven systems.
- Also supports **open/closed principle**: you can add new observers without modifying the subject.

---

## 🧬 SOLID Principles

1. **S - Single Responsibility**:
   - A class should only have one reason to change.
2. **O - Open/Closed Principle**:
   - Classes should be open for extension, closed for modification.
3. **L - Liskov Substitution**:
   - Subclasses should behave like their parent classes when substituted.
4. **I - Interface Segregation**:
   - No client should be forced to depend on methods it doesn't use.
5. **D - Dependency Inversion**:
   - Depend on abstractions, not concrete implementations.

---

## 😄 Code Quality Principles

- **DRY (Don't Repeat Yourself)**: Reuse code logic to avoid redundancy.
- **YAGNI (You Aren't Gonna Need It)**: Don't implement functionality until needed.
- **Refactoring**: Restructuring existing code to improve readability/maintainability.
- **Delegation Principle**: Offload responsibility to composed/helper objects instead of cluttered logic (e.g., lots of `if` statements).

---

## 💡 Process Models

### 1. Waterfall

- Linear model with distinct, non-overlapping phases.
- **Pros**: Better for fixed-scope, expensive-to-change projects.
- **Cons**: Inflexible; prone to delayed delivery.

### 2. Incremental (Agile, Scrum, XP)

- Iterative development; working software delivered every cycle.
- **Scrum**:
  - _Roles_: Product Owner, Scrum Master, Dev Team.
  - _Artifacts_: Product Backlog, Sprint Backlog, Burndown Charts.
  - _Meetings_: Daily Stand-ups, Sprint Reviews.

### 3. Reuse-Oriented Development

- Emphasizes use of existing libraries, packages, or software.
- Saves time, cost, and reduces bugs.

---

## 🔧 Agile Practices

- **Test-First Development**: Write tests before implementation.
- **Smoke Testing**: Basic test to check if the app doesn't crash.
- **Regression Testing**: Ensure fixed bugs don't reappear.
- **Story Cards**: Represent individual features or requirements.
- **Pair Programming**: Two developers work together at one workstation.
- **Collective Ownership**: Everyone can modify any part of the codebase.
- **Sustainable Pace**: No developer burnout; maintain work-life balance.
- **Small Releases**: Deliver in small, frequent iterations.
- **Customer Involvement**: Regular feedback from real users.

---

## 📊 Estimation & Prioritization

- **Velocity Chart**: Measures how much work is completed in each sprint.
- **Burndown Chart**: Tracks remaining work over time.
- **Prioritization**:
  - High Value, Low Cost → Do first
  - High Value, High Cost
  - Low Value, Low Cost
  - Low Value, High Cost → Maybe never

---

## 📏 UML (Unified Modeling Language)

### Class Diagrams

- **Association**: Regular connection (plain line).
- **Aggregation**: Open diamond; "has-a" relationship (loosely bound).
- **Composition**: Filled diamond; strong ownership.
- **Generalization**: Triangle arrow; represents inheritance.
- **Multiplicity**: 1, 0..1, 0.._, 1.._

---
