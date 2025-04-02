# CSCI 370 - Lecture 5 - Approaches to Software Development: Waterfall, Incremental, and Reuse Models

---

## **Overview**

This lecture explored three major approaches to software development:

1. **Waterfall Model**
2. **Incremental (Iterative) Model**
3. **Reuse (Integration and Configuration) Model**

It emphasized the evolution from traditional linear development to more adaptive, reusable methods, and discussed practical trade-offs of each.

---

## **1. Waterfall Model**

### **Definition**

A linear and sequential software development process. Each phase must be completed before the next begins.

### **Steps Involved**

1. Requirements gathering
2. System and software design
3. Implementation (coding)
4. Integration and testing
5. Deployment
6. Maintenance

### **Characteristics**

- Strict order; no going back to previous steps
- Similar to writing a user manual before writing a single line of code (e.g., IBM)
- Popular before 2000

### **Analogy**

Like writing an entire book plot before writing any pages (e.g., author Jeffrey Deaver spends 8 months planning).

### **Pros**

- Clear documentation and structured process
- Predictability for fixed-scope projects
- Easier to create contracts (everything is defined up front)
- Useful when changes are very expensive (e.g., buildings, medical software)

### **Cons**

- Inflexible to changes mid-process
- Poor at handling uncertain or changing requirements
- Scheduling inefficiencies: developers/testers often wait
- High failure rate due to misestimation (real-world example: project failed after 5 years)

---

## **2. Incremental Model**

### **Definition**

An iterative model that develops software in small, manageable chunks, revisiting earlier phases as needed.

### **Process**

Each increment involves:

1. Partial requirements gathering
2. Partial design
3. Partial implementation
4. Partial testing
5. Repeat until complete
6. Final delivery and maintenance

### **Characteristics**

- You plan, implement, and test smaller pieces over time
- Can release working versions early
- Uses real-time feedback for improvement

### **Analogy**

Writing a book one chapter at a time, refining earlier chapters as new ideas evolve.

### **Pros**

- Supports changing requirements
- Better scheduling; everyone stays busy
- Allows early feedback and deployment
- Better testing (repeated after each increment)
- Easier time estimation through real experience

### **Cons**

- May lose the big picture focus
- Code quality may degrade ("spaghetti code")
- Requires refactoring to keep code maintainable

### **Refactoring**

The process of rewriting code to improve clarity and structure without changing functionality. Essential to prevent software rot over multiple iterations.

---

## **3. Reuse Model (Integration and Configuration)**

### **Definition**

Build software systems by integrating existing components or systems rather than developing from scratch.

### **Process**

1. Determine requirements and feasibility
2. Discover existing software (e.g., libraries, APIs, commercial systems)
3. Integrate or configure it into your solution

### **Examples**

- Game engines (e.g., Unity, Unreal)
- Accounting software (e.g., QuickBooks)
- Vehicle platforms (e.g., Honda Prologue built by GM)

### **Pros**

- Fastest and cheapest method
- Uses tested and proven software
- Reduces development and maintenance costs

### **Cons**

- Less flexibility; you're limited by external software capabilities
- Risk if the provider discontinues support or goes out of business
- Licensing and legal restrictions may apply

### **Mitigation Strategies**

- Contracts for source code access if vendor shuts down
- Use of open-source software maintained by communities

---

## **V-Model (Validation and Verification)**

### **Definition**

An extension of the Waterfall Model that emphasizes corresponding testing for each development phase.

### **Structure**

Visualized as a "V":

- Left side: Development phases (Requirements → Design → Code)
- Right side: Testing phases (Test Plan → Integration Test → Unit Test)

### **Benefits**

- Encourages early development of tests
- Ensures testing is aligned with requirements
- Helps uncover issues early

---

## **Summary of Trade-Offs**

| Model       | Pros                                          | Cons                                               |
| ----------- | --------------------------------------------- | -------------------------------------------------- |
| Waterfall   | Structured, clear scope, good for fixed plans | Inflexible, bad with change, difficult to schedule |
| Incremental | Adaptive, better testing, early feedback      | Risk of messy code, may lose overall vision        |
| Reuse       | Fastest, cheapest, reliable components        | Limited customization, dependency risks            |

### **Best Practice**

- **Reuse** is usually the best starting point for most modern projects.
- Combine models if needed (e.g., reuse + incremental for custom components).

---

## **Real-World Notes**

- **Waterfall used in**: Regulated industries (e.g., medical, aerospace)
- **Incremental used in**: Most modern software teams (Agile, Scrum)
- **Reuse examples**: Buying software, using open-source libraries

---

## **Key Vocabulary**

- **Increment**: A small, manageable chunk of work
- **Refactoring**: Rewriting code to improve quality without changing functionality
- **Spaghetti Code**: Unstructured, messy code due to excessive changes
- **V-Model**: Waterfall model with testing matched to each development phase

---

## **Final Thoughts**

This lecture emphasized that while all development models have value, choosing the right one depends on the project's complexity, timeline, regulatory constraints, and budget. Modern development often blends reuse and incremental methods for the best balance of flexibility, speed, and reliability.
