# CSCI 355 Midterm Review Sheet

## HTML Features

#### Basic Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title</title>
  </head>
  <body>
    <h1>Main Heading</h1>
    <p>Paragraph text</p>
  </body>
</html>
```

- `<!DOCTYPE html>`: Declares the document as HTML5.
- `<meta charset="UTF-8">`: Ensures proper character encoding.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Enables responsive design.
- `<title>`: Defines the title of the page.

#### Common HTML Elements

- **Headings**: `<h1>` to `<h6>` are used for section titles, where `<h1>` is the most important and `<h6>` is the least.
- **Paragraphs**: `<p>` for body text.
- **Lists**:
  - Ordered lists (`<ol>`) display numbered items.
  - Unordered lists (`<ul>`) display bulleted items.
- **Links**: `<a href="url">Text</a>` to create hyperlinks.
- **Images**: `<img src="image.jpg" alt="Description">` to embed images.
- **Sections and Layout**: `<header>`, `<footer>`, `<section>`, `<article>` organize content semantically.
- **Tables**:

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>
```

```css
table {
  width: 100%; /* Makes the table take up the full width of the page */
  table-layout: fixed; /* Ensures equal distribution of space among cells */
  border-collapse: collapse; /* Optional: for better border styling */
}
th,
td {
  border: 1px solid black; /* Adds borders to the cells */
  padding: 8px; /* Adds padding for readability */
  text-align: center; /* Centers the text in the cells */
}
```

- **Forms** for user input:

```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  <input type="submit" value="Submit" />
</form>
```

## CSS Features

#### CSS Selectors

```css
/* Element selector */
p {
  color: blue;
}

/* Class selector */
.class-name {
  font-size: 14px;
}

/* ID selector */
#id-name {
  background-color: yellow;
}

/* Descendant selector */
section p {
  font-style: italic;
}

/* Child selector */
section > p {
  color: red;
}

/* Attribute selector */
a[target="_blank"] {
  text-decoration: underline;
}

/* Pseudo-class selector */
a:hover {
  color: green;
}

/* Pseudo-element selector */
p::first-line {
  font-weight: bold;
}

/* Grouping selector */
h1,
h2,
h3 {
  font-family: Arial, sans-serif;
}

/* Universal selector */
* {
  box-sizing: border-box;
}

/* HTML vs :root */
html {
  font-size: 16px;
}

:root {
  --main-color: teal;
}
```

- **`html` selector** targets the root `<html>` element directly. Use it for setting base properties like `font-size`, scroll behavior, or general styles that affect the whole document.
- **`:root` pseudo-class** also refers to the root element, but is specifically useful for defining CSS variables (`--custom-var`). It has higher specificity than `html`, making it more suitable for global custom properties.

Use `html` when affecting layout or sizing, and `:root` when organizing and centralizing theme variables or constants.

#### CSS Variables

CSS variables (also known as custom properties) allow you to define reusable values in your stylesheet. They are especially helpful for maintaining consistency in themes and simplifying future updates.

```css
:root {
  --primary-color: #007bff;
  --padding-size: 1rem;
}

button {
  background-color: var(--primary-color);
  padding: var(--padding-size);
}
```

- **Overview and usage**: Variables are defined inside a selector (commonly `:root`) using `--variable-name` syntax. Access them with `var(--variable-name)`.
- **Use Cases**:
  - Theming (light/dark modes)
  - Centralized control over color palettes, spacing, font sizes, etc.
  - Reducing repetition in stylesheets
  - Easier maintenance and scalability

Variables defined in `:root` apply globally across the document. They can also be overridden in more specific scopes.

#### Box Model

```css
.box {
  width: 100px;
  height: 100px;
  padding: 10px;
  margin: 20px;
  border: 2px solid black;

  box-shadow: 10px 5px 5px rgb(161, 157, 157);
  /* box-shadow: h-offset v-offset blur spread color inset; */
}

.container {
  background: linear-gradient(to right, red, blue); /* Left to Right */
  background: linear-gradient(to bottom, red, blue); /* Top to Bottom */
  background: linear-gradient(45deg, red, blue); /* Diagonal */
  background-image: linear-gradient(to right, red 0%, yellow 50%, green 100%);
}
```

#### Flexbox Layout Examples (with commentary)

```css
.container {
  display: flex; /* Enables flex context for children */
  flex-wrap: wrap; /* Allows items to wrap to the next line if needed */
  gap: 10px; /* Adds space between items */
  justify-content: space-between; /* Distributes space evenly between items */
}

.item {
  flex-grow: 1; /* Allows items to grow to fill available space */
}

.item-fixed {
  flex: 0 0 200px; /* Fixed width item (grow: 0, shrink: 0, basis: 200px) */
}

.item-auto {
  flex: 1 1 auto; /* Grows and shrinks as needed, default base size */
}
```

#### Grid Layout Examples (with commentary)

