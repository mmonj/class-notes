CS 370 Software Engineering Sample Final (Summer 2022)

There may be more than one answer to a question. Choose the best answer to each question. To get any credit for matching questions, all matches must be correct.

Note, if you wish, you can write an explanation next to your answer.

Q1) CD/CI (pipeline):

1. CD stands for Configuration Development
2. **Makes frequent deliveries of software**
3. CI stands for Configuration Integration
4. Is used together with the Waterfall process
5. Should occur once every month

Q1) \_\_\_\_\_\_\_\_\_\_\_\_\_

Q2) A Non-Functional Requirement

1. **Is usually implied from a Functional one.**
2. Is an unnecessary requirement.
3. Is a requirement that cannot be made to work.
4. Usually has a smaller scope than a functional one
5. Is not related to customer satisfaction.

Q2) \_\_\_\_\_\_\_\_\_\_\_\_\_

Q3) RE: the diagram below:

1. �Credit Payment Service� must log in.
2. Customer can only perform two activities.
3. Paypal is a service not an Actor.
4. **Complete Checkout interacts with the most Actors.**
5. Is a Context diagram (it's a Use Case diagram)

![Diagram

Description automatically generated](data:image/png;base64...)

In the following diagram:

![Diagram, box and whisker chart

Description automatically generated](data:image/png;base64...)

Q4) Which Object is activated the most? \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Q5) How many lifelines are there? \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Q8) The following pattern is typically used for undoing user actions.

1. Observer Pattern - adding observers w/out modifying existing code
2. Strategy Pattern - Separate the code that changes into a separate object which is then passed to code that does not change. Placing algorithms in a separate object that is passed into another class. encapsulating behavior into separate classes.
3. Factory Pattern - Controls which class gets created. Does not allow programmers to create a specific class.
4. Command Pattern - placed commands into objects and has two commands execute and unexecute. These commands can be saved for reuse.
5. iterator pattern - e.g. List of Students in a school. The School hides the internal storage of the student list from other objects. Therefore other objects traversal through the Students without knowing how the Student list is being stored.
6. state pattern - Have separate pre-defined states for different conditions
7. decorator - chain together multiple objects and treat them as one object. i.e. getPrice can get the price of many types of condiments.
8. memento - placing a snapshot of an object in another object
9. builder - 1) protects an object from bad values

2) . also it breaks parameters into smaller understandable parts

1. singleton - protects a global variable (i.e static) from bad values

Q8)\_\_\_\_**4**\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Q8) The following is NOT part of a Software development life cycle

1. Daily Meeting
2. **Targeting Rule**
3. Analyze Current System
4. Feasibility Study
5. Scrum

Q8) \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Q9) The following is not good a good software practice

1. De-Coupled Code
2. **Using inheritance to handle different behaviors**
3. Strategy Pattern
4. Using composition to handle different behaviors
5. Using interface types for method parameters

Q9)\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Q10) A state diagram

1. **Focuses on changes to a system/object during program execution**
2. sequence of messages between objects in an interaction (sequence diagram)
3. Represents the goals of systems and users (requirements/checklist/use case table)
4. the interactions between a system and other actors with which the system is designed to interface (context diagram)
5. an informal, general explanation of a software feature written from the perspective of the end user or customer (user story)

Q10) \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Q11) The following is a non-functional requirement:

1. Scalability - ability of software to grow (or shrink)
2. Page Color
3. Business Rule
4. Report
5. Search Feature

Q11) \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Q12) Non-functional vs functional requirement:

1. A missing functional requirement usually causes the software to be unusable by the user
2. **A missing non-functional requirement usually causes the software unusable by the user**
3. Software performance is a functional requirement
4. Web page background color is a non-functional requirement
5. Non-Functional requirements are easy to test

Q12) \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Q13) A **lifeline** is found in the following diagram:

1. **Sequence Diagram**
2. Interactive Diagram
3. Class Diagram -
4. Object Oriented Diagram
5. Context Diagram

Q13) \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

DP3) Which Design Pattern is shown in the code below?

DP3 Explain)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

public class Session

