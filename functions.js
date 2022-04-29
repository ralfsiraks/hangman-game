export const chooseCatWordHint = function (newWord, hints, hintText, wordText) {
  for (let i = 0; i < newWord.length; i++) {
    wordText.textContent += ` _`;
  }

  hintText.textContent += hints.get(newWord);
};

export const checkFunc = function (
  newWord,
  hangman,
  lives,
  lettersDiv,
  alphabet,
  wordText,
  currentArr
) {
  alphabet.forEach((letter) => {
    lettersDiv.insertAdjacentHTML(
      `beforeend`,
      `<button class="letter" id="${letter}">${letter}</button>`
    );
  });
  const allLetters = document.querySelectorAll(`.letter`);
  console.log(allLetters);
  allLetters.forEach((e) => {
    e.addEventListener(`click`, function () {
      console.log(`deez`);
      // Pārbauda vai vārds satur izvēlēto burtu
      if (newWord.includes(e.textContent) != true) {
        document.querySelector(`#pic${lives}`).classList.add(`pic-gone`);
        lives--;
        // Pārbauda vai spēle jau ir zaudēta
        if (lives === 0 || lives < 0) {
          document.querySelectorAll(`div, p, h1, img, body, html`).forEach(
            (e) =>
              (e.style.backgroundColor = `#ff4d4d
                `)
          );
          hangman.textContent = `YOU LOSE :(`;
          document
            .querySelectorAll(`button`)
            .forEach((e) => (e.disabled = true));
        }
      }
      // Pārbauda vai vārds satur izvēlēto burtu
      else
        [...newWord].forEach(function (el, i) {
          if (el === e.textContent) {
            currentArr[i] = el;
            wordText.textContent = currentArr.toString().replaceAll(`,`, `  `);
          }
          // Pārbauda vai spēle jau ir uzvarēta
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
};
