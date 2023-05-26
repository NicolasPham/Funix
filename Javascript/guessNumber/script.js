"use strict";

let message = document.querySelector(".message");

// let number = document.querySelector(".number");

let number = Math.floor(Math.random() * 20) + 1;
let guessNumber = document.querySelector(".guess");

let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");

let checkButton = document.querySelector(".check");
let againButton = document.querySelector(".again");

console.log(number);
//define function handleCheck

function handleCheck() {
  let myNumber = parseInt(guessNumber.value);
  if (myNumber === number) {
    document.querySelector("body").style.backgroundColor = "green";
    message.textContent = "👏 Correct number!";
    if (score.textContent > highScore.textContent)
      highScore.textContent = score.textContent;
  } else if (myNumber > number) {
    score.textContent -= 1;
    message.textContent = "Too high, try again";
    guessNumber.value = "";
  } else {
    score.textContent -= 1;
    message.textContent = "Too low, try again";
    guessNumber.value = "";
  }
}

//define function handleAgain
const handleAgain = () => {
  document.querySelector("body").style.backgroundColor = "black";
  score.textContent = 20;
  number = Math.floor(Math.random() * 20) + 1;
  guessNumber.value = "";
};

checkButton.addEventListener("click", handleCheck);
againButton.addEventListener("click", handleAgain);
