// Function to create a grid of squares
function createGrid(size) {
    const container = document.getElementById('grid-container');
    container.innerHTML = ''; // Clearing the existing grid

    const squareSize = 960 / size; // Calculating the size of each square

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;

        // Hover effect to change color
        div.addEventListener('mouseover', function () {
            this.style.backgroundColor = getRandomColor();
        });

        // Append to the container (Parent)
        container.appendChild(div);
    }
}

// A Function to generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// A Function to handle button click
function resizeGrid() {
    let newSize;
    do {
        newSize = parseInt(prompt('Enter the number of squares per side (max 100):'), 10);
    } while (isNaN(newSize) || newSize <= 0 || newSize > 100);

    createGrid(newSize);
}

// Initialize with a default grid size
createGrid(16);

// Add event listener to the button
document.getElementById('resize-button').addEventListener('click', resizeGrid);
