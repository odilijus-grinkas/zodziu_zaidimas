// Word Search Game 1
// Random letters 10x10 + Hidden Words
const randomLetters = [
    "C", "M", "F", "W", "J", "U", "U", "L", "N", "R",
    "B", "W", "L", "O", "S", "T", "Y", "L", "V", "J",
    "T", "X", "A", "P", "H", "X", "P", "Q", "D", "B",
    "D", "W", "M", "T", "E", "L", "P", "N", "T", "H",
    "B", "U", "T", "R", "E", "E", "A", "T", "H", "Z",
    "J", "Q", "L", "K", "P", "R", "H", "A", "F", "W",
    "F", "A", "E", "R", "H", "P", "T", "Z", "N", "Q",
    "U", "F", "C", "L", "H", "N", "L", "N", "O", "T",
    "F", "D", "O", "N", "H", "I", "W", "V", "I", "S",
    "V", "V", "X", "G", "N", "V", "K", "G", "T", "D"
];

// Word List
const wordList = [
    "HAPPY",
    "JUMP",
    "TREE",
    "WATER",
    "SHEEP"
];


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
    "Penguin",
    "Goat",
    "Panda",
    "Giraffe",
    "Lion"
];


// buttons - dviems zaidimams (connecting) 
// viena array su funckiju names 
// if else if + skaiciai 1-game one, 2-game two

function connecting(number) {
    const first = [
        randomLetters,wordList
    ];
    const second = [
        [randomLetters, wordList],
        [randomLettersTwo, animalsWordList]
    ];

    if (number == 1) {
        return first
    } else if (number == 2) {
        return second
    }
};
export{connecting}