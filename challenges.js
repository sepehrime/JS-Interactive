/*
  challenges.js: the practice tool
  =================================
  You don't need to understand this file yet. The lessons are in script.js.

  This file powers the "Challenge" boxes on the page. It:
    1. runs the code you type in a challenge editor,
    2. checks whether the practice area changed the way the task asked,
    3. explains errors in plain words.

  To do that it uses a few things the lessons haven't covered yet
  (objects, new Function(), try/catch), which is why it lives in its own file.
*/

// ---------------------------------------------------------------------------
// The rules for each challenge.
// The key (for example "select") matches data-challenge="select" in the HTML.
// Each check() looks at the practice area after the learner's code has run.
// ---------------------------------------------------------------------------

const challengeRules = {
    select: {
        hint: "An ID selector starts with a # sign, followed by the ID itself: \"#chHeading\".",
        solution: `// Fill in the blank with a CSS selector for the ID "chHeading".
const heading = document.querySelector("#chHeading");

// This line adds the outline, so you can see it worked.
heading.classList.add("is-selected");`,
        check: function (test) {
            const heading = test.find("#chHeading");
            if (heading.classList.contains("is-selected")) {
                return pass("You found the heading by its ID, and JavaScript outlined it.");
            }
            return fail("The heading doesn't have the outline yet. Make sure the selector is \"#chHeading\".");
        }
    },

    read: {
        hint: "The property that holds the words inside an element is called textContent (capital C).",
        solution: `const quote = document.querySelector("#chQuote");
const copy = document.querySelector("#chCopy");

// Read the words inside the quote and put them in the copy box.
copy.textContent = quote.textContent;`,
        check: function (test) {
            const quoteText = test.find("#chQuote").textContent.trim();
            const copyText = test.find("#chCopy").textContent.trim();
            if (copyText === quoteText) {
                return pass("JavaScript read the quote's textContent and copied it into the box.");
            }
            // Setting textContent to undefined leaves the box empty.
            if (copyText === "" || copyText === "undefined") {
                return fail("The copy box is empty, which usually means JavaScript didn't recognize the property name. It's spelled textContent, with a capital C.");
            }
            return fail("The copy box doesn't match the quote yet. Read the text with quote.textContent.");
        }
    },

    change: {
        hint: "Select the paragraph with \"#chMessage\", then set its textContent to the exact sentence, inside quote marks.",
        solution: `// 1. Select the paragraph with the ID chMessage.
const message = document.querySelector("#chMessage");

// 2. Change its text to: I changed the page!
message.textContent = "I changed the page!";`,
        check: function (test) {
            const target = "I changed the page!";
            const text = test.find("#chMessage").textContent.trim();
            if (text === target) {
                return pass("The paragraph now says \"" + target + "\". You changed the page with JavaScript.");
            }
            if (text.toLowerCase() === target.toLowerCase()) {
                return fail("Very close! Check the capital letters. It should be exactly \"" + target + "\".");
            }
            return fail("The paragraph says \"" + text + "\". It should say exactly \"" + target + "\", including the exclamation mark.");
        }
    },

    style: {
        hint: "classList has a method called add. It takes the class name in quotes: classList.add(\"highlight\").",
        solution: `const box = document.querySelector("#chBox");

// Add the CSS class "highlight" to the box.
// Hint: classList has a method that adds a class.
box.classList.add("highlight");`,
        check: function (test) {
            const box = test.find("#chBox");
            if (box.classList.contains("highlight")) {
                return pass("The box has the highlight class now, so the CSS rule for .highlight styles it.");
            }
            if (box.getAttribute("style")) {
                return fail("You changed the style directly. This time, add the class \"highlight\" so that CSS does the styling.");
            }
            return fail("The box doesn't have the highlight class yet. Use classList.add(\"highlight\").");
        }
    },

    events: {
        hint: "The name of the event that happens when a button is clicked is \"click\".",
        solution: `const button = document.querySelector("#chClickButton");
const output = document.querySelector("#chClickOutput");

// When the button is clicked, show the text: Clicked!
button.addEventListener("click", function () {
    output.textContent = "Clicked!";
});`,
        check: function (test) {
            const output = test.find("#chClickOutput");
            if (output.textContent.trim() === "Clicked!") {
                return fail("The text changed before anyone clicked. Keep the textContent line inside the function, so it only runs when the button is clicked.");
            }
            test.click("#chClickButton");
            if (output.textContent.trim() === "Clicked!") {
                return pass("We clicked the button for you, and the message changed. Try clicking it yourself too.");
            }
            return fail("We clicked the button, but nothing changed. Check the event name. A click event is called \"click\".");
        }
    },

    input: {
        hint: "An empty input has the value \"\" (two quote marks with nothing between them). To use what was typed, read nameInput.value.",
        solution: `const nameInput = document.querySelector("#chName");
const greetButton = document.querySelector("#chGreet");
const greeting = document.querySelector("#chGreeting");

greetButton.addEventListener("click", function () {
    // If the input is empty, ask for a name.
    // Otherwise, say: Hi, NAME!
    if (nameInput.value === "") {
        greeting.textContent = "Please type a name.";
    } else {
        greeting.textContent = "Hi, " + nameInput.value + "!";
    }
});`,
        check: function (test) {
            const nameInput = test.find("#chName");
            const greeting = test.find("#chGreeting");

            // Test 1: an empty field.
            nameInput.value = "";
            test.click("#chGreet");
            const emptyResult = greeting.textContent.trim();

            // Test 2: a name.
            nameInput.value = "Ada";
            test.click("#chGreet");
            const nameResult = greeting.textContent.trim();

            if (emptyResult !== "Please type a name.") {
                return fail("With an empty field, the greeting said \"" + emptyResult + "\". The if condition should check for an empty value: \"\".");
            }
            if (nameResult !== "Hi, Ada!") {
                return fail("With the name \"Ada\", the greeting said \"" + nameResult + "\" instead of \"Hi, Ada!\". Use nameInput.value to read what was typed.");
            }
            return pass("We tested both cases, an empty field and the name \"Ada\". Your if / else handled both. Try typing your own name and clicking Greet.");
        }
    },

    multiple: {
        hint: "querySelector finds only the first match. querySelectorAll finds all of them, and .length tells you how many there are.",
        solution: `// Find every element with the class "ch-item".
const items = document.querySelectorAll(".ch-item");
const countOutput = document.querySelector("#chCount");

countOutput.textContent = "There are " + items.length + " items.";`,
        check: function (test) {
            const text = test.find("#chCount").textContent.trim();
            if (text === "There are 4 items.") {
                return pass("querySelectorAll found all 4 list items, and .length counted them.");
            }
            if (text.indexOf("undefined") !== -1) {
                return fail("The count says \"undefined\". That happens when you use querySelector, which finds only one element. Use querySelectorAll, then .length.");
            }
            return fail("The output says \"" + text + "\". It should say \"There are 4 items.\"");
        }
    },

    console: {
        hint: "Like other inputs, logInput has a value property that holds its text.",
        solution: `const logInput = document.querySelector("#chLogInput");

// Print the text inside the input to the console.
console.log(logInput.value);`,
        check: function (test) {
            const value = test.find("#chLogInput").value;
            if (test.logs.length === 0) {
                return fail("Nothing was logged. Keep the console.log(...) line in your code.");
            }
            if (test.logs.indexOf(value) !== -1) {
                return pass("You logged \"" + value + "\". It's in the console below, and in your browser's Developer Tools > Console too.");
            }
            for (let i = 0; i < test.logs.length; i = i + 1) {
                if (test.logs[i].indexOf("<input") === 0) {
                    return fail("You logged the whole input element. Add .value to log just the text inside it.");
                }
            }
            return fail("Your code logged something, but not the input's text. Log logInput.value.");
        }
    },

    functions: {
        hint: "Inside the function, the parameter timeOfDay holds the value that was passed in. The Evening button should call the function by name: greet(\"evening\").",
        solution: `const output = document.querySelector("#chGreetOut");
const morningButton = document.querySelector("#chMorning");
const eveningButton = document.querySelector("#chEvening");

// 1. Finish the function: it should show "Good " + timeOfDay + "!"
function greet(timeOfDay) {
    output.textContent = "Good " + timeOfDay + "!";
}

// 2. Call the function with the right word for each button.
morningButton.addEventListener("click", function () {
    greet("morning");
});

eveningButton.addEventListener("click", function () {
    greet("evening");
});`,
        check: function (test) {
            const output = test.find("#chGreetOut");

            test.click("#chMorning");
            const morning = output.textContent.trim();

            test.click("#chEvening");
            const evening = output.textContent.trim();

            if (morning !== "Good morning!") {
                return fail("The Morning button showed \"" + morning + "\" instead of \"Good morning!\". Inside the function, use the parameter timeOfDay to build the message.");
            }
            if (evening !== "Good evening!") {
                return fail("The Evening button showed \"" + evening + "\" instead of \"Good evening!\". Its click function should call greet(\"evening\").");
            }
            return pass("Both buttons call the same function with a different value. That's what parameters are for.");
        }
    },

    loops: {
        hint: "i is the position number. It's 0 the first time around the loop, then 1, 2, and 3. Use it inside the square brackets: planets[i].",
        solution: `const planets = ["Mercury", "Venus", "Earth", "Mars"];
const output = document.querySelector("#chLoopOut");

output.textContent = "";

// Loop over every planet and add its name to the output.
// The loop condition is already written for you.
for (let i = 0; i < planets.length; i = i + 1) {
    output.textContent = output.textContent + planets[i] + " ";
}`,
        check: function (test) {
            const text = test.find("#chLoopOut").textContent.trim();
            if (text === "Mercury Venus Earth Mars") {
                return pass("The loop ran 4 times, once for each planet, and added each name in order.");
            }
            if (text.indexOf("undefined") !== -1) {
                return fail("The output contains \"undefined\", which means the loop read a position that doesn't exist. Use the counter: planets[i].");
            }
            return fail("The output says \"" + text + "\". Use planets[i], so each time around the loop adds the next planet.");
        }
    },

    create: {
        hint: "createElement takes the tag name without angle brackets: \"li\". To add something to the end of the list, use appendChild. To take something off the page, use remove().",
        solution: `const list = document.querySelector("#chShopping");

// 1. Create a new <li> element.
const newItem = document.createElement("li");

// 2. Give it the text: Milk
newItem.textContent = "Milk";

// 3. Add it to the end of the list.
list.appendChild(newItem);

// 4. Remove the item with the ID chRemoveMe.
const oldItem = document.querySelector("#chRemoveMe");
oldItem.remove();`,
        check: function (test) {
            const list = test.find("#chShopping");
            const items = list.children;
            let milkItem = null;

            for (let i = 0; i < items.length; i = i + 1) {
                if (items[i].textContent.trim() === "Milk") {
                    milkItem = items[i];
                }
            }

            if (milkItem === null) {
                return fail("Milk isn't in the list yet. After creating the item, add it with list.appendChild(newItem).");
            }
            if (milkItem.tagName !== "LI") {
                return fail("You created a <" + milkItem.tagName.toLowerCase() + "> element. A list item is created with createElement(\"li\").");
            }
            if (test.find("#chRemoveMe") !== null) {
                return fail("\"Old socks\" is still in the list. Call .remove() on oldItem to take it off the page.");
            }
            return pass("You created a new <li>, added it to the list, and removed an old one. The list now shows Bread and Milk.");
        }
    }
};

