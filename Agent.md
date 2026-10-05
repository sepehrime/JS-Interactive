# AGENTS.md — HTML, CSS & JavaScript Learning Website

## Project Purpose

Build a small educational website for a beginner-to-intermediate programmer who wants to understand how:

* HTML creates the structure of a webpage
* CSS controls presentation and layout
* JavaScript selects HTML elements
* JavaScript reads and changes elements
* JavaScript responds to user interaction

The primary goal is **learning**, not building a production-quality website.

The code should make the relationship between HTML, CSS, and JavaScript obvious.

---

# Technology Constraints

This project must contain only:

```text
HTML
CSS
JavaScript
```

Use:

```text
HTML5
CSS3
Vanilla JavaScript
```

Do **not** use:

* React
* Vue
* Angular
* Bootstrap
* Tailwind
* jQuery
* TypeScript
* Node.js
* npm
* build tools
* bundlers
* frameworks
* external JavaScript libraries

The website should run simply by opening `index.html` in a browser.

---

# Project Structure

Keep the structure extremely simple:

```text
javascript-learning/
│
├── index.html
├── style.css
└── script.js
```

Do not create additional files unless explicitly requested.

---

# Educational Philosophy

The most important rule for this project is:

> **Prefer simple code that demonstrates a concept clearly over clever or reusable code.**

The learner should be able to look at:

```javascript
const button = document.querySelector("#myButton");
```

and understand what is happening.

Avoid hiding simple concepts behind abstractions.

---

# Concepts to Demonstrate

The website should progressively demonstrate the following concepts.

## 1. HTML Elements

Show common HTML elements such as:

```html
<h1>
<p>
<button>
<input>
<div>
<ul>
<li>
<img>
```

The website should make it clear that these are elements in the HTML document.

---

# 2. Selecting Elements

Demonstrate simple JavaScript selection methods.

Start with:

```javascript
document.getElementById()
```

and:

```javascript
document.querySelector()
```

Later demonstrate:

```javascript
document.querySelectorAll()
```

Explain through the page what each one selects.

For example:

```javascript
const title = document.getElementById("title");
```

and:

```javascript
const button = document.querySelector("#changeButton");
```

Avoid introducing advanced DOM traversal concepts.

---

# 3. Reading Element Content

Demonstrate:

```javascript
element.textContent
```

For example:

```javascript
const title = document.querySelector("#title");

console.log(title.textContent);
```

Show the result visibly on the page where practical.

---

# 4. Changing Elements

Demonstrate simple DOM manipulation.

Examples:

```javascript
title.textContent = "New Title";
```

and:

```javascript
message.textContent = "Hello!";
```

Also demonstrate changing simple properties such as:

```javascript
input.value
```

Keep the examples straightforward.

---

# 5. Changing CSS with JavaScript

Demonstrate a simple interaction such as:

```javascript
box.style.backgroundColor = "lightblue";
```

However, also demonstrate the preferable pattern of changing a CSS class:

```javascript
box.classList.add("highlight");
```

Keep the distinction simple:

> JavaScript controls behavior.
> CSS controls appearance.

---

# 6. Events

Demonstrate basic user interaction.

Start with:

```javascript
button.addEventListener("click", function () {
    // something happens
});
```

Demonstrate a few simple events:

```text
click
input
mouseover
```

Do not introduce complex event systems.

---

# 7. Reading User Input

Include a simple input example.

For example:

```html
<input id="nameInput">
<button id="greetButton">Greet Me</button>

<p id="greeting"></p>
```

JavaScript:

```javascript
const nameInput = document.querySelector("#nameInput");
const greetButton = document.querySelector("#greetButton");
const greeting = document.querySelector("#greeting");

greetButton.addEventListener("click", function () {
    greeting.textContent = "Hello, " + nameInput.value;
});
```

This should be one of the central examples because it clearly demonstrates:

```text
HTML
  ↓
select element
  ↓
read value
  ↓
user clicks
  ↓
JavaScript runs
  ↓
change HTML
```

---

# 8. Multiple Elements

Demonstrate selecting multiple elements with:

```javascript
document.querySelectorAll()
```

Use a simple example such as a list of buttons or list items.

Do not introduce array methods yet unless they are absolutely necessary.

Avoid teaching:

```javascript
.map()
.filter()
.reduce()
```

at this stage.

---

# 9. Simple Conditions

It is acceptable to introduce very basic:

```javascript
if
else
```

For example:

```javascript
if (nameInput.value === "") {
    message.textContent = "Please enter your name.";
} else {
    message.textContent = "Hello, " + nameInput.value;
}
```

The goal is to demonstrate that JavaScript can make decisions based on what the user does.

---

# 10. Console

Demonstrate:

```javascript
console.log()
```

Teach the learner how to open browser Developer Tools and see the output.

Use simple examples:

```javascript
console.log("The button was clicked");
```

and:

```javascript
console.log(nameInput.value);
```

The console should be presented as a useful learning/debugging tool.

---

# Website Design

Create a simple educational interface.

The page should contain sections such as:

```text
HTML
What HTML elements are

SELECT
How JavaScript finds elements

CHANGE
How JavaScript changes elements

EVENTS
How JavaScript responds to actions

INPUT
How JavaScript reads user input

MULTIPLE ELEMENTS
How JavaScript selects multiple elements

CONSOLE
How to use console.log()
```

Each section should contain:

1. A short explanation
2. A visible example
3. An interactive example
4. A small code snippet when useful

---

# Example Section

A section could look like:

