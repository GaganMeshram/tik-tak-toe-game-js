let board = document.querySelector(".board");
let info = document.querySelector(".info");
let move = "circle";
let win = [];

window.onload = function makeBoard(e) {
  for (let index = 0; index < 9; index++) {
    const cell = document.createElement("div");
    // cell.textContent = index;
    cell.id = index.toString();
    cell.className = "cell";
    board.appendChild(cell);
    cell.addEventListener("click", addGo);
  }
};

function addGo(e) {
  let addMove = document.createElement("div");
  addMove.classList.add(move);
  e.target.append(addMove);

  win.push(e.target.id);

  move = move === "circle" ? "cross" : "circle";
  info.textContent = `It is now ${move}' go`;
  e.target.removeEventListener("click", addGo);
  checkScore();
}

function checkScore() {
  const allCells = document.querySelectorAll(".cell");
  let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 5, 6],
    [0, 4, 8],
  ];

  winningCombos.forEach((cell) => {
    const circleWins = cell.every((cell) =>
      allCells[cell].firstChild?.classList.contains("circle")
    );
    if (circleWins) {
      info.textContent = "Circle Wins";
      allCells.forEach((cell) => cell.replaceWith(cell.cloneNode(true)));
    }
  });

  winningCombos.forEach((cell) => {
    const crossWins = cell.every((cell) =>
      allCells[cell].firstChild?.classList.contains("cross")
    );
    if (crossWins) {
      info.textContent = "Cross Wins";
      allCells.forEach((cell) => cell.replaceWith(cell.cloneNode(true)));
    }
  });
}
