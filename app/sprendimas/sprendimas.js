// imports

// list of window elements..
const windows = document.getElementsByClassName("window");

function sprendimas(x, y, direction, word) {
  const firstLetter = letterFinder(x, y);
  let nodes = [];
  if (direction == 1) {
    // horizontal
    for (let i = 0; i <= word.length; i++) {}
  }
}

function letterFinder(x, y) {
  for (let node of windows) {
    if (node.classList.contains("" + x) && node.classList.contains("" + y)) {
      return node;
    }
  }
  throw new Error("Coordinate does not exist in provided array");
}

// This assumes table is a square
function outOfBoundsChecker(x, y, tableSize) {
  
}