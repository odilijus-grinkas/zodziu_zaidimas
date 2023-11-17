// Word Search Game 1
// Random letters 10x10 + Hidden Words
const randomLetters = [
    "J", "V", "K", "N", "E", "T", "G", "O", "A", "B",
    "Q", "Q", "H", "E", "E", "R", "U", "I", "C", "F",
    "M", "U", "W", "A", "T", "E", "R", "L", "X", "C",
    "J", "H", "N", "D", "S", "E", "M", "A", "I", "E",
    "U", "D", "Z", "A", "C", "H", "A", "P", "P", "Y",
    "M", "X", "K", "T", "S", "P", "W", "Z", "C", "A",
    "P", "H", "Z", "J", "Q", "B", "B", "P", "B", "U",
    "Q", "O", "F", "V", "L", "R", "M", "P", "K", "O",
    "Q", "H", "H", "S", "H", "E", "E", "P", "V", "N",
    "J", "M", "L", "H", "J", "B", "O", "J", "C", "N",
];

// Word List
const wordList = [
    "HAPPY",
    "JUMP",
    "TREE",
    "WATER",
    "SHEEP"
];



// buttons - dviems zaidimams (connecting) 
// viena array su funckiju names 
// if else if + skaiciai 1-game one, 2-game two

function firstGame() {
    return randomLetters;
};
function firstGameSolutions(){
    return wordList
}
export{firstGame, firstGameSolutions}