{

private static Session \_session=null;

public Session getSession()

{

if(\_session==null)

\_session = new Session();

return(\_session);

}

}

public interface MathFunctions {

double multiply(double a, double b);

double divide(double a, double b);

}

public class Calculator implements MathFunctions {

@Override

public double multiply(double a, double b) {

return(a\*b);

}

}

OOP15) Anything wrong with the code above?

Calculator is not implementing the divide method

Q15) The diagram below is a:

![State diagram - Wikipedia](data:image/png;base64...)

1. Activity Diagram
2. Use Case Diagram
3. Door Diagram
4. Timing Diagram
5. **State Diagram**

Q15) \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Q16 and Q17)

![Diagram

Description automatically generated](data:image/png;base64...)

Based on the diagram above:

Q16) Customer can have, at most, this many accounts. \_\_\_**30**\_\_\_\_\_\_

Q17) Bank Officers can have, at most, this many Customers. \_\_**1000**\_\_\_\_

Q18) Match the terms on the left with terms on the right. (All choices must be correct to get credit for this)

Waterfall Process \_\_**4**\_\_\_\_ 1) Email Program

Incremental Process \_\_3\_\_\_ 2) Using Open-Source Software

Software Re-Use \_**2**\_\_\_\_\_ 3) Allows many changes

Client Server \_\_1\_\_\_ 4) Airplane Flying Software

Q19) Which are attributes of Good Software

A)Acceptability and Usability (easy to use)

1. Dependability and security (won't crash and will protect data)
2. Efficiency (won�t waste resources)
3. Maintainability (easy to fix)
4. C
5. A,B
6. A,C,D
7. **A,B,C.D**
8. None of the above

Q19)\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Q20)

![Diagram

Description automatically generated](data:image/png;base64...)

Q20) The diagram above shows:

1. Inheritance vs Aggregation

2. Aggregation vs Abstraction

3. **Composition vs Aggregation**

4. Engine does not require a vehicle

5. Vehicle requires an Engine.

Q21) Dependency Inversion Principle

1. **Encourages using interfaces as opposed to concrete classes**
2. **Encourages code decoupling**
3. **Specifies that high level modules should not depend on low level modules.**
4. 1,3 above
5. **1,2,3**

Q21)\_\_\_\_\_\_\_\_\_\_\_

// Account depends on SqlServer therefore Sqlserver is lower than Account therefore

// SqlServer is considered to be lower than Account because is depending on it

// dependency inversion replaces the concrete dependency with abstraction i.e. the interface. Replace SqlServer with IDatabase

class Account {

SqlServer database;

}

class SqlServer

{

}

Q23) public class Math {

int Execute(String Operation, int op1,int op2)

{

if(Operation == "multiply")

return(op1\*op2);

else if(Operation == "add")

return(op1+op2);

// default operation is subtraction

return(op1-op2);

// division to be added later

}

}

The code above:

1. Violates the Open Closed Principle
2. Violates the Abstraction Principle.
3. Violates the Encapsulation Principle.
4. Uses the Singleton pattern
5. Uses the Factory Pattern

Q23) \_\_\_\_\_\_\_\_\_\_

Q24) class MathTest {

@org.junit.jupiter.api.Test

void test1() {

Math math = new Math();

System.out.println(math.Execute("add",1,2));

}

@org.junit.jupiter.api.Test

void test2() {

Math math = new Math();

assertTrue(math.Execute("add",1,2)==4);

}

@org.junit.jupiter.api.Test

void test3() {

Math math = new Math();

assertFalse(math.Execute("add",1,2)==3);

}

@org.junit.jupiter.api.Test

void test4() {

Math math = new Math();

assertFalse(math.Execute("add",1,2)==4);

}}

Which of the tests above are valid Unit Tests?

test1()

test2()

test2(), test3(), test4()

test1(), test2(), test3(), test4()

test4()

Q24)\_\_\_\_\_\_\_\_\_

Q25) public class CustomerId {

static private int id = 100;

public int getId(){return id++;}

}

The class above uses the:

1. Factory Pattern
2. Observer Pattern
3. Singleton Pattern
4. State Pattern
5. None Of The Above

