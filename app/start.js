// Combine modules here
// import{connecting} from "./zaidimai"
import{table,test} from "./board_generator.js"
import { addLetters } from "./add_letters.js"
import { connecting } from "./zaidimai.js"
import { addWords } from "./add_words.js";
// document.getElementById("test").innerHTML = table;
// let array = connecting(1);
test();
let letters = connecting(1)[0];
let words = connecting(1)[1]
addLetters(letters,document.getElementsByClassName("window"))
addWords(document.getElementsByClassName("given_word"),words)