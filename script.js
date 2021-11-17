const container = document.querySelector("#grid-container");

function makeGrid(rowCol) {
  container.style.setProperty('--grid-rows', rowCol);
  container.style.setProperty('--grid-cols', rowCol);
  for (c = 0; c < (rowCol * rowCol); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

function sketchCanvas() {
    const cells = document.querySelectorAll(".grid-item");
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.setProperty('background-color', 'black');
        });
    });
}

function generateColor() {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function rainbowCanvas() {
    const cells = document.querySelectorAll(".grid-item");
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.setProperty('background-color', generateColor());
        });
    });
}

function gradientCanvas() {
    let gradientVal = 0.05;
    let randomColor = generateColor();

    const cells = document.querySelectorAll(".grid-item");
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.setProperty('background-color', randomColor);
            cell.style.setProperty('opacity', gradientVal);
            gradientVal += 0.05;
        });
    });
}

function eraseCanvas() {
    const cells = document.querySelectorAll(".grid-item");
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.setProperty('background-color', 'white');
        });
    });
}

function clearCanvas() { //Sets the canvas to white first before resets with a new grid size
    const cells = document.querySelectorAll(".grid-item");
    cells.forEach((cell) => {
        cell.style.setProperty('background-color', 'white');
    });

    let input = prompt("Enter your grid size: ");
    makeGrid(input);
}

makeGrid(16);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "sketchBtn") sketchCanvas();
        else if (button.id == "rainbowBtn") rainbowCanvas();
        else if (button.id == "gradientBtn") gradientCanvas();
        else if (button.id == "eraseBtn") eraseCanvas();
        else if (button.id == "clearBtn") clearCanvas();
    });
});
