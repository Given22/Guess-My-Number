"use strict";

const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const random_Number = document.querySelector(".random_Number");
const scoreTable_text = document.querySelector(".scoreTable_text");

const rollingNumber = Math.trunc(Math.random() * 30);
console.log(rollingNumber);

document.querySelector(".check_btn").addEventListener("click", () => {
  const input_number = Number(document.querySelector(".input_number").value);

  if (!input_number) {
    scoreTable_text.textContent = "No number! ";
  } else if (input_number === rollingNumber) {
    scoreTable_text.textContent = "You guess my number!\nCongratulation!";
  }
});
