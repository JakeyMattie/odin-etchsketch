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

// function hexToRGB(h) {
//     let r = 0, g = 0, b = 0;
  
//     // 3 digits
//     if (h.length == 4) {
//       r = "0x" + h[1] + h[1];
//       g = "0x" + h[2] + h[2];
//       b = "0x" + h[3] + h[3];
  
//     // 6 digits
//     } else if (h.length == 7) {
//       r = "0x" + h[1] + h[2];
//       g = "0x" + h[3] + h[4];
//       b = "0x" + h[5] + h[6];
//     }
    
//     return "rgb("+ +r + "," + +g + "," + +b + ")";
// }

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

    let input = 0;
    do {
        input = prompt("Enter your grid size (1-100): ");

        if ((input<1) || (input>100)) alert("Please enter a number between 1 to 100.");
        else break;
    }while (input<1 || input>100);

    makeGrid(input);
}

makeGrid(16);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.textContent = button.textContent.toUpperCase();
    button.addEventListener('click', () => {
        if (button.id == "sketchBtn") sketchCanvas();
        else if (button.id == "rainbowBtn") rainbowCanvas();
        else if (button.id == "gradientBtn") gradientCanvas();
        else if (button.id == "eraseBtn") eraseCanvas();
        else if (button.id == "clearBtn") clearCanvas();
    });
});
