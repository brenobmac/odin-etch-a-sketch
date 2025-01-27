function generateGrid(rows, cols) {
    let container = document.getElementById("main-container"); // select screen

    // Clear any existing grid -> used for resize calls
    container.innerHTML = "";

    // repeat is used for reapeating values multiple times.
    // 1fr stands for 1 fractional unit.
    // It divides the available space (height or width) evenly among all rows or columns.
    // In our case the parent container has a height of 650px and there are 16 rows, each row will automatically be 650px / 16 = 40.625px tall.
    // Clearly very useful for grid displays.
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    // Calculate total number of squares
    const totalSquares = rows * cols;

    // Fill out the container with evenly sized squares.
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        container.appendChild(square);
    }
}

// Generate a 16x16 grid
generateGrid(16, 16);