function pass(message) {
    return { passed: true, message: message };
}

function fail(message) {
    return { passed: false, message: message };
}

// ---------------------------------------------------------------------------
// Progress counter ("3 / 11 solved")
// ---------------------------------------------------------------------------

const allChallenges = document.querySelectorAll(".challenge");
const solvedChallenges = [];
const challengeProgress = document.querySelector("#challengeProgress");
const closingProgress = document.querySelector("#closingProgress");

function updateProgress() {
    const solved = solvedChallenges.length;
    const total = allChallenges.length;

    if (challengeProgress) {
        challengeProgress.textContent = solved + " / " + total + " solved";
    }
    if (closingProgress) {
        if (solved === total) {
            closingProgress.textContent = "You solved all " + total + " code challenges. Well done!";
        } else {
            closingProgress.textContent = "You've solved " + solved + " of " + total + " code challenges. Lessons with a green dot at the top are done. Try the others!";
        }
    }
}

// ---------------------------------------------------------------------------
// Set up every challenge box on the page.
// ---------------------------------------------------------------------------

for (let i = 0; i < allChallenges.length; i = i + 1) {
    setUpChallenge(allChallenges[i]);
}
updateProgress();

function setUpChallenge(challenge) {
    const name = challenge.dataset.challenge;
    const rules = challengeRules[name];
    const editor = challenge.querySelector(".code-editor");
    const stage = challenge.querySelector(".challenge-stage");
    const feedback = challenge.querySelector(".challenge-feedback");
    const consoleLines = challenge.querySelector(".challenge-console-lines");
    const status = challenge.querySelector(".challenge-status");

    // Remember the starting HTML, so every run (and Reset) starts fresh.
    const startingStage = stage.innerHTML;
    const startingFeedback = feedback.textContent.trim();
    let escapePressed = false;

    function showFeedback(type, message, detail) {
        feedback.className = "challenge-feedback is-" + type;
        feedback.textContent = message;
        if (detail) {
            const detailLine = document.createElement("span");
            detailLine.className = "raw-error";
            detailLine.textContent = "Browser message: " + detail;
            feedback.appendChild(detailLine);
        }
    }

    function clearConsole() {
        consoleLines.textContent = "";
        const empty = document.createElement("p");
        empty.className = "console-empty";
        empty.textContent = "console.log() output will appear here.";
        consoleLines.appendChild(empty);
    }

    function addConsoleLine(text, kind) {
        const empty = consoleLines.querySelector(".console-empty");
        if (empty) {
            empty.remove();
        }
        const line = document.createElement("p");
        line.className = "console-line is-" + kind;
        line.textContent = "> " + text;
        consoleLines.appendChild(line);
    }

    function reportError(error) {
        const name = error && error.name ? error.name : "Error";
        const message = error && error.message ? error.message : String(error);
        showFeedback("error", explainError(error), name + ": " + message);
    }

    function markSolved() {
        challenge.classList.add("is-solved");
        status.textContent = "Solved ✓";

        // Mark this lesson in the top navigation and the home page outline.
        const page = challenge.closest(".page");
        if (page) {
            const links = document.querySelectorAll('.lesson-nav a[href="#' + page.id + '"], .course-outline a[href="#' + page.id + '"]');
            for (let i = 0; i < links.length; i = i + 1) {
                links[i].classList.add("is-solved");
            }
        }

        if (solvedChallenges.indexOf(name) === -1) {
            solvedChallenges.push(name);
            updateProgress();
        }
    }

    function run() {
        stage.innerHTML = startingStage;
        clearConsole();

        const code = editor.value;
        const blanks = code.split("___").length - 1;
        if (blanks > 0) {
            const left = blanks === 1 ? "There is 1 blank left." : "There are " + blanks + " blanks left.";
            showFeedback("fail", "Fill in every ___ blank first. " + left);
            return;
        }

        const logs = [];
        const challengeConsole = makeConsole(logs, addConsoleLine);

        // Errors inside event listeners are collected while we check the
        // result. After that (when the learner clicks things), they are shown.
        let checking = true;
        const listenerErrors = [];
        function onListenerError(error) {
            if (checking) {
                listenerErrors.push(error);
            } else {
                reportError(error);
            }
        }

        let learnerCode;
        try {
            learnerCode = new Function("console", code);
        } catch (error) {
            reportError(error);
            return;
        }

        try {
            runWithSafeListeners(learnerCode, challengeConsole, onListenerError);
        } catch (error) {
            checking = false;
            reportError(error);
            return;
        }

        let result;
        try {
            result = rules.check({
                stage: stage,
                logs: logs,
                find: function (selector) {
                    return stage.querySelector(selector);
                },
                click: function (selector) {
                    stage.querySelector(selector).click();
                }
            });
        } catch (error) {
            result = fail("We couldn't check the practice area. Did your code remove or rename one of its elements? Click Reset to start over.");
        }
        checking = false;

        if (listenerErrors.length > 0) {
            reportError(listenerErrors[0]);
            return;
        }

        if (result.passed) {
            showFeedback("pass", "✅ Correct! " + result.message);
            markSolved();
        } else {
            showFeedback("fail", "Not quite yet. " + result.message);
        }
    }

    function reset() {
        editor.value = editor.defaultValue;
        stage.innerHTML = startingStage;
        clearConsole();
        feedback.className = "challenge-feedback";
        feedback.textContent = startingFeedback;
    }

    challenge.querySelector('[data-action="run"]').addEventListener("click", run);
    challenge.querySelector('[data-action="reset"]').addEventListener("click", reset);

    challenge.querySelector('[data-action="hint"]').addEventListener("click", function () {
        showFeedback("hint", "Hint: " + rules.hint);
    });

    challenge.querySelector('[data-action="solution"]').addEventListener("click", function () {
        editor.value = rules.solution;
        showFeedback("hint", "The solution is in the editor now. Read it line by line, then click Run code.");
    });

    // Editor keys: Tab adds spaces, Esc then Tab leaves, Ctrl/Cmd + Enter runs.
    editor.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
            event.preventDefault();
            run();
            return;
        }
        if (event.key === "Escape") {
            escapePressed = true;
            return;
        }
        if (event.key === "Tab" && !event.shiftKey && !escapePressed) {
            event.preventDefault();
            insertSpaces(editor, "    ");
            return;
        }
        if (event.key !== "Shift" && event.key !== "Tab") {
            escapePressed = false;
        }
    });

    editor.addEventListener("blur", function () {
        escapePressed = false;
    });
}

