// imports

// list of window elements..
const windows = document.getElementsByClassName("window");

function sprendimas(x, y, direction, word) {
  let nodes = [];
  if (direction == 1) {
    // horizontal
    for (let i = 0; i <= word.length - 1; i++) {
      if (!outOfBounds(x, y + i)) {
        nodes.push(letterFinder(x, y + i));
      } else continue;
    }
  } else if (direction == 2) {
    // vertical
    for (let i = 0; i <= word.length - 1; i++) {
      if (!outOfBounds(x + i, y)) {
        nodes.push(letterFinder(x + i, y));
      } else continue;
    }
  } else if (direction == 3) {
    // diagonal
    for (let i = 0; i <= word.length - 1; i++) {
      if (!outOfBounds(x + i, y + i)) {
        nodes.push(letterFinder(x + i, y + i));
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

function outOfBounds(x, y, tableSizeX = 10, tableSizeY = 10) {
  if (x <= tableSizeX && y <= tableSizeY && x > 0 && y > 0) {
    return false;
  } else {
    return true;
  }
}
