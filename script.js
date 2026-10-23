// Find the heading by its ID and the button with a CSS selector.
const selectTitle = document.getElementById("selectTitle");
const findButton = document.querySelector("#findButton");
const resetSelectionButton = document.querySelector("#resetSelectionButton");
const selectOutput = document.querySelector("#selectOutput");

findButton.addEventListener("click", function () {
    selectTitle.classList.add("is-selected");
    selectOutput.textContent = "Selected heading: “" + selectTitle.textContent + "”";
});

resetSelectionButton.addEventListener("click", function () {
    selectTitle.classList.remove("is-selected");
    selectOutput.textContent = "Selection cleared. Click “Select the title” to try it again.";
});

// Read a paragraph's text and display it on the page.
const readSample = document.querySelector("#readSample");
const readButton = document.querySelector("#readButton");
const readOutput = document.querySelector("#readOutput");

readButton.addEventListener("click", function () {
    readOutput.textContent = readSample.textContent;
});

// Change a paragraph's text when its button is clicked.
const changeButton = document.querySelector("#changeButton");
const changeMessage = document.querySelector("#changeMessage");

changeButton.addEventListener("click", function () {
    changeMessage.textContent = "It worked! JavaScript changed this text.";
});

// Read the value property to show what the visitor typed.
const nameInput = document.querySelector("#nameInput");
const greetButton = document.querySelector("#greetButton");
const greeting = document.querySelector("#greeting");

greetButton.addEventListener("click", function () {
    if (nameInput.value === "") {
        greeting.textContent = "Please enter your name.";
    } else {
        greeting.textContent = "Hello, " + nameInput.value + "!";
    }
});

// Show a visible result for each basic event.
const eventButton = document.querySelector("#eventButton");
const eventInput = document.querySelector("#eventInput");
const hoverTarget = document.querySelector("#hoverTarget");
const eventOutput = document.querySelector("#eventOutput");
const resetEventButton = document.querySelector("#resetEventButton");

eventButton.addEventListener("click", function () {
    eventOutput.textContent = "Click event: the button was clicked.";
});

eventInput.addEventListener("input", function () {
    eventOutput.textContent = "Input event: you typed \"" + eventInput.value + "\".";
});

hoverTarget.addEventListener("mouseover", function () {
    eventOutput.textContent = "Mouseover event: the pointer entered the box.";
});

resetEventButton.addEventListener("click", function () {
    eventInput.value = "";
    eventOutput.textContent = "Demo reset. Click, hover, or type to see an event.";
});

// Show the difference between a direct style change and a CSS class.
const colorBox = document.querySelector("#colorBox");
const colorButton = document.querySelector("#colorButton");
const highlightButton = document.querySelector("#highlightButton");
const resetStyleButton = document.querySelector("#resetStyleButton");
const styleOutput = document.querySelector("#styleOutput");

colorButton.addEventListener("click", function () {
    colorBox.style.backgroundColor = "lightblue";
    styleOutput.textContent = "The box background is now light blue, set directly with JavaScript.";
});

highlightButton.addEventListener("click", function () {
    const isHighlighted = colorBox.classList.toggle("highlight");
    if (isHighlighted) {
        styleOutput.textContent = "The purple outline was added by toggling the highlight CSS class.";
    } else {
        styleOutput.textContent = "The purple outline was removed by toggling the highlight CSS class.";
    }
});

resetStyleButton.addEventListener("click", function () {
    colorBox.style.backgroundColor = "";
    colorBox.classList.remove("highlight");
    styleOutput.textContent = "Demo reset. Choose an action and watch the box change.";
});

// Select the buttons that share a class and show how many were found.
const topicButtons = document.querySelectorAll(".topic-button");
const countButton = document.querySelector("#countButton");
const countOutput = document.querySelector("#countOutput");

countButton.addEventListener("click", function () {
    countOutput.textContent = "Found " + topicButtons.length + " matching buttons: HTML, CSS, and JavaScript.";
});

