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
- [x] Add simple `click`, `input`, and `mouseover` event examples
- [x] Demonstrate changing an inline style and, preferably, toggling a CSS class
- [x] Add a name input and greeting example with a basic `if / else` check
- [x] Demonstrate `document.querySelectorAll()` with a simple group of elements
- [x] Add `console.log()` examples and explain how to view them in browser Developer Tools

### Phase 6: Review and validate
- [x] Confirm the concept order follows the teaching progression in `Agent.md`
- [x] Check that the JavaScript avoids frameworks and advanced concepts
- [x] Check that each interactive example works and is easy to connect to its code
- [x] Verify the site runs by opening `index.html` directly in a browser
- [x] Make final clarity and readability improvements

**Validation completed:** Tested selection and reset, reading and changing text, empty and non-empty name input, inline style changes, CSS class toggling and reset, click/input/mouseover events and reset, `querySelectorAll()` counting, and console output. Confirmed all lesson demos retain the explanation-left/demo-right order on desktop and stack in that order on mobile without horizontal overflow. Checked for duplicate IDs, broken in-page links, unlabeled inputs, unnamed buttons, page errors, and failed network requests; none were found. The HTML-only sample button is explicitly disabled and labeled as an example because it has no JavaScript action.

## Guiding principles
- Prefer clear teaching examples over clever, reusable abstractions.
- Keep JavaScript straightforward and use educational comments where helpful.
- Keep the code and styling limited to HTML, CSS, and vanilla JavaScript.
- Do not begin implementation until the development plan is approved.
