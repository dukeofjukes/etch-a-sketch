const gridContainer = document.querySelector("#main-container");
const resetBtn = document.querySelector("#reset-btn");
const newGridBtn = document.querySelector("#new-grid-btn");
const slider = document.querySelector("#grid-size");

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
    newGridDiv.style.width = `${400 / numRows}px`;
    newGridDiv.style.height = `${400 / numRows}px`;
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
  numRows = slider.value;
  gridSize = numRows * numRows;
  grid = initGrid();
}
