`use strict`;

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

const hangman = document.querySelector(`h1`);
const categories = [`programming languages`, `cities`, `music`, `movies`];
const lettersDiv = document.querySelector(`.letters-div`);
const categoryText = document.querySelector(`.category`);
const wordText = document.querySelector(`#word`);
const hintText = document.querySelector(`#hint`);
let lives = 6;

const wordsmap = new Map();
wordsmap.set(`programming languages`, [`javascript`, `c`, `php`]);
wordsmap.set(`cities`, [`riga`, `washington`, `amsterdam`]);
wordsmap.set(`music`, [`note`, `guitar`, `spotify`]);
wordsmap.set(`movies`, [`batman`, `avengers`, `hollywood`]);

alphabet.forEach((letter) => {
  lettersDiv.insertAdjacentHTML(
    `beforeend`,
    `<button class="letter" id="${letter}">${letter}</button>`
  );
});

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

const chooseCatWordHint = function (word) {
  for (let i = 0; i < word.length; i++) {
    wordText.textContent += ` _`;
  }

  hintText.textContent += hints.get(word);
};
chooseCatWordHint(newWord);

const allLetters = document.querySelectorAll(`.letter`);
let currentArr = wordText.textContent.trim().split(` `);

allLetters.forEach((e) => {
  e.addEventListener(`click`, function () {
    if (newWord.includes(e.textContent) != true) {
      document.querySelector(`#pic${lives}`).classList.add(`pic-gone`);
      lives--;
      if (lives === 0 || lives < 0) {
        document.querySelectorAll(`div, p, h1, img, body, html`).forEach(
          (e) =>
            (e.style.backgroundColor = `#ff4d4d
          `)
        );
        hangman.textContent = `YOU LOSE :(`;
        document.querySelectorAll(`button`).forEach((e) => (e.disabled = true));
      }
    } else
      [...newWord].forEach(function (el, i) {
        if (el === e.textContent) {
          currentArr[i] = el;
          wordText.textContent = currentArr.toString().replaceAll(`,`, `  `);
        }
        if (!wordText.textContent.includes(`_`)) {
          document.querySelectorAll(`div, p, h1, img, body, html`).forEach(
            (e) =>
              (e.style.backgroundColor = `#33ff77
            `)
          );
          hangman.textContent = `YOU WIN :)`;
          document
            .querySelectorAll(`button`)
            .forEach((e) => (e.disabled = true));
        }
      });
    e.disabled = true;
  });
});
