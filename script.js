import { checkFunc, chooseCatWordHint } from "./functions.js";

`use strict`;

// Definē visus alfabēta burtus
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Iegūst vajadzīgos elementus
const hangman = document.querySelector(`h1`);
const categories = [`programming languages`, `cities`, `music`, `movies`];
const lettersDiv = document.querySelector(`.letters-div`);
const categoryText = document.querySelector(`.category`);
const wordText = document.querySelector(`#word`);
const hintText = document.querySelector(`#hint`);
let lives = 6;

// Izveido tēmas un vārdus
const wordsmap = new Map();
wordsmap.set(`programming languages`, [`javascript`, `c`, `php`]);
wordsmap.set(`cities`, [`riga`, `washington`, `amsterdam`]);
wordsmap.set(`music`, [`note`, `guitar`, `spotify`]);
wordsmap.set(`movies`, [`batman`, `avengers`, `hollywood`]);

// Uzģenerē visas burtu pogas
// Izvēlās random tēmu un vārdu piešķirot vārdam arī aprakstu
const randomCat = categories[Math.floor(Math.random() * categories.length)];
categoryText.textContent += ` ${randomCat}`;
const randomWord = [Math.floor(Math.random() * wordsmap.get(randomCat).length)];
const hints = new Map();
hints.set(`javascript`, `The best programming language :)`);
hints.set(
  `c`,
  `Programming language with multiple similar, very popular extensions`
);
hints.set(`php`, ` The worst programming language :) (jk)`);
hints.set(`riga`, ` The capital of Latvia`);
hints.set(`washington`, ` The capital of USA`);
hints.set(`amsterdam`, ` The capital of Holland`);
hints.set(`note`, ` A symbol for a sound in music`);
hints.set(`guitar`, ` Very popular string musical instrument`);
hints.set(`spotify`, ` The most popular music app`);
hints.set(`batman`, ` The best superhero from the DC universe`);
hints.set(`avengers`, ` Team of Marvel's greatest super heroes`);
hints.set(`hollywood`, ` The central of modern day cinema in USA`);

const newWord = wordsmap.get(randomCat)[randomWord];

chooseCatWordHint(newWord, hints, hintText, wordText);

// Galvenā pārbaude uz katras burta pogas uzspiešanas
const allLetters = document.querySelectorAll(`.letter`);
let currentArr = wordText.textContent.trim().split(` `);

checkFunc(newWord, hangman, lives, lettersDiv, alphabet, wordText, currentArr);

// Izvēlējos lietot JavaScript kopā ar CSS un HTML, jo JavaScript, man likās visvienkāršākais un efektīvākais veids kā uzbūvēt programmu. HTML un CSS izvēlējos, jo tie ir gandrīz neatņemama sastāvdaļa programmējot ar JavaScript.
