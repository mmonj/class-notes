# CSCI 370: Iterator and Command Design Patterns

<small>Thursday, April 10</small>

---

## Memento Pattern (Recap)

The **Memento Pattern** is a design pattern that captures and stores the state of an object so it can be restored later without exposing its internal structure. This is commonly used in undo/redo systems.

### Key Components

- **Originator**: The object whose state we want to save. For example, a `Document` object that holds some content.
- **Memento**: A snapshot of the originator’s internal state. This object is immutable and doesn't expose any functionality.
- **Caretaker**: Manages when to save or restore the originator's state using mementos. It does not know or depend on the details of the saved state.

Example: In a text editor, you might save the state of a document before a change so that it can be restored if the user hits “undo.”

---

## Iterator Pattern

The **Iterator Pattern** provides a way to access the elements of a collection one at a time without exposing how the collection is implemented.

### Problem

The **Iterator Pattern** solves the problem of **tight coupling** between the internal data structure of a collection and the client code that uses it.

Example:

```java
Teacher[] teachers = school.getTeachers();
for (int i = 0; i < 100; i++) {
    System.out.println(teachers[i].name);
}
```

If a `School` class internally uses an array to store `Teacher` objects, and external code loops over that array directly, the client becomes tightly coupled to the array implementation. Any future changes to the data structure (e.g., switching from an array to a list) would break all the dependent code.

### Solution: Iterator Pattern

Instead of directly exposing the internal array, `School2` returns an iterator that hides the implementation details:

### Interface Definition

```java
public interface Iterator {
    boolean hasNext();
    Object next();
}
```

This interface defines two methods:

- `hasNext()`: returns true if there are more elements.
- `next()`: returns the next element in the collection.

### Implementation Example

The `School2` class uses an inner class `TeacherIterator` to implement this pattern.

```java
private class TeacherIterator implements Iterator {
    int pos = 0;

    public boolean hasNext() {
        return pos <= 99;
    }

    public Object next() {
        return teachers[pos++];
    }
}
```

### Using the Iterator

```java
School2 school2 = new School2();
Iterator iterator = school2.getTeachers();
while (iterator.hasNext()) {
    System.out.println(((Teacher)iterator.next()).name);
}
```

This setup ensures the `main` method doesn't care how the teachers are stored inside the school object. The internal array is abstracted away.

### Benefits

- Reduces coupling between collection and client code
- Makes code more maintainable and flexible
- Supports different storage implementations without affecting iteration logic

---

## Command Pattern

### Problem

In applications like word processors, users perform actions (e.g., bold text, undo, redo). These user actions need to be **encapsulated**, stored, and optionally **undone** or **redone**.

### Solution:

The **Command Pattern** turns a request into a standalone object that contains all information about the request. It’s especially useful for actions that might be undone, redone, queued, or logged.

**Interface:**

```java
public interface Command {
    void execute();
    void unexecute();
}
```

### Example: Bold Text in a Document

```java
public class BoldContent implements Command {
    HtmlDocment htmlDocment;

    public BoldContent(HtmlDocment htmlDocment) {
        this.htmlDocment = htmlDocment;
    }

    public void execute() {
        htmlDocment.content = "<b>" + htmlDocment.content + "</b>";
    }

    public void unexecute() {
        htmlDocment.content = htmlDocment.content.replace("<b>", "");
        htmlDocment.content = htmlDocment.content.replace("</b>", "");
    }
}
```

The `HtmlDocment` class simply holds a `String content` field:

```java
public class HtmlDocment {
    public String content;
}
```

### Applying the Command

```java
List<Command> commands = new ArrayList<>();
HtmlDocment doc = new HtmlDocment();
doc.content = "Hello World!";

Command bold = new BoldContent(doc);
commands.add(bold);

for (Command c : commands)
    c.execute();

for (Command c : commands)
    c.unexecute();
```

The action of making content bold (and undoing it) is now encapsulated in an object. This makes it easier to implement undo/redo functionality and action history.

### Applications

- Text editors (bold, italic, undo, redo)
- Macros
- Transaction systems
- UI event handling

### Benefits

- Encapsulates behavior as objects
- Easy to extend with new commands
- Simplifies undo/redo logic
- Decouples invoker from action logic

---

## Key Takeaways

| Pattern  | Purpose                                              | Structure/Components                                   | Benefits                                           |
| -------- | ---------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------- |
| Memento  | Save/restore internal state of an object             | Originator, Memento, Caretaker                         | Supports undo/redo without violating encapsulation |
| Iterator | Traverse a collection without exposing its structure | Iterator interface with hasNext() and next()           | Decouples client from collection implementation    |
| Command  | Encapsulate requests as objects (e.g., user actions) | Command interface, concrete command classes, receivers | Enables undo, redo, and action logging             |

These three design patterns each solve common problems in software design, especially in systems where you need flexibility, encapsulation, and maintainability.
