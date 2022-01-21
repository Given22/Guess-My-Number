"use strict";

const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const random_Number = document.querySelector(".random_Number");
const scoreTable_text = document.querySelector(".scoreTable_text");

let highScoreScore = 0;
let rollingNumber = Math.trunc(Math.random() * 30);
let scoreScore = 30;

const displayMassage = (massage) => {scoreTable_text.textContent = massage}

document.querySelector('.again').addEventListener("click", () =>{
  rollingNumber = Math.trunc(Math.random() * 30) + 1;
  scoreScore = 30;
  score.textContent = scoreScore;
  console.log(rollingNumber);
  random_Number.textContent = '?'
  document.querySelector("body").style.backgroundColor = "rgb(30, 37, 30)";
  displayMassage('Start guessing...')
})

document.querySelector(".check_btn").addEventListener("click", () => {
  const input_number = Number(document.querySelector(".input_number").value);

  if (!input_number) {
    displayMassage("No number! ")
  } else if (input_number === rollingNumber) {
    random_Number.textContent = rollingNumber;
    if (scoreScore > highScoreScore){
      displayMassage("You guess my number!\nCongratulation!\nNew high Score!");
      highScoreScore = scoreScore;
      highscore.textContent = highScoreScore;
    }else{
      displayMassage("You guess my number!\nCongratulation!")
    }
    document.querySelector("body").style.backgroundColor = "#06732E";
  } else if (input_number !== rollingNumber){
    displayMassage(input_number < rollingNumber ? "⬇️ To low! " : "⬆️ To high! ")
    scoreScore -= 2;
    score.textContent = scoreScore;
  }
  if(scoreScore < 1 ){
    displayMassage("You lost the game.\nPress Again if you want to restart")
  }
});