Q25) \_\_\_\_\_\_\_\_

Q26) You Tube allows of many people to subscribe to multiple channels.

This is like which design pattern.

1. Factory Pattern
2. Observer Pattern
3. Singleton Pattern
4. State Pattern
5. Builder Pattern

Q26)\_\_\_\_\_\_\_\_\_\_\_\_\_

Q27) Ethnography in Software Engineering refers to:

1. Customer Age
2. User Politics
3. User Culture
4. Customer Ethics
5. Customer Location

Q27)\_\_\_\_\_\_\_\_\_\_

Q28) Match the term on the left with the description on the right

Presentation Layer \_\_\_\_\_\_\_ 1) Often includes a User Story (Who, What, Why, Acceptance Criteria)

Controller Layer \_\_\_\_\_\_\_ 2) Model View Controller architecture

Software validation \_\_\_\_\_\_\_ 3) 3 tier architecture(presentation/business/database)

Software Requirements \_\_\_\_\_\_\_ 4) TDD- Unit testing

Q29)

![Graphical user interface, diagram

Description automatically generated](data:image/png;base64...)

Regarding the diagram above:

The object that takes the least time is the Actor.

The database is needed to withdraw money.

There are no return messages.

Withdrawal request is stored in the database.

ATM and Database have a �IS-A� relationship

Q29)\_\_\_\_\_\_\_

Q30) The following will usually cause code to be refactored: (changing code leads to code refactoring)

1. Changing Requirements
2. Incremental Development Process
3. New Features
4. **All of the above**
5. None of the above

Q30) \_\_\_\_\_\_\_\_\_\_\_

Extra Credit: (3 Points)

What type of arguments will cause code to crash?

guidelines - null value, large value, small value,

partition based -

test 1 - less than what is expected

test 2 - more than what is expected

test 3 - what is expected

Q31) What is not true about Unit Testing:

1. Allows testing of individual parts of the software.
2. Team can execute unit testing before the culmination of the development process.
3. Reduces the cost of testing, as defects are identified and fixed in the early stages of development.
4. Increases the reliability of the code.
5. Allows for testing interactions between various parts of the code.

Q32) Which architecture pattern is associated with a Web page?

1. Layered pattern
2. Client-server pattern
3. Pipe-filter pattern
4. Model-view-controller pattern
5. NTier pattern

Q32) Which architecture pattern is associated with an E-Mail program?

1. Layered
2. Client-server pattern
3. Pipe-filter pattern
4. Model-view-controller pattern
5. NTier pattern

Q33) In the diagram below, A represents:

1. Presentation Layer
2. Business Layer
3. Database Layer
4. Persistence Layer
5. Logic Layer

![Diagram

Description automatically generated](data:image/png;base64...)

Which type of testing would a developer probably do?

1. Black box - hidden from developer
2. White box - developer knows the code
3. Acceptance - client
4. Release - not developer
5. Graphical User Interface - customer/GUI expert/graphical artist

If I want to test the divide function below using �Guideline-based testing� and I already tested divide(1,2) and it correctly returned .5, what other values should I test for in the denominator?

public class Math {

double divide(double numerator, double denominator)

{

return numerator/denominator;

}

}

1. 3
2. 4
3. 0
4. 5
5. 6

things to know�

1. ethnography
2. software evolution - new versions/maintence
3. the diagrams -
4. difference between state and activity - state is for only one object water/vapor/ice
5. multiplicity -
6. pipe filter -
7. static = global
8. review process diagram
9. web browser - always client/server
10. remember which non-functional specs require which architecture

- performance - immediate response code should be together (same platform)

- safety - code together easier to review for flaws

- security security layer on top

- maintainability - code that is easy to change - usually small methods are safest to modify w/out creating bugs

1. scrum - product backlog - wish list

scrum backlog - for each sprint

potential release candidate

daily standup

testing

1. all the terms are the same.. i.e. incremental, agile, xp, scrum�
2. remember oop principles

solid/yagni/dry/prefer composition instead of inheritance/

1. difference between abstract and interface
