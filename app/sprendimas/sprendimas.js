// imports

// list of window elements..
const windows = document.getElementsByClassName("window");

/**
 * 
 * @param {number} x Row_Number
 * @param {number} y Col_Number
 * @param {number} direction 1 - Horizontal, 2 - Vertical 3- Diagonal
 * @param {string} word the word we're guessing
 */
function sprendimas(x, y, direction, word) {
  let nodes = [];
  let useX = 0;
  let useY = 0;
  if (direction == 1) {
    // horizontal
    useY = 1;
  } else if (direction == 2) {
    // vertical
    useX = 1;
  } else if (direction == 3) {
    // diagonal
    useX = 1;
    useY = 1;
  }
  for (let i = 0; i <= word.length - 1; i++) {
    if (!outOfBounds(x + useX * i, y + useY * i)) {
      nodes.push(letterFinder(x + useX * i, y + useY * i));
    } else continue;
  }
  addClasses(nodes,true) // use word comparison function here instead
}

function addClasses(nodes,mistake=true){
  let className = "wrong"
  if (!mistake){// use word comparison function here instead
    className = "correct"
  }
  for (let node of nodes) {
    node.classList.add(className);
  }
}

function letterFinder(x, y) {
  // What formatting is used before/after the number?
  let formatX = x + "row";
  let formatY = y + "col";
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

export{sprendimas}