const gridContainer = document.querySelector("#main-container");
const resetBtn = document.querySelector("#reset-btn");

const numRows = 16;
const gridSize = numRows * numRows;

let grid = initGrid();

function initGrid() {
  let grid = Array();
  for (let i = 0; i < gridSize; i++) {
    const newGridDiv = document.createElement("div");
    newGridDiv.className = "grid";
    newGridDiv.id = `grid-${i}`;
    gridContainer.appendChild(newGridDiv);
    grid.push(newGridDiv);
  }

  grid.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      cell.classList.add("colored");
    });
  });
}