// Log a message in the browser console and show that it was sent.
const consoleButton = document.querySelector("#consoleButton");
const consoleDemoMessage = document.querySelector("#consoleDemoMessage");
const consoleOutput = document.querySelector("#consoleOutput");

consoleButton.addEventListener("click", function () {
    const message = "The console demo button was clicked";
    console.log(message);
    consoleDemoMessage.textContent = message;
    consoleOutput.textContent = "Message sent. Open Developer Tools > Console to see the console.log() output.";
});

// Lesson 12: Functions
// A function is a named block of code. It only runs when you call it.
const functionOutput = document.querySelector("#functionOutput");
const adaButton = document.querySelector("#adaButton");
const graceButton = document.querySelector("#graceButton");
const resetFunctionButton = document.querySelector("#resetFunctionButton");

// "name" is a parameter: a placeholder for the value passed in each time.
function sayHello(name) {
    functionOutput.textContent = "Hello, " + name + "!";
}

// This function has no parameters. It always does the same thing.
function resetGreeting() {
    functionOutput.textContent = "Click a button to call the function.";
}

adaButton.addEventListener("click", function () {
    sayHello("Ada");
});

graceButton.addEventListener("click", function () {
    sayHello("Grace");
});

resetFunctionButton.addEventListener("click", function () {
    resetGreeting();
});

// Lesson 13: Arrays and loops
// An array holds a list of values. Positions (indexes) start at 0.
const topics = ["HTML", "CSS", "JavaScript"];
const loopCards = document.querySelectorAll(".loop-card");
const loopOutput = document.querySelector("#loopOutput");
const firstItemButton = document.querySelector("#firstItemButton");
const loopArrayButton = document.querySelector("#loopArrayButton");
const loopCardsButton = document.querySelector("#loopCardsButton");
const resetLoopButton = document.querySelector("#resetLoopButton");

firstItemButton.addEventListener("click", function () {
    loopOutput.textContent = "topics[0] is \"" + topics[0] + "\". The array has " + topics.length + " items.";
});

loopArrayButton.addEventListener("click", function () {
    loopOutput.textContent = "";

    // Start i at 0, keep going while i is less than 3, add 1 each time.
    for (let i = 0; i < topics.length; i = i + 1) {
        loopOutput.textContent = loopOutput.textContent + "[" + i + "] " + topics[i] + "  ";
    }
});

loopCardsButton.addEventListener("click", function () {
    // querySelectorAll gives a list of elements, so a loop can visit each one.
    for (let i = 0; i < loopCards.length; i = i + 1) {
        loopCards[i].classList.add("is-highlighted");
    }
    loopOutput.textContent = "The loop added a class to " + loopCards.length + " cards.";
});

resetLoopButton.addEventListener("click", function () {
    for (let i = 0; i < loopCards.length; i = i + 1) {
        loopCards[i].classList.remove("is-highlighted");
    }
    loopOutput.textContent = "Pick a button to run some code.";
});

// Lesson 14: Create and remove elements
const todoInput = document.querySelector("#todoInput");
const addTodoButton = document.querySelector("#addTodoButton");
const todoList = document.querySelector("#todoList");
const todoOutput = document.querySelector("#todoOutput");

addTodoButton.addEventListener("click", function () {
    if (todoInput.value === "") {
        todoOutput.textContent = "Type something first.";
    } else {
        const itemText = todoInput.value;

        // 1. Create a brand-new <li>. It is not on the page yet.
        const newItem = document.createElement("li");

        // 2. Give it some text.
        newItem.textContent = itemText;

        // 3. Create a Remove button for this item.
        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "todo-remove";
        removeButton.textContent = "Remove";
        removeButton.setAttribute("aria-label", "Remove " + itemText);

        // 4. When the Remove button is clicked, take the item off the page.
        removeButton.addEventListener("click", function () {
            newItem.remove();
            todoOutput.textContent = "Removed \"" + itemText + "\".";
        });

        // 5. Put the button inside the item, and the item inside the list.
        newItem.appendChild(removeButton);
        todoList.appendChild(newItem);

        todoOutput.textContent = "Added \"" + itemText + "\" to the list.";
        todoInput.value = "";
    }
});
