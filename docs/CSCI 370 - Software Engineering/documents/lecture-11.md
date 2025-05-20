# CSCI 370 - Lecture 11: Software Requirements, Design Principles, Development Models, UML Diagrams, and Design Patterns

This lecture primarily focused on reviewing a midterm exam and elaborating on important concepts in software engineering. Below is a detailed breakdown of the key points discussed, with elaborations where necessary.

---

## 🔍 Functional vs. Non-Functional Requirements

- **Functional Requirements**: Specific behaviors or functions a system must perform, based on client requests (e.g., "The system shall allow users to log in").
- **Non-Functional Requirements**: Constraints or qualities the system must have, not tied to specific functions (e.g., performance, scalability, usability). Often span multiple features.

---

## ☁️ Benefits of Using Cloud Software

- No need for maintenance by the user
- Available anywhere with internet
- Scalable with demand
- Often cost-effective
- **Answer**: All of the above

---

## 🧱 Strategy Pattern

- Replaces **inheritance** with **composition**.
- Promotes flexible and interchangeable behavior by encapsulating algorithms.
- **Answer**: Composition

---

## 🧼 Code Quality - DRY Principle

- DRY: Don't Repeat Yourself
- Violating DRY leads to code duplication and harder maintenance.
- Identified example: Repeating the same logic in multiple places.

---

## 🧩 Relationships Between Classes

### Example: MedicalRecord and Database

- **Composition**: MedicalRecord _has a_ Database
- **Encapsulation**: Not achieved if Database is public
- **Dependency**: MedicalRecord is dependent on Database if it won't compile without it
- **Correct analysis**:
  - Composition: ✅
  - Encapsulation: ❌ (Database is public)
  - Dependency: ✅

---

## 🔁 Incremental Development

- Involves building software in small, manageable increments
- Examples: Agile, Scrum, Extreme Programming
- **Not Incremental**: Reuse model (or Waterfall in certain contexts)

---

## 📐 Design Principle - Open/Closed Principle

- **Open for extension, closed for modification**: You should be able to add new functionality without changing existing code.
- Used in several design patterns (e.g., Strategy, Observer)

---

## ⚠️ Software Engineering Challenges

- Managing complexity
- Meeting customer requirements
- Maintaining software
- Coping with change
- **Answer**: All of the above

---

## 🕵️ Observer Pattern

- Allows objects to be notified when another object's state changes
- Useful when adding new types (e.g., new banks in the example)
- Avoids hardcoded logic for each dependent object

---

## ☝️ Singleton Pattern

- Ensures a class has only one instance
- Provides a global access point
- Lazily initialized and thread-safe if done correctly
- **Answer**: All of the above

---

## 🔄 Incremental Development: True/False

- Customer involvement: ✅ True
- All requirements fixed before coding: ❌ False
- Easy to modify: ✅ True
- No need for refactoring: ❌ False
- Only unit testing: ❌ False (also includes integration/system testing)

---

## ⚙️ Missing Step in Process

- Steps: Specification, Development, **Testing**
- **Answer**: Testing

---

## 🚰 Waterfall Model Use Cases

- Used when changes are expensive or high risk
- Suitable for:
  - Medical software (FDA approval required)
  - Airplane software (FAA certification required)
  - Refrigerator software (deployed with hardware)
- Not suitable for: Game software (frequent updates, low risk)

---

## 📊 Process Order

1. Feasibility (Can we do it?)
2. Requirements
3. Design
4. Development
5. Testing
6. Deployment & Maintenance (follow afterward)

---

## 🔁 Reusable Software

- Any software type can be reused in other projects
- Encourages modular, component-based design

---

## 🖼 UML Diagrams

- **Triangle arrow (inheritance)**: One class is a subtype of another
- **Line (association)**: Indicates one class uses another

---

## 🧰 Best Design Practice

- Prefer **composition** over **inheritance**
- Avoid overly generic types (e.g., `Object`)
- Design for maintainability and scalability

---

## 🧑‍💼 Maintainability in High Turnover Environments

- Critical when team members frequently join/leave
- Knowledge about the codebase is easily lost
- Maintainable code is easier for new developers to understand

---

## 🎓 Degree Requirement

- No formal degree is required to become a software engineer
- Skill, experience, and projects often matter more than credentials

---

## 💼 Software Project Scope

- Includes:
  - Hardware considerations
  - Finances
  - Management
  - Scheduling
- Software projects are multifaceted

---

## 🔁 Process Not Required in Software Discovery

- **Reuse model** is optional
- Others (e.g., waterfall, agile, spiral) are standard models

---

## 🧪 Summary of Design Patterns Mentioned

- **Observer**: Dynamic dependencies
- **Singleton**: One instance only
- **Strategy**: Replace inheritance with composition
- **State**: Not yet covered in lecture

---

## ✅ Key Takeaways

- Understand difference between functional and non-functional requirements
- Know when to use Waterfall vs. Incremental
- Learn design principles: DRY, Open/Closed, Encapsulation, Composition over Inheritance
- Understand and recognize common design patterns
- Maintainability and team dynamics influence architectural decisions
- Be familiar with UML basics: association vs. inheritance
- Process steps and development models guide lifecycle planning

---