// ---------------------------------------------------------------------------
// Running the learner's code
// ---------------------------------------------------------------------------

const originalAddEventListener = EventTarget.prototype.addEventListener;

// While the learner's code runs, every listener it adds is wrapped in
// try/catch. That way a mistake inside a click handler is explained on the
// page instead of only appearing in Developer Tools.
function runWithSafeListeners(learnerCode, challengeConsole, onListenerError) {
    EventTarget.prototype.addEventListener = function (type, listener, options) {
        if (typeof listener !== "function") {
            return originalAddEventListener.call(this, type, listener, options);
        }
        const safeListener = function (event) {
            try {
                return listener.call(this, event);
            } catch (error) {
                onListenerError(error);
            }
        };
        return originalAddEventListener.call(this, type, safeListener, options);
    };

    try {
        learnerCode(challengeConsole);
    } finally {
        EventTarget.prototype.addEventListener = originalAddEventListener;
    }
}

// A console that writes to the challenge's console panel, and also to the
// real browser console.
function makeConsole(logs, addConsoleLine) {
    function writer(kind) {
        return function () {
            const parts = [];
            for (let i = 0; i < arguments.length; i = i + 1) {
                parts.push(formatValue(arguments[i]));
            }
            const text = parts.join(" ");
            logs.push(text);
            addConsoleLine(text, kind);
            console[kind].apply(console, arguments);
        };
    }
    return {
        log: writer("log"),
        info: writer("info"),
        warn: writer("warn"),
        error: writer("error")
    };
}

