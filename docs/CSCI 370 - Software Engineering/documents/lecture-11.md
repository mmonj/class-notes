# CSCI 370 - Lecture 11 - Agile Practices, Testing Strategies, and Software Development Principles

### **Agile Development Principles and Practices**

#### **Collective Code Ownership**

- **Definition**: No single developer "owns" a section of the code; everyone on the team is responsible for all parts of the codebase.
- **Benefits**:
  - Encourages collaboration and knowledge sharing.
  - Prevents bottlenecks and reliance on specific developers.
  - Reduces "code silos" where only certain people understand certain sections.

#### **Code Silos**

- **Definition**: Code that only specific people understand or can modify.
- **Problem**: Creates a barrier to collaboration and increases risk.
- **Solution**: Promote collective ownership to eliminate silos.

---

### **DevOps and Pipelines**

#### **DevOps**

- **Definition**: A combination of Development and Operations, focusing on automating and integrating the process of software development and deployment.
- **Purpose**: Ensures rapid, consistent, and reliable deployment of code changes.

#### **Pipeline**

- **Definition**: An automated workflow where code changes are automatically built, tested, and deployed.
- **Key Components**:
  - **Code Compilation**
  - **Unit Testing**
  - **Deployment to test environments**
  - **Schema updates** (database)
  - **Automated testing suites**

#### **Benefits**:

- Reduces manual intervention.
- Promotes continuous integration and delivery (CI/CD).
- Enables faster feedback cycles.

---

### **Testing in Software Development**

#### **Unit Testing**

- **Definition**: Tests written by developers to test individual components or functions.
- **Goal**: Ensure each part of the codebase behaves correctly in isolation.
- **When**: Written before (preferably) or during development.

#### **Automated Testing**

- **Definition**: Tests that are automatically run by software tools without manual intervention.
- **Examples**:
  - Load testing with tools that simulate many users.
  - Functional testing using AI tools to explore edge cases.
- **Benefits**:
  - Reduces time spent on repetitive manual testing.
  - Ensures consistent behavior across builds.

#### **Test-Driven Development (TDD)**

- **Definition**: Practice where tests are written _before_ writing the actual code.
- **Purpose**:
  - Forces developers to clarify the behavior of the code.
  - Helps uncover edge cases early.
  - Increases test coverage naturally.

#### **Regression Testing**

- **Definition**: Tests that ensure previously fixed bugs do not reappear.
- **Triggered by**: Changes or new features being added.

#### **Smoke Testing**

- **Definition**: Basic test to check if the software starts and runs correctly.
- **Analogy**: Like turning on a device to see if it powers on ("where there's smoke, there's fire").

---

### **Code Quality and Maintenance**

#### **Refactoring**

- **Definition**: Rewriting existing code to improve its structure without changing its behavior.
- **Analogy**: Like cleaning and organizing a messy room without adding new furniture.
- **Benefits**:
  - Improves readability and maintainability.
  - Reduces complexity (avoids "spaghetti code").

#### **Simplicity in Code**

- **Principle**: Keep methods short, ideally fewer than 60 lines (preferably 5 or fewer).
- **Reason**: Simpler code is easier to test, understand, and modify.

#### **Avoid Premature Coding**

- **Guideline**: Do not write code for features that are not currently required.
- **Rationale**: Avoids wasted effort and unnecessary complexity.

---

### **Agile Methodology Terms**

#### **Sprint**

- **Definition**: A time-boxed iteration, typically 2-4 weeks, during which a product increment is developed.

#### **Scrum**

- **Definition**: A framework for Agile project management involving daily stand-up meetings, sprint planning, reviews, and retrospectives.

#### **Scrum Master**

- **Role**: Facilitator for the Scrum team, ensuring adherence to Agile practices.

#### **Velocity**

- **Definition**: The amount of work a team can complete during a sprint.

#### **Product Owner**

- **Definition**: Represents the customer or stakeholders; manages the product backlog and prioritizes features.

#### **Product Backlog**

- **Definition**: An evolving list of work items and features for the product.

#### **Potentially Shippable Product Increment**

- **Definition**: At the end of each sprint, the team should have a version of the software that is complete and could be shipped.

---

### **User Stories**

#### **User Story Components**

1. **Who**: The user or role requesting the feature.
2. **What**: The specific feature or functionality.
3. **Why**: The reason or goal behind the request.
4. **Acceptance Criteria**: Conditions that must be met for the story to be considered complete.

#### **Purpose of Asking "Why"**

- Understand the underlying need.
- May lead to better or more efficient solutions.
- Avoid building unnecessary or redundant features.

---

### **Other Concepts**

#### **Pair Programming**

- **Definition**: Two developers work together at one workstation, one types while both discuss the code.
- **Benefit**: Reduces bugs and improves design through constant feedback.

#### **Sustainable Pace**

- **Definition**: Avoid developer burnout by keeping work hours reasonable and consistent.

---

Next class will cover:

- **Singleton Design Pattern**
- **Factory Design Pattern**

Midterm rescheduled for **March 27**. Sample midterm will be provided in the next lecture.

---
