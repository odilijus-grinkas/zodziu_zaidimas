// Combine modules here
// import{connecting} from "./zaidimai"
import { sprendimas } from "./sprendimas/sprendimas.js";
import { addLetters } from "./add_letters.js"
import { connecting } from "./zaidimai.js"
import { addWords } from "./word_func.js";
import { board_generation } from "./board_generator.js";
// Make table
document.getElementById("lentele").innerHTML = board_generation();
// Add picked letters and words to table
let letters = connecting(1)[0];
let words = connecting(1)[1]
addLetters(letters,document.getElementsByClassName("window"))
addWords(document.getElementsByClassName("given_word"),words)
// Play Game
sprendimas(3,3,3,"Happy");