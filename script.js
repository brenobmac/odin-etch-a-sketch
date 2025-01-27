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

let grid = document.getElementById("main-container"); // Select screen
let isDrawing = false;

// Event listeners for clicking an drawing
// Remember that e.target = grid, which is main-container.
grid.addEventListener("click", (e) => {
    if (e.target.classList.contains("grid-square")) {
        e.target.style.backgroundColor = "black"; // Change color
    }
});
grid.addEventListener("mousedown", () => (isDrawing = true));
grid.addEventListener("mouseup", () => (isDrawing = false));
grid.addEventListener("mousemove", (e) => {
    if (isDrawing && e.target.classList.contains("grid-square")) {
        //Keeps checking if the buttons is pressed and also hovering button.
        e.target.style.backgroundColor = "black"; // Change color while dragging
    }
});

// Generate a 16x16 grid
generateGrid(16, 16);
