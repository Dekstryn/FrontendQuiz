"use strict"

//Question storage section
function Question(questionValue, answer1, answer2, answer3, correctAnswer, correctAnswerMessage, wrongAnswerMessage){
  this.questionValue = questionValue;
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.answer3 = answer3;
  this.correctAnswer = correctAnswer;
  this.correctAnswerMessage = correctAnswerMessage;
  this.wrongAnswerMessage = wrongAnswerMessage;
}

let question1 = new Question('Czy JS jest super?', 'Tak', 'Nie', 'Nie wiem', 1, 'Masz rację, otrzymujesz 1 punkt.', 'Niestety nie. Prawidłowa odpowiedź brzmi: JS jest super');

let question2 = new Question('Jak wyśrodkować element na stronie?', 'margin: 0 auto', 'text-adjusting: center', 'div: center', 2, 'Masz rację, otrzymujesz 1 punkt.', 'Niestety nie. Prawidłowa odpowiedź brzmi: margin: 0 auto');

//Build question section
let randomNumber = Math.floor(Math.random() * 1 + 1);
let question = document.querySelector(".question--js");
let ans1 = document.querySelector(".answer__choice1--js");
let ans2 = document.querySelector(".answer__choice2--js");
let ans3 = document.querySelector(".answer__choice3--js");

//Question select
switch (randomNumber){
  case 1:
    question.textContent = question1.questionValue;
    ans1.textContent = question1.answer1;
    ans2.textContent = question1.answer2;
    ans3.textContent = question1.answer3;
    break;
  case 2:
    question.textContent = question2.questionValue;
    ans1.textContent = question2.answer1;
    ans2.textContent = question2.answer2;
    ans3.textContent = question2.answer3;
  break;
};
//Answer service
let answerButton = document.querySelector(".button--js");

answerButton.addEventListener('click', (e) =>{

  let answerValue = document.querySelector('input[name="answerX"]:checked').value;

});
