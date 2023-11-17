// Word Search Game 2
// Random letters 10x10 + Hidden Words
const randomLettersTwo = [
    "G", "X", "X", "I", "U", "G", "L", "W", "C", "N",
    "J", "I", "G", "E", "A", "B", "Z", "U", "O", "I",
    "F", "K", "R", "O", "L", "D", "F", "I", "Q", "U",
    "Y", "Z", "F", "A", "A", "Y", "L", "E", "Y", "G",
    "D", "G", "G", "E", "F", "T", "L", "F", "B", "N",
    "E", "J", "H", "T", "G", "F", "L", "H", "X", "E",
    "J", "G", "Q", "O", "E", "Z", "E", "L", "N", "P",
    "V", "K", "T", "E", "H", "L", "J", "I", "R", "J",
    "V", "P", "A", "N", "D", "A", "W", "O", "S", "A",
    "H", "Y", "S", "J", "V", "R", "R", "N", "C", "G"
];

// Word List
const animalsWordList = [
    "PENGUIN",
    "GOAT",
    "PANDA",
    "GIRAFFE",
    "LION"
];


// buttons - dviems zaidimams (connecting) 
// viena array su funckiju names 
// if else if + skaiciai 1-game one, 2-game two

function secondGame() {
    return randomLettersTwo;
};
function secondGameSolutions(){
    return animalsWordList;
}
export {secondGame, secondGameSolutions};