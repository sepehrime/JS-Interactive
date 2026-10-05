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
