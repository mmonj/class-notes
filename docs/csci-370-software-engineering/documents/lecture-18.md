# CSCI 370 Lec 18: Use Case, Sequence, and State Diagrams in UML

<small>Thursday, April 24</small>

---

## Use Case Diagrams: Modeling System Interactions

Use case diagrams provide a high-level overview of a system's functional requirements and how different users (actors) interact with the system.

### Core Elements

1. **Actors**: Stick figures outside the system box representing users or external systems.
2. **System Boundary**: A large rectangle labeled with the system name (e.g., "Online Shopping System").
3. **Use Cases**: Ovals inside the system boundary that represent activities or services the system offers.
4. **Relationships**:

   - **Association**: A solid line from an actor to a use case indicating interaction.
   - **<<include>>**: Indicates that one use case includes behavior from another.
   - **<<extend>>** (not shown here): Represents optional or conditional behavior.

### Example Breakdown

In the diagram titled _Online Shopping System_:

- **Actors** include: Customer, Authentication, Identity Provider, Credit Payment Service, and PayPal.
- **Use Cases** include:

  - Log In
  - View Items
  - Make Purchase
  - Complete Checkout

- The customer interacts with all use cases, while external services (e.g., PayPal) connect only to specific processes such as checkout.

\[Insert image: insert\_\_use_case_diagram\_\_here]

---

## Context Diagrams: System Ecosystem Overview

A context diagram offers a simplified, high-level view of the system and its interactions with external entities.

### Characteristics:

- The system is represented as a red circle or box in the center.
- All external actors or systems are positioned around it.
- Arrows indicate the flow of data or interaction.

This diagram is useful for visualizing what systems or users communicate with your application, without going into implementation details.

---

## Activity Diagrams with Swimlanes

Activity diagrams visualize workflows within a system, often structured using _swimlanes_ to denote different roles or components.

### Swimlane Explanation:

- Each lane corresponds to a different participant (e.g., Staffing Dept, HR Dept, General Manager).
- Activities are placed in lanes based on who performs them.
- **Diamonds** represent decision points.
- **Bars** (forks/joins):

  - Horizontal bars with multiple arrows splitting = parallel execution.
  - Multiple incoming arrows joined into one = wait for all tasks to complete before proceeding.

\[Insert image: insert\_\_activity_diagram_with_swimlanes\_\_here]

---

## Sequence Diagrams: Timeline of Interactions

Sequence diagrams illustrate how objects interact over time.

### Key Concepts:

- **Actors** and **Objects** are placed horizontally.
- **Lifelines** (dotted vertical lines) track each participant's timeline.
- **Activation Bars** (solid rectangles) show when an object is active.
- **Messages**:

  - Solid arrow: method call or action
  - Dotted arrow: return or response

- Read from top to bottom to follow the sequence of events.

### Example:

- User requests money via ATM
- ATM sends request to bank
- Bank checks balance and replies
- ATM displays result to user

Sequence diagrams are ideal for modeling real-time system behavior.

---

## State Diagrams: Tracking Object State Transitions

State diagrams model the lifecycle of a single object as it transitions between various states.

### Components:

- **States**: Represented as labeled rounded rectangles.
- **Transitions**: Arrows showing how and why the system changes from one state to another.
- **Initial state**: Shown with a filled black circle.
- **Final state**: Shown with a bullseye target symbol.

### Example:

For a car engine and transmission system:

- Engine: States include _Off_ and _On_
- Transmission: States include _Park_, _Drive_, _Reverse_, etc.
- Valid transitions depend on the engine being on.

This diagram helps reason about allowable and disallowed system conditions and transitions.

---

## Summary of Diagram Types:

| Diagram Type | Purpose                                  | Notable Features                     |
| ------------ | ---------------------------------------- | ------------------------------------ |
| Use Case     | Shows user interaction with system       | Actors, use cases, <<include>> links |
| Context      | High-level external system relationships | System as a circle; external actors  |
| Activity     | Workflow and task order                  | Swimlanes, decisions, forks/joins    |
| Sequence     | Time-ordered object interactions         | Lifelines, activation, messages      |
| State        | Object state transitions                 | Initial/final states, transitions    |

Each diagram plays a distinct role in software modeling, helping developers and stakeholders visualize and analyze different system aspects.
