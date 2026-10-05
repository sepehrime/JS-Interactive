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
    greeting.textContent = "You typed: " + nameInput.value;
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
