# Web Development Review Sheet

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
```

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

#### Responsive Design with Media Queries

```css
@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}
```

## JavaScript Features

#### DOM Manipulation

```js
const heading = document.querySelector("h1");
heading.textContent = "New Title";
```

#### Event Handling

```js
document.querySelector("button").addEventListener("click", () => {
  alert("Button clicked!");
});
```

#### Class Manipulation

```js
function changeColor() {
  document.querySelector("h1").classList.toggle("red-class");
}
```

#### Dynamic Styling

```js
document.querySelector("h1").style.color = "blue";
```

#### Loops and Arrays

```js
const items = ["Apple", "Banana", "Cherry"];
items.forEach((item) => console.log(item));
```

#### Functions in JavaScript

```js
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));
```

## Dark/Light Mode Style Switch Pattern

This pattern enables users to toggle between dark and light visual themes on a webpage. It enhances user experience by offering visual comfort, especially in low-light environments. Implementing this functionality requires a combination of HTML for structure, CSS for styling, and JavaScript for behavior.

#### HTML Structure

The HTML provides the interface element users interact with to switch themes. In this case, we use a simple button.

```html
<button id="theme-toggle">Toggle Theme</button>
<p>This is some content to demonstrate the theme effect.</p>
```

You can expand this setup by placing the button in a header or navigation bar for broader usability.

#### CSS Styles

Two CSS classes, `light-mode` and `dark-mode`, define the respective themes. These styles are applied to the `<body>` element to affect the entire page.

```css
body.light-mode {
  background-color: white;
  color: black;
  transition: background-color 0.3s ease, color 0.3s ease;
}

body.dark-mode {
  background-color: #121212;
  color: white;
  transition: background-color 0.3s ease, color 0.3s ease;
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

button:hover {
  background-color: #0056b3;
}
```

Including transition effects smooths the change between themes and provides visual polish.

#### JavaScript Toggle Logic

JavaScript handles toggling the theme by switching the class on the `<body>` element when the button is clicked.

```js
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Set initial mode to light
body.classList.add("light-mode");

toggleButton.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    body.classList.replace("light-mode", "dark-mode");
  } else {
    body.classList.replace("dark-mode", "light-mode");
  }
});
```

This snippet ensures a consistent starting point and toggles classes based on current state. For large applications, consider using a utility function for toggling.

#### Optional: Remember User Preference with localStorage

To retain the selected theme across sessions, use `localStorage` to store and retrieve the user's choice.

```js
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  body.classList.add(storedTheme);
} else {
  body.classList.add("light-mode");
}

toggleButton.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    body.classList.replace("light-mode", "dark-mode");
    localStorage.setItem("theme", "dark-mode");
  } else {
    body.classList.replace("dark-mode", "light-mode");
    localStorage.setItem("theme", "light-mode");
  }
});
```

This code initializes the theme based on previous user preference and keeps the selection persistent. You can further enhance this by syncing theme preference with system-level settings (e.g., prefers-color-scheme media query).

#### Summary

Implementing a style switch between dark and light mode provides flexibility and personalization to users. It requires:

- A user-facing control in HTML
- Mode-specific CSS classes for styling
- JavaScript for event handling and state switching
- Optional storage using `localStorage` for persistence

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