// Turn any value into readable text for the console panel.
function formatValue(value) {
    if (typeof value === "string") {
        return value;
    }
    if (value === null || value === undefined) {
        return String(value);
    }
    if (value instanceof Element) {
        let text = "<" + value.tagName.toLowerCase();
        if (value.id) {
            text = text + " id=\"" + value.id + "\"";
        }
        if (value.className) {
            text = text + " class=\"" + value.className + "\"";
        }
        return text + ">";
    }
    if (value instanceof NodeList || value instanceof HTMLCollection) {
        return "NodeList(" + value.length + ")";
    }
    if (Array.isArray(value)) {
        const items = [];
        for (let i = 0; i < value.length; i = i + 1) {
            items.push(typeof value[i] === "string" ? "\"" + value[i] + "\"" : formatValue(value[i]));
        }
        return "[" + items.join(", ") + "]";
    }
    if (typeof value === "function") {
        return "function " + (value.name || "") + "()";
    }
    if (typeof value === "object") {
        try {
            return JSON.stringify(value);
        } catch (error) {
            return String(value);
        }
    }
    return String(value);
}

// Insert spaces at the cursor. execCommand keeps Undo working; setRangeText is
// the fallback for browsers that don't support it.
function insertSpaces(editor, spaces) {
    let inserted = false;
    try {
        inserted = document.execCommand("insertText", false, spaces);
    } catch (error) {
        inserted = false;
    }
    if (!inserted) {
        editor.setRangeText(spaces, editor.selectionStart, editor.selectionEnd, "end");
    }
}