```text
┌─────────────────────────────────────┐
│ Selecting an Element                │
│                                     │
│ JavaScript can find an HTML element │
│ using document.querySelector().     │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Hello, JavaScript!              │ │
│ └─────────────────────────────────┘ │
│                                     │
│ [ Change Text ]                     │
│                                     │
│ const message =                     │
│     document.querySelector(         │
│         "#message"                  │
│     );                              │
└─────────────────────────────────────┘
```

The learner should be able to interact with the example and immediately see the result.

---

# JavaScript Complexity Rules

Keep JavaScript intentionally simple.

Prefer:

```javascript
const button = document.querySelector("#button");

button.addEventListener("click", function () {
    message.textContent = "Clicked!";
});
```

Do NOT immediately introduce:

* classes
* modules
* imports/exports
* async/await
* promises
* APIs
* fetch()
* closures
* callbacks as an abstract concept
* complex functions
* custom event systems
* state management
* localStorage
* JSON
* object-oriented programming
* design patterns

These may be introduced in a future version.

---

# Functions

Functions are allowed, but keep them extremely simple.

For example:

```javascript
function sayHello() {
    message.textContent = "Hello!";
}
```

Avoid creating utility functions simply to make the code "cleaner."

For this project, repetition is sometimes preferable if it makes the lesson easier to understand.

---

# CSS Guidelines

CSS should demonstrate basic concepts rather than become a CSS framework.

Teach and demonstrate:

* selectors
* classes
* IDs
* colors
* fonts
* margins
* padding
* borders
* backgrounds
* width
* height
* simple flexbox

Avoid advanced CSS concepts such as:

* complex grid layouts
* CSS preprocessors
* CSS-in-JS
* animations
* complex responsive systems
* advanced selectors

Keep the design clean and readable.

---

# HTML Guidelines

Use semantic HTML where practical:

```html
<header>
<main>
<section>
<h1>
<h2>
<p>
<button>
<label>
<input>
<footer>
```

Use IDs and classes intentionally because they are important to the JavaScript lessons.

For example:

```html
<button id="changeButton" class="demo-button">
    Change Text
</button>
```

This should help demonstrate the difference between:

* an HTML `id`
* an HTML `class`
* a JavaScript selector

---

# Code Comments

Use comments for educational purposes.

Good:

```javascript
// Find the button with the ID "changeButton"
const button = document.querySelector("#changeButton");
```

Good:

```javascript
// Change the text inside the paragraph
message.textContent = "The text changed!";
```

Avoid comments that simply repeat complicated code.

The comments should help the learner connect the code to what they see on the page.

---

# Code Display

Whenever practical, show the relevant JavaScript directly next to the interactive example.

The learner should be able to make the connection:

```text
CODE
  ↓
BROWSER
  ↓
RESULT
```

Do not build a sophisticated syntax-highlighting system.

A simple `<pre><code>` block is sufficient.

---

# Teaching Order

Introduce concepts roughly in this order:

```text
1. HTML elements
       ↓
2. CSS selectors/classes
       ↓
3. JavaScript
       ↓
4. Selecting an element
       ↓
5. Reading an element
       ↓
6. Changing an element
       ↓
7. Button click
       ↓
8. User input
       ↓
9. if / else
       ↓
10. Selecting multiple elements
       ↓
11. Simple console debugging
```

Do not jump ahead unnecessarily.

---

# Visual Relationship

The website should reinforce this mental model:

```text
             HTML
              │
              │ creates
              ▼
          PAGE ELEMENTS
              ▲
              │
        JavaScript selects
              │
              ▼
       JavaScript changes
              │
              ▼
        User sees result


             CSS
              │
              ▼
       Controls appearance
```

Another important mental model:

```text
HTML = Structure

CSS = Appearance

JavaScript = Behavior
```

Use this distinction throughout the website.

---

# Development Rules

When adding a new lesson:

1. Keep the concept small.
2. Show the HTML involved.
3. Show the JavaScript involved.
4. Let the learner interact with it.
5. Explain what changed.
6. Avoid introducing unrelated concepts.

Each example should answer:

> "What did JavaScript do to the HTML?"

---

# Avoid Overengineering

Do not create:

* a JavaScript framework
* a component system
* reusable UI libraries
* a state-management system
* a build system
* a package manager
* a backend
* a database
* multiple JavaScript files
* multiple CSS files

The entire application should remain understandable by opening:

```text
index.html
style.css
script.js
```

---

# Agent Behavior

The agent should behave like a programming instructor as well as a developer.

When making changes:

* Explain important concepts briefly.
* Keep examples beginner-friendly.
* Prefer explicit code over clever code.
* Don't optimize prematurely.
* Don't introduce advanced concepts without being asked.
* Point out when a change introduces a new JavaScript concept.
* Preserve the educational progression.

If there are multiple ways to implement something, prefer the version that is easiest for a beginner to understand.

---

# Important Rule

Before adding a new JavaScript concept, ask:

> "Does the learner need to understand this concept yet?"

If the answer is no, don't introduce it.

The goal is not to demonstrate everything JavaScript can do.

The goal is to make the fundamentals of **HTML + CSS + JavaScript interaction** understandable.

---

# Success Criteria

The finished website should allow a beginner to look at the source code and understand the basic cycle:

```text
HTML creates an element
        ↓
CSS styles the element
        ↓
JavaScript finds the element
        ↓
JavaScript listens for an event
        ↓
JavaScript reads information
        ↓
JavaScript changes the element
        ↓
The browser displays the result
```

If the learner understands that cycle, the project has succeeded.
