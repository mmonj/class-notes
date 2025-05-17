# Building a Blog App with Express.js — A Step-by-Step Tutorial

## Introduction

This guide walks you through building a blog-style web application from scratch using **Express.js**. You'll learn how to set up an Express project, handle user authentication, render dynamic pages with EJS, store data locally with JSON, and structure your app for scalability.

By the end, you’ll have a working blog app that includes:

- A login/signup system
- A feed of blog posts
- The ability to compose and save new posts
- Editable user profile and settings pages

Let’s get started.

---

## Step 1: Initialize Your Project

Run the following commands in your terminal:

```bash
mkdir express-blog             # Create a new project directory
cd express-blog
npm init -y                    # Initialize a new Node.js project with default values
npm install express ejs cookie-parser morgan
```

These commands create a new project, initialize it with npm, and install the required packages:

- `express`: The core web framework.
- `ejs`: A template engine for rendering HTML.
- `cookie-parser`: Middleware for parsing cookies.
- `morgan`: Logs incoming HTTP requests for debugging.

---

## Step 2: Project Structure

Create the following directory layout:

```plaintext
express-blog/
├── app.js                     # Main server file
├── model/                     # Stores data as local JSON files
│   ├── postDB.json            # Contains blog post data
│   └── userDB.json            # Contains user data
├── routes/                    # Express route definitions
│   ├── index.js               # Public routes like feed and homepage
│   └── auth.js                # Auth-related routes
├── views/                     # EJS templates for rendering pages
│   ├── auth/                  # Signin, signup, and welcome pages
│   ├── main/                  # Pages after login
│   └── error.ejs             # Error view
├── public/                    # Static files like CSS, images
│   └── stylesheets/
```

This layout helps organize your code logically and maintainably.

---

## Step 3: Set Up the Express App

Create `app.js`:

```js
const express = require("express"); // Import the Express module
const path = require("path"); // Core Node module for working with file paths
const cookieParser = require("cookie-parser"); // Middleware to parse cookies from request headers
const logger = require("morgan"); // HTTP request logger middleware

const indexRouter = require("./routes/index"); // Import custom route module for public routes
const authRouter = require("./routes/auth"); // Import custom route module for authentication
const createError = require("http-errors"); // Handles HTTP errors like 404, 500, etc.

const app = express(); // Create an Express application instance

// View engine setup
app.set("views", path.join(__dirname, "views")); // Set the views directory
app.set("view engine", "ejs"); // Set EJS as the view engine

// Middleware
app.use(logger("dev")); // Log all HTTP requests in development format
app.use(express.json()); // Parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies (from form submissions)
app.use(cookieParser()); // Parse cookies from the client
app.use(express.static(path.join(__dirname, "public"))); // Serve static assets like CSS and images

// Route mounting
app.use("/", indexRouter); // Use index router for base routes
app.use("/auth", authRouter); // Use auth router for /auth/* routes

// Catch unhandled routes (404 Not Found)
app.use((req, res, next) => next(createError(404)));

// Global error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message; // Provide error message to views
  res.locals.error = req.app.get("env") === "development" ? err : {}; // Show stacktrace in dev only
  res.status(err.status || 500); // Set status code
  res.render("error"); // Render error view
});

module.exports = app; // Export app for use in server.js or tests
```

---

## Step 4: Creating Routes

Create `routes/index.js`:

```js
const express = require("express"); // Import Express
const fs = require("fs"); // Node module for filesystem access
const router = express.Router(); // Create a new router instance
const postDBFile = "./model/postDB.json"; // Path to the JSON file storing posts

// Utility function to read the posts database
function readPostDB() {
  return JSON.parse(fs.readFileSync(postDBFile, "utf-8")); // Parse JSON content into JS object
}

// Route: GET homepage
router.get("/", (req, res) => {
  res.render("./auth/index"); // Render the welcome page
});

// Route: GET /feed (requires login)
router.get("/feed", (req, res) => {
  if (req.cookies.loggin === "false") return res.redirect("/"); // Redirect if not logged in
  const posts = readPostDB(); // Read all posts
  res.render("./main/feed", { posts: posts.posts }); // Pass posts array to EJS view
});

module.exports = router; // Export router
```

Create `routes/auth.js`:

```js
const express = require("express");
const fs = require("fs");
const router = express.Router();
const userDBFile = "./model/userDB.json"; // Path to the user database JSON file

function readUserDB() {
  return JSON.parse(fs.readFileSync(userDBFile, "utf-8")); // Read and parse user data
}
function writeUserDB(data) {
  fs.writeFileSync(userDBFile, JSON.stringify(data, null, 2), "utf-8"); // Write data to file
}

// Route: GET signup page
router.get("/signup", (req, res) => res.render("./auth/signup"));

// Route: GET signin page
router.get("/signin", (req, res) => res.render("./auth/signin"));

// Route: POST form data to signup
router.post("/signup/submit", (req, res) => {
  const { email, password, fullname } = req.body; // Destructure submitted fields
  if (!email || !password || !fullname)
    return res.render("./auth/signup", { msg: "Missing fields" });

  const users = readUserDB();
  if (users.find((user) => user.email === email)) {
    return res.render("./auth/signup", { msg: "Email already used" });
  }
  users.push({ email, password, fullname }); // Add new user
  writeUserDB(users); // Save updated user list
  res.cookie("loggin", "true"); // Set login cookie
  res.redirect("/feed"); // Redirect to feed
});

// Route: POST form data to signin
router.post("/signin/submit", (req, res) => {
  const { email, password } = req.body; // Extract submitted credentials
  const users = readUserDB();
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return res.render("./auth/signin", { msg: "Invalid credentials" });
  res.cookie("loggin", "true"); // Log user in with cookie
  res.redirect("/feed");
});

module.exports = router;
```

---

## Step 5: Create Views

Use EJS templates to generate dynamic HTML.

### `views/main/feed.ejs`

```ejs
<h1>Blog Feed</h1>
<% posts.forEach(post => { %>             <!-- Loop through each post -->
  <article>
    <h2><%= post.title %></h2>           <!-- Display post title -->
    <p><%= post.body %></p>             <!-- Display post content -->
  </article>
<% }); %>
```

### `views/auth/header.ejs`

```ejs
<nav>
  <a href="/feed">Feed</a>
  <a href="/compose">Compose</a>
  <div>
    <a href="/profile">Profile</a>
    <a href="/settings">Settings</a>
    <a href="/auth/logout">Logout</a>
  </div>
</nav>
```

Include this header in other templates with:

```ejs
<%- include("./header.ejs") %>
```

---

## Step 6: JSON Data Storage

Example `postDB.json` structure:

```json
{
  "posts": [{ "title": "First Post", "body": "Hello world" }]
}
```

Example `userDB.json`:

```json
[{ "email": "test@example.com", "password": "1234", "fullname": "Test User" }]
```

For real apps, use a database like MongoDB or PostgreSQL.

---

## Next Steps & Enhancements

- Add password hashing using `bcrypt`
- Improve error messages and validation
- Implement full CRUD for posts (edit/delete)
- Add user profile editing and profile pictures
- Add a settings page with dark/light mode toggle
- Store user preferences in local storage or database
- Paginate long feeds
- Add comment functionality

---

## Conclusion

You’ve now built a functional blog app using Express.js! You’ve learned how to set up routes, parse forms, use cookies, and render dynamic views. This tutorial sets you up to scale the app with more advanced features and persistent databases.

Happy coding! 🚀
