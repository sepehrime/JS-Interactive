# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page educational website that teaches beginners how HTML (structure), CSS (appearance), and JavaScript (behavior) work together. The goal is **learning, not production quality**: prefer simple, explicit, even repetitive code over clever or reusable code.

- `Agent.md`: the full project rules (tech constraints, teaching order, allowed and forbidden JS concepts, challenge rules, CSS/HTML guidelines). Read it before making changes. It is the source of truth.
- `plan.md`: the phased development checklist. Phases 1–7 are done. The "Later ideas" section is not scheduled, so don't start any of it without user approval. Update the checkboxes when completing work.

## Running

No build, package manager, test suite, or linter. Open `index.html` directly in a browser (`open index.html`). To verify, click through the lesson demos and the challenges (blanks left in, the correct solution, a wrong answer, Reset) and watch for console errors.

## Files

- `index.html`: all content.
- `style.css`: all styling. Breakpoints are at 850px and 650px.
- `script.js`: lesson demo code. This is what learners read, so it must stay beginner-level.
- `challenges.js`: tooling that runs and checks the code learners type into challenges. It may use objects, `new Function()`, and `try/catch`. Keep lesson code out of it, and keep it out of `script.js`.

No other website files. No frameworks, libraries, TypeScript, npm, or bundlers.

## Hard constraints (from Agent.md)

- Lesson JavaScript (`script.js`) stays beginner-level: `getElementById`/`querySelector`/`querySelectorAll`, `textContent`, `value`, `style`, `classList`, `addEventListener` (click/input/mouseover), `if/else`, `console.log`, simple functions with parameters, arrays with `for` loops written as `i = i + 1`, and `createElement`/`appendChild`/`remove`. Avoid array methods (`map`/`filter`/`reduce`/`forEach`), classes, modules, async/promises/fetch, localStorage, JSON, and utility abstractions unless the user explicitly asks.
- CSS stays basic (selectors, classes, IDs, spacing, borders, simple flexbox).
- Before introducing a new JS concept, ask whether the learner needs it yet, and point it out when you do. Preserve the teaching order in `Agent.md`.
- Comments are educational: they connect the code to what the learner sees on the page.

## Page structure

`index.html` is a sequence of numbered lessons (01–14). `.chapter-intro` sections separate HTML/CSS (01–02), core JavaScript (03–11), and "Next steps" (12–14). Each lesson is a `<section class="lesson-section ...">` containing:

- `.lesson-grid` → `.lesson-copy` (`.lesson-number` eyebrow, `<h2>`, explanation, `.code-card` with a hand-colored `<pre><code>` snippet) and `.demo-card` (`.demo-stage` with interactive elements, `.demo-caption`).
- For JS lessons, a `.challenge` block after the grid.

The code snippets on the page are hand-written HTML with `code-pink`/`code-blue`/`code-green`/`code-yellow`/`code-comment` spans. They must stay in sync with the matching block in `script.js`.

`script.js` is loaded with `defer` and is organized as one flat block per demo: select elements at the top of the block, then attach listeners. Most demos have a reset button. Lesson element IDs are shared between `index.html`, `script.js`, and the on-page snippet, so renaming one means updating all three.

## How challenges work

Each `.challenge` has `data-challenge="<key>"`, a `<textarea class="code-editor">` holding the starter code (with `___` blanks), a `.challenge-stage` practice area using `ch`-prefixed IDs, `.challenge-feedback`, and a `.challenge-console` panel. Buttons are found by `data-action="run|hint|solution|reset"`.

In `challenges.js`, `challengeRules[key]` supplies `hint`, `solution`, and `check(test)`, where `test` provides `find(selector)`, `click(selector)`, and `logs`. A check returns `pass(msg)` or `fail(msg)`. On each Run, the runner:

1. restores the stage's original HTML, so listeners from earlier runs don't stack,
2. refuses to run while `___` blanks remain,
3. runs the code with `new Function("console", code)` and a console that also writes to the on-page panel,
4. temporarily wraps `addEventListener` so that errors inside the learner's listeners are caught and explained, both during the check and on later manual clicks,
5. calls `check`.

`explainError()` maps Chrome, Firefox, and Safari error messages to plain-language advice. Reset restores the textarea's `defaultValue`, which is the starter code from the HTML. Progress ("X / 11 solved", plus `#closingProgress`) is kept in memory only.

To add a challenge, add the HTML block (copy an existing one) and a `challengeRules` entry, and update the "/ 11" initial text in the header. The total is computed from the number of `.challenge` elements at runtime. Textarea content must be flush-left and HTML-escaped (`&lt;`).
