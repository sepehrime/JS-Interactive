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

## Current project review
The current version already covers the core beginner learning path: HTML structure, CSS styling, JavaScript selection, DOM reading and writing, basic events, conditional logic, selector groups, and console debugging. This is a strong foundation for a teaching site, but it is still focused on the fundamentals.

The next stage should expand the site from a single-page lesson walkthrough into a more interactive learning experience with guided practice, layered challenges, and more realistic JavaScript behaviors without leaving the plain HTML/CSS/vanilla JavaScript constraint.

## Phase 7: Code challenges and new lessons (completed)

**Decisions made:** The code runner lives in a new `challenges.js` file, so `script.js` stays pure beginner lesson code. Every JavaScript lesson (04 onward) and every new lesson ends with one challenge. Challenges are auto-checked and give hints. The new lessons are Functions, Arrays & loops, and Create & remove elements.

### 7a. Challenge runner (`challenges.js`)
- [x] Each challenge is a `.challenge` block inside a lesson: a task description, a `<textarea>` code editor with starter code and `___` blanks, a small "challenge stage" with its own elements (unique IDs), and the buttons **Run**, **Reset**, **Hint**, and **Show solution**
- [x] **Run** executes the learner's code with `new Function()` inside `try/catch`, so a mistake never breaks the rest of the page
- [x] After running, a per-challenge check function inspects the stage (e.g. "does `#chTitle` now say *Hello*?") and shows ✅ "Correct!" or a specific hint
- [x] Errors are translated into plain words (e.g. `ReferenceError: titel is not defined` → "JavaScript doesn't know a variable named `titel`. Check the spelling.")
- [x] `console.log()` output from the learner's code also appears in a small on-page output panel, so learners see it without opening DevTools
- [x] **Reset** restores both the starter code and the stage's original HTML
- [x] The Tab key inserts spaces in the editor, and every control is keyboard accessible and labeled
- [x] A small "challenges solved: X / N" counter appears in the header (in memory only, with no localStorage)
- [x] Comment at the top of `challenges.js`: "This file is the practice tool. You don't need to understand it yet. The lessons are in script.js."

### 7b. Challenges for existing lessons (04–11)
- [x] 04 Select: fill in the selector to select `#chHeading` and add the `is-selected` class
- [x] 05 Read: read a paragraph's `textContent` and copy it into an output box
- [x] 06 Change: change a heading's text to an exact target sentence
- [x] 07 Style: make a box highlighted using `classList.add` (not inline style)
- [x] 08 Events: add a click listener so a button changes a message
- [x] 09 Input + if/else: greet the typed name, or show "Please enter your name." when it is empty (the check runs both cases)
- [x] 10 Multiple elements: use `querySelectorAll` and `.length` to show how many items there are
- [x] 11 Console: `console.log()` an input's value (checked through the output panel)

### 7c. New lessons (each with explanation, demo, code snippet, and challenge)
- [x] 12 Functions: write a simple `function`, call it from more than one button, then use one parameter (`greet(name)`). Challenge: complete a function and call it from a click listener
- [x] 13 Arrays & loops: an array of strings, `.length`, index `[0]`, a `for` loop that writes each item to the page, then looping over `querySelectorAll` results to change every item. Challenge: loop over an array to build a list's text
- [x] 14 Create & remove elements: `document.createElement`, `textContent`, `appendChild`, and `element.remove()` in a small to-do list (add from an input, remove a done item). Challenge: complete the code that adds a new `<li>`
- [x] Update the header nav and the closing summary to include the new lessons

### 7d. Update guidance and validate
- [x] Update `Agent.md` and `CLAUDE.md`: allow `challenges.js` as tooling, and allow functions with parameters, arrays, `for` loops, `createElement`/`appendChild`/`remove` (still no `map`/`filter`/`reduce`, classes, async, localStorage)
- [x] Test every challenge: the correct answer passes, common wrong answers give helpful hints, syntax errors are reported clearly, and Reset works
- [x] Check that the page still works when opened directly from the file, on mobile width, and with keyboard only

