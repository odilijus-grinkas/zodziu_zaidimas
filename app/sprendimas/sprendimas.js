// imports

// list of window elements..
const windows = document.getElementsByClassName("window");

function sprendimas(x, y, direction, word) {
  const firstLetter = letterFinder(x, y);
  let nodes = [];
  if (direction == 1) {
    // horizontal
    for (let i = 1; i <= word.length; i++) {
      if (!outOfBounds(i, y)) {
        nodes.push(letterFinder(i,y));
      } else continue;
    }
  }
}

function letterFinder(x, y) {
  // What formatting is used before/after the number?
  formatX = x + "row";
  formatY = y + "col";
  for (let node of windows) {
    if (node.classList.contains(formatX) && node.classList.contains(formatY)) {
      return node;
    }
  }
  throw new Error(
    "Coordinate does not exist in provided array OR x y formatting is incorrect"
  );
}

// This assumes table is a square
function outOfBounds(x, y, tableSize = 10) {
  if (x <= tableSize && y <= tableSize && x > 0 && y > 0) {
    return false;
  } else {
    return true;
  }
}
