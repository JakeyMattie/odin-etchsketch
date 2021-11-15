const container = document.getElementById("container");

function makeGrid(rowCol) {
  container.style.setProperty('--grid-rows', rowCol);
  container.style.setProperty('--grid-cols', rowCol);
  for (c = 0; c < (rowCol * rowCol); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeGrid(16);