**Validation completed:** An automated headless Chrome run covered all 11 challenges. Starter code with blanks asks for the blanks to be filled. 25 common wrong answers (missing `#`, typos, wrong capitalization, style instead of class, wrong event name, querySelector instead of querySelectorAll, logging the element instead of its value, an off-by-one index, a missing appendChild/remove, a wrong tag) each produce the intended hint or plain-language error. Every solution passes, and re-running doesn't stack listeners. Errors in listeners triggered later by the learner are explained. Reset, Hint, Tab/Esc keys, the progress counter, and the lesson 12–14 demos all work. No page errors, and no horizontal overflow at 390px, 800px, or 1280px.

**Known limit:** an infinite loop written by the learner (e.g. in lesson 13) will freeze the tab, and plain JavaScript can't stop it. The loop challenge will warn about this, and its starter code will already include a correct loop condition.

## Later ideas (not scheduled)
- [ ] Add a more structured lesson navigation system with visible chapter progress and jump links
- [ ] Add interactive practice challenges with "Try it" and "Reset" controls for each new concept
- [ ] Expand the lesson flow beyond the basics into functions, loops, arrays, objects, and event handling patterns
- [ ] Add guided exercises that show how JavaScript can work with lists, repeated elements, and user data
- [ ] Introduce a small theme toggle or preference switch to teach CSS variables and interactive styling
- [ ] Add a lightweight progress tracker that marks completed sections and helps the learner follow the path
- [ ] Add a simple "developer tools" section explaining console, errors, and debugging workflows in a beginner-friendly way
- [ ] Improve accessibility by reviewing keyboard focus, semantic labels, and clear button text across the expanded UI

## Advanced feature roadmap
### 1. Interactive learning flow
- Add a lesson index at the top of the page showing the full learning path
- Include breadcrumb-style or chapter markers so learners know where they are in the sequence
- Add small recap cards after each lesson explaining the key idea in plain language

### 2. Practice and challenge sections
- Add mini challenges such as "change the text", "count these items", "filter a list", and "show a message when the form is empty"
- Provide immediate feedback messages instead of only raw output
- Add a few guided problems that start easy and increase in complexity gradually

### 3. Intermediate JavaScript topics
- Teach reusable functions and parameter passing
- Show how `forEach`, `for` loops, and arrays work together
- Demonstrate object literal data and reading properties from data objects
- Add examples where JavaScript updates multiple matching elements at once

### 4. More realistic DOM interactions
- Allow users to add or remove items from a list with buttons
- Show how to respond to form submissions and validation states
- Demonstrate how to update multiple elements from one user action
- Use event delegation patterns in a beginner-safe way

### 5. UI polish and learning support
- Add a dark mode or color theme toggle to teach CSS custom properties and state changes
- Include subtle transitions to make the page feel more responsive without overwhelming the learner
- Add a "reset all" control for practice panels and demonstration blocks
- Improve the visual hierarchy to make complex explanations easier to scan

### 6. Accessibility and usability improvements
- Verify contrast and focus styles across all controls
- Keep all interactive elements clearly labeled and fully keyboard accessible
- Ensure mobile layouts stay readable and easy to follow
- Review heading structure and reading order as the page grows

## Planned next milestone
The next milestone should be to turn the existing core lessons into a richer learning experience with guided practice, checkpoints, and a few intermediate JavaScript examples. The implementation should stay intentionally beginner-friendly and avoid advanced tooling or libraries, while making the tutorial feel more like a complete interactive learning app.

## Guiding principles
- Prefer clear teaching examples over clever, reusable abstractions.
- Keep JavaScript straightforward and use educational comments where helpful.
- Keep the code and styling limited to HTML, CSS, and vanilla JavaScript.
- Do not begin implementation until the development plan is approved.
- Items under "Later ideas" are not scheduled. Get approval before starting them.