// ---------------------------------------------------------------------------
// Explaining errors in plain words
// Browsers word their errors differently, so each check looks for the
// Chrome, Firefox, and Safari versions.
// ---------------------------------------------------------------------------

function explainError(error) {
    const name = error && error.name ? error.name : "Error";
    const message = error && error.message ? String(error.message) : String(error);
    let match;

    if (name === "SyntaxError") {
        match = message.match(/Identifier '([^']+)' has already been declared/) ||
            message.match(/redeclaration of (?:const|let) (\S+)/) ||
            message.match(/duplicate variable: '([^']+)'/);
        if (match) {
            return "You created two variables called \"" + match[1] + "\". Each const needs its own name, so rename one or remove the extra line.";
        }
        if (/string literal|unterminated/i.test(message)) {
            return "A piece of text is missing a quote mark. Every opening \" needs a closing \" on the same line.";
        }
        return "JavaScript couldn't read your code because something is mistyped. Look for a missing ( ), { }, or quote mark, often near the end of a line.";
    }

    if (name === "ReferenceError") {
        match = message.match(/^(\S+) is not defined/) || message.match(/Can't find variable: (\S+)/);
        if (match) {
            return "JavaScript doesn't know anything called \"" + match[1] + "\". Check the spelling and capital letters. To JavaScript, \"Title\" and \"title\" are different names.";
        }
        if (/before initialization|uninitialized|before (?:it is )?defined/i.test(message)) {
            return "You used a variable before the line that creates it. Move the const line higher up.";
        }
    }

    if (name === "TypeError") {
        if (/constant|to const|read-only/i.test(message)) {
            return "You tried to give a const variable a new value, but a const can't be changed after it's created.";
        }
        match = message.match(/(\S+) is not a function/);
        if (match) {
            return "\"" + match[1] + "\" isn't a function JavaScript knows. Check the spelling and capitals of the method name, for example querySelector, addEventListener, or classList.add.";
        }
        if (/\bnull\b/.test(message)) {
            return "JavaScript tried to use an element it couldn't find. querySelector gives back null when nothing matches. Check that your selector starts with # for an ID and that the ID is spelled exactly right.";
        }
        if (/\bundefined\b/.test(message)) {
            return "Your code used something that is undefined. A property name is probably misspelled, for example \"classlist\" instead of \"classList\" or \"textcontent\" instead of \"textContent\".";
        }
    }

    return "Something went wrong while your code was running. The browser's message below may give you a clue.";
}
