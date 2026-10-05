# Development Plan: JavaScript Learning Website

## Goal
Build a simple HTML, CSS, and vanilla JavaScript learning website for beginner-to-intermediate programmers. Follow the project requirements in `Agent.md`, keep the examples easy to understand, and make the site usable by opening `index.html` in a browser.

## Phase checklist

### Phase 1: Review requirements and plan the page
- [x] Confirm the technology, structure, and educational constraints in `Agent.md`
- [x] Plan a single-page learning experience with a clear progression through the concepts
- [x] Keep the project to `index.html`, `style.css`, and `script.js`

**Page outline:** Introduce HTML elements, then CSS selectors and classes, before moving into JavaScript selection (`getElementById`, `querySelector`), reading and changing elements, events and CSS changes, user input with a simple condition, selecting multiple elements, and console debugging.

**Implementation files:** The website itself will use only `index.html`, `style.css`, and `script.js`. The requested `Agent.md` and `plan.md` are project guidance, not website assets. At the start of Phase 1, the project directory contains those two guidance files and no website implementation files.

### Phase 2: Create the HTML foundation
- [x] Build the page with semantic HTML elements
- [x] Add sections for HTML elements, CSS basics, selecting elements, reading and changing content, events, user input, multiple elements, and the console
- [x] Include a short explanation, visible example, interactive example, and relevant code snippet in each section
- [x] Use IDs and classes intentionally in the examples

### Phase 3: Add simple CSS styling
- [x] Create a clean, readable layout for the lessons and demo areas
- [x] Style headings, buttons, inputs, examples, and code blocks using basic CSS
- [x] Demonstrate selectors, classes, IDs, colors, spacing, borders, backgrounds, dimensions, and simple flexbox
- [x] Keep the styling accessible and avoid advanced CSS techniques

### Phase 4: Teach selecting, reading, and changing elements
- [x] Demonstrate `document.getElementById()` and `document.querySelector()`
- [x] Show how to read `textContent` and display a useful result
- [x] Demonstrate changing `textContent` and reading an input's `value`
- [x] Explain the code near the interactive example it controls

### Phase 5: Teach interaction and decisions
- [ ] Add simple `click`, `input`, and `mouseover` event examples
- [ ] Demonstrate changing an inline style and, preferably, toggling a CSS class
- [ ] Add a name input and greeting example with a basic `if / else` check
- [ ] Demonstrate `document.querySelectorAll()` with a simple group of elements
- [ ] Add `console.log()` examples and explain how to view them in browser Developer Tools

### Phase 6: Review and validate
- [ ] Confirm the concept order follows the teaching progression in `Agent.md`
- [ ] Check that the JavaScript avoids frameworks and advanced concepts
- [ ] Check that each interactive example works and is easy to connect to its code
- [ ] Verify the site runs by opening `index.html` directly in a browser
- [ ] Make final clarity and readability improvements

## Guiding principles
- Prefer clear teaching examples over clever, reusable abstractions.
- Keep JavaScript straightforward and use educational comments where helpful.
- Keep the code and styling limited to HTML, CSS, and vanilla JavaScript.
- Do not begin implementation until the development plan is approved.
