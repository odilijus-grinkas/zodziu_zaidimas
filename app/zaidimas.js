// Combine modules here
// import{connecting} from "./zaidimai"
import { sprendimas } from "./sprendimas/sprendimas.js";
import { addLetters } from "./add_letters.js";
import { addWords } from "./word_func.js";
import { board_generation } from "./board_generator.js";
import { zodziuLentele } from "./generated_words.js";
import { firstGame } from "./zaidimai/zaidimas1.js";
import { secondGame } from "./zaidimai/zaidimas2.js";
// Make table
document.getElementById("lentele").innerHTML = board_generation();
zodziuLentele(5);
// Add picked letters and words to table
let letters = firstGame()[0];
let words = firstGame()[1]
addLetters(letters,document.getElementsByClassName("window"))
addWords(document.getElementsByClassName("given_word"),words)
// Play Game
sprendimas(3,3,2,"Happy");