```css
.grid-container {
  display: grid; /* Enables grid layout */
  grid-template-columns: repeat(3, 1fr); /* Creates 3 equal-width columns */
  grid-auto-rows: minmax(150px, auto); /* Sets row height with flexibility */
  gap: 10px; /* Space between rows and columns */
}

.grid-item {
  grid-column: span 2; /* Item spans 2 columns */
}

.grid-container-alt {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* Unequal column sizes */
  grid-auto-rows: 100px; /* Fixed row height */
  row-gap: 20px; /* Only vertical spacing */
  column-gap: 15px; /* Only horizontal spacing */
}
```

## JavaScript Features

#### DOM Manipulation

```js
const heading = document.querySelector("h1");
heading.textContent = "New Title";
```

- Use `querySelector()` or `getElementById()` to access DOM elements.
- Modify properties such as `textContent`, `innerHTML`, or `value`.

#### Event Handling

```js
document.querySelector("button").addEventListener("click", () => {
  alert("Button clicked!");
});
```

- Use `addEventListener` to bind custom logic to events like `click`, `input`, `submit`, `mouseover`, etc.
- You can define event handlers as arrow functions or named functions.

#### Class Manipulation

```js
function changeColor() {
  document.querySelector("h1").classList.toggle("red-class");
}
```

- Use `classList.add()`, `remove()`, `toggle()`, and `contains()` to dynamically manage CSS classes.

#### Dynamic Styling

```js
document.querySelector("h1").style.color = "blue";
```

- Style individual properties directly through the `.style` object.
- Use this sparingly (for maintainability), prefer toggling classes instead.

#### Loops and Arrays

```js
const items = ["Apple", "Banana", "Cherry"];
items.forEach((item) => console.log(item));
```

- Common loop types: `for`, `while`, `for...of`, and higher-order functions like `forEach()` and `map()`.
- Arrays in JavaScript are dynamic (non-fixed size) and can hold different types of elements.

#### Functions in JavaScript

```js
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));
```

- Functions can be declared using `function` keyword, arrow syntax (`=>`), or as function expressions.
- Use parameters and return values to make code reusable and modular.

#### Variables and Scope

```js
let x = 10;
const y = 20;
var z = 30;
```

- `let` and `const` are block-scoped (preferred). `var` is function-scoped and often avoided.
- Use `const` by default, and `let` when reassignment is needed.

#### Conditional Logic

```js
if (x > 10) {
  console.log("Large");
} else {
  console.log("Small");
}
```

- JavaScript supports `if`, `else if`, `else`, and ternary operators.
- Use `===` for strict equality comparisons to avoid type coercion issues.

```js
console.log(5 == "5"); // true - loose equality with type coercion
console.log(5 === "5"); // false - strict equality, types must match
```

- Use `==` only when you intentionally want JavaScript to convert types for comparison.
- Prefer `===` to avoid unexpected results due to implicit type conversion.

#### Working with Objects

```js
const person = {
  name: "Alice",
  age: 30,
};
console.log(person.name);
```

- Objects are key-value pairs used to structure data.
- Access properties using dot or bracket notation.

### Theme Toggle Pattern (Dark/Light Mode)

This pattern enables users to toggle between dark and light visual themes on a webpage. It enhances user experience by offering visual comfort, especially in low-light environments.

#### HTML Structure

```html
<!-- Dark-mode class is not present, therefore we can consider the page to be in a light mode state -->
<body>
  <button id="theme-toggle">Toggle Theme</button>
  <p>This is some content to demonstrate the theme effect.</p>
</body>
```

> The presence of `dark-mode` class activates dark mode. If `dark-mode` is not present, the page is considered to be in light mode.

#### CSS Styles

```css
body {
  background-color: white;
  color: black;
}

body.dark-mode {
  background-color: #121212;
  color: white;
}

button {
  margin: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
}
```

#### JavaScript Logic

```js
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
```

This snippet ensures a consistent starting point and toggles classes based on current state.

#### Summary

Implementing a style switch between dark and light mode provides flexibility and personalization to users. It requires:

- A user-facing control in HTML
- Mode-specific CSS classes for styling
- JavaScript for event handling and state switching

Together, these components create a modern, responsive, and accessible user interface that aligns with best practices in web development.

## Summary of Covered Topics

#### **HTML**

- Page structure and document metadata
- Common elements such as headings, paragraphs, links, and images
- Lists (ordered and unordered)
- Tables and their structure (rows, columns, headers)
- Forms and input elements for user interaction
- Semantic HTML elements for better document organization

#### **CSS**

- Basic and advanced selectors (element, class, ID, descendant, child)
- Box model concepts including padding, margins, borders
- Layout techniques: Flexbox and Grid
- Responsive design with media queries

#### **JavaScript**

- Modifying and manipulating the Document Object Model (DOM)
- Event handling for user interactions
- Adding and removing CSS classes dynamically
- Changing styles dynamically using JavaScript
- Using loops and arrays for iteration and data storage
- Writing functions for modular programming
