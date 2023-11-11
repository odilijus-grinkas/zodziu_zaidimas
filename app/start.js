// Combine modules here
// import{connecting} from "./zaidimai"
import { addLetters } from "./add_letters.js"
import { connecting } from "./zaidimai.js"
import { addWords } from "./word_func.js";
import { board_generation } from "./board_generator.js";
// document.getElementById("test").innerHTML = table;
// let array = connecting(1);
let letters = connecting(1)[0];
let words = connecting(1)[1]
addLetters(letters,document.getElementsByClassName("window"))
addWords(document.getElementsByClassName("given_word"),words)
document.getElementById("lentele").innerHTML = board_generation();