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
        randomLettersTwo,
        animalsWordList
    ];

    if (number == 1) {
        return first
    } else if (number == 2) {
        return second
    }
};
export{connecting}