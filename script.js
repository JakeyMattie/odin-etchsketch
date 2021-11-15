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

function eraseCanvas() {
    const cells = document.querySelectorAll(".grid-item");
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.setProperty('background-color', 'white');
        });
    });
}

makeGrid(16);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "sketch") sketchCanvas();
        else if (button.id == "rainbow") rainbowCanvas();
        else if (button.id == "erase") eraseCanvas();
    });
});
