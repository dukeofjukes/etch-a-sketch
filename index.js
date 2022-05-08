const gridContainer = document.querySelector("#main-container");
const resetBtn = document.querySelector("#reset-btn");
const newGridBtn = document.querySelector("#new-grid-btn");

let numRows = 64;
let gridSize = numRows * numRows;
let grid = initGrid();

resetBtn.addEventListener("click", (e) => {
  resetGrid();
});

newGridBtn.addEventListener("click", (e) => {
  resizeGrid();
});

function initGrid() {
  let grid = Array();

  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  gridContainer.style.gridTemplateColumns = `repeat(${numRows}, 0fr)`;

  for (let i = 0; i < gridSize; i++) {
    const newGridDiv = document.createElement("div");
    newGridDiv.className = "grid-cell";
    newGridDiv.id = `grid-${i}`;
    newGridDiv.style.width = `${960 / numRows}px`;
    newGridDiv.style.height = `${960 / numRows}px`;
    gridContainer.appendChild(newGridDiv);
    grid.push(newGridDiv);
  }

  grid.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      cell.classList.add("colored");
    });
  });

  return grid;
}

function resetGrid() {
  grid.forEach((cell) => {
    cell.classList.remove("colored");
  });
}

function resizeGrid() {
  let numRowsStr = prompt("Enter a grid width (1-100):", "64");
  let prevNumRows = numRows;
  numRows = parseInt(numRowsStr);
  if (numRows > 100 || numRows < 0) {
    numRows = prevNumRows;
  }
  gridSize = numRows * numRows;
  grid = initGrid();
}
