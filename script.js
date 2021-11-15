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
            cell.classList.add("hovered");
        });
    });
}

function eraseCanvas() {
    const cells = document.querySelectorAll(".grid-item");
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.classList.remove("hovered");
        });
    });
}

makeGrid(16);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "sketch") sketchCanvas();
        else if (button.id == "erase") eraseCanvas();
    });
});
