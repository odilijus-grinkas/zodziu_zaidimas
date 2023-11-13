// Word Search Game 2
// Random letters 10x10 + Hidden Words
const randomLettersTwo = [
    "G", "P", "E", "K", "L", "J", "N", "G", "G", "K",
    "R", "S", "A", "E", "Z", "I", "R", "I", "W", "O",
    "W", "D", "P", "N", "U", "N", "R", "R", "N", "Z",
    "U", "X", "N", "G", "D", "P", "O", "A", "P", "W",
    "H", "U", "N", "H", "S", "A", "W", "F", "T", "S",
    "E", "E", "Y", "A", "I", "N", "Y", "F", "F", "G",
    "P", "F", "K", "B", "U", "L", "C", "E", "C", "Q",
    "G", "O", "A", "T", "I", "K", "D", "G", "W", "A",
    "B", "P", "J", "O", "I", "K", "O", "E", "E", "Z",
    "Q", "Q", "N", "B", "X", "I", "A", "R", "T", "N"
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
    const options = [
        randomLettersTwo,
        animalsWordList
    ];
    return options;
};
export{secondGame};

