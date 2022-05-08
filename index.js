const gridContainer = document.querySelector("#main-container");
const resetBtn = document.querySelector("#reset-btn");
const numRows = 64;
const gridSize = numRows * numRows;

let grid = initGrid();

resetBtn.addEventListener("click", (e) => {
  resetGrid();
});

function initGrid() {
  let grid = Array();

  for (let i = 0; i < gridSize; i++) {
    const newGridDiv = document.createElement("div");
    newGridDiv.className = "grid-cell";
    newGridDiv.id = `grid-${i}`;
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
