function generateGrid(rows, cols) {
    // Clear any existing grid -> used for resize calls
    grid.innerHTML = "";

    // repeat is used for reapeating values multiple times.
    // 1fr stands for 1 fractional unit.
    // It divides the available space (height or width) evenly among all rows or columns.
    // In our case the parent container has a height of 650px and there are 16 rows, each row will automatically be 650px / 16 = 40.625px tall.
    // Clearly very useful for grid displays.
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    // Calculate total number of squares
    let totalSquares = rows * cols;

    // Fill out the container with evenly sized squares.
    for (let i = 0; i < totalSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("grid-square");
        // Make the square focusable -> will allow us to change background color permanently on click.
        square.setAttribute("tabindex", "0");
        grid.appendChild(square);
    }
}

let grid = document.getElementById("screen"); // Select screen
let isDrawing = false;
let brushMode = true; // Default to brush mode (true = paint, false = erase)

let brushEraserToggle = document.getElementById("brush-eraser");
let gridToggle = document.getElementById("grid-on-off");

// Update mode when the switch state changes.
// The input event fires when the value of an <input>,
// <select>, or <textarea> element has been changed as a direct result of a user action
// (such as typing in a textbox or checking a checkbox) => Developer mozilla def.
brushEraserToggle.addEventListener("input", (e) => {
    brushMode = !e.target.checked; // Brush mode = unchecked (not false), Eraser mode = checked (not true)
});

// Event listeners for clicking an drawing
// Remember that e.target = grid, which is main-container.
grid.addEventListener("click", (e) => {
    if (e.target.classList.contains("grid-square")) {
        e.target.style.backgroundColor = brushMode ? "black" : "white";
    }
});
grid.addEventListener("mousedown", () => (isDrawing = true));
grid.addEventListener("mouseup", () => (isDrawing = false));
grid.addEventListener("mousemove", (e) => {
    if (isDrawing && e.target.classList.contains("grid-square")) {
        //Keeps checking if the buttons is pressed and also hovering button.
        e.target.style.backgroundColor = brushMode ? "black" : "white"; // Change color while dragging -> True black / false white.
    }
});

// Toggle grid
gridToggle.addEventListener("input", (e) => {
    const gridSquares = document.querySelectorAll(".grid-square"); // select all grid squares
    if (e.target.checked) {
        // Grid off
        gridSquares.forEach((square) => {
            square.style.border = "none";
        });
    } else {
        // Grid on
        gridSquares.forEach((square) => {
            square.style.border = "1px solid grey";
        });
    }
});
// Generate a 16x16 grid
generateGrid(16, 16);
