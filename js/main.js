"use strict"

//Question storage section
const question1 = {
  questionValue: 'Czy JS jest super?',
  answer1: "Tak",
  answer2: "Nie",
  answer3: "Nie wiem",
  correctAnswer: 1,
  correctAnswerMessage: 'Masz rację, ottrzymujesz 1 punkt.',
  wrongAnswerMessage: "Niestety nie. Prawidłowa odpowiedź brzmi: JS jest super"
};

const question2 = {
  questionValue: 'Jak wyśrodkować element na stronie?',
  answer1: "margin: 0 auto",
  answer2: "text-adjusting: center",
  answer3: "div: center",
  correctAnswer: 2,
  correctAnswerMessage: 'Masz rację, ottrzymujesz 1 punkt.',
  wrongAnswerMessage: "Niestety nie. Prawidłowa odpowiedź brzmi: margin: 0 auto"
};

//Build question section
let randomNumber = Math.floor(Math.random() * 1 + 1);
const question = document.querySelector(".question--js");

//Question select

switch (randomNumber){
  case 1:
    question.textContent = question1.questionValue;
    break;
  case 2:
    question.textContent = question2.questionValue;
  break;
};