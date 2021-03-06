"use strict"

//UI CONTROLLER
var UIController = (function(){

  //DOM elements storage section
  var DOMstrings ={
    pagewrapper: '.pagewrapper--js',
    answerButton: '.button--js',
    AnswerBox: '.answer-box--js',
    answerBoxText: '.answer-box__text--js',
    finalResultBox: '.final-result--js',
    partScoreDisplay: '.answer-box__score--js',
    finalScoreDisplay: '.final-result__score--js',
    moveOnButton: '.answer-box__button--js',
    startButton: '.header__button--js',
    finalButton: '.final-result__button--js',
    finalyComment: '.final-result__summary--js',
    displaySection: '.display-area--js',
    answer1: 'choice1',
    answer2: 'choice2',
    answer3: 'choice3'
  };
  //Question storage section
  var questions ={
  question0: {
    questionValue: 'Czy JS jest super?',
    answer1: 'Tak',
    answer2: 'Nie',
    answer3: 'Nie wiem',
    correctAnswer: 1,
  },
  question1: {
    questionValue: 'Jak wyśrodkować div na stronie?',
    answer1: 'margin: 0 auto',
    answer2: 'text-adjusting: center',
    answer3: 'iv: center',
    correctAnswer: 1,
  },
  question2: {
    questionValue: 'Jaką wartość box-sizing trzeba ustawić w CSS, żeby padding nie powiększył wymiarów box\'a',
    answer1: 'content-box',
    answer2: 'border-box',
    answer3: 'inherit',
    correctAnswer: 2,
  },
  question3: {
    questionValue: 'Jaki znacznik HTML pozwala bez użycia CSS dopasować rozmiar obrazu do wymiaru ekranu?',
    answer1: 'img',
    answer2: 'iframe',
    answer3: 'source srcset',
    correctAnswer: 3,
  },
  question4: {
    questionValue: 'Czy jednostka REM odnosi się do wartości czcionki:',
    answer1: 'rodzica',
    answer2: 'root\'a',
    answer3: 'domyślnej wielkości czcionki w systemie',
    correctAnswer: 2,
  },
  question5: {
    questionValue: 'Czy w Java Script można podać jako parametr funkcji inną funkcję?',
    answer1: 'Tak',
    answer2: 'Nie',
    answer3: 'Nie wiem',
    correctAnswer: 1,
  },
  question6: {
    questionValue: 'Czy zmienna let zadeklarowana w ciele funkcji będzie dostępna poza tą funkcją?',
    answer1: 'Tak',
    answer2: 'Nie',
    answer3: 'Nie wiem',
    correctAnswer: 2,
  },
  question7: {
    questionValue: 'W celu porównania danych wraz z ich typem należy użyć znaku:',
    answer1: '==',
    answer2: '$==',
    answer3: '===',
    correctAnswer: 3,
  },
  question8: {
    questionValue: 'Promise w Java Script pozwala na:', 
    answer1: 'deklarowanie zmiennych w dowolnym miejscu w kodzie',
    answer2: 'przesyłanie danych z formularza na serwer',
    answer3: 'sterowanie przepływem kodu asynchronicznego',
    correctAnswer: 3,
  },
  question9: {
    questionValue: 'Właściwość will-change w CSS pozwala na:', 
    answer1: 'zmodyfikowanie elementu na stronie przez użytkownika',
    answer2: 'informuje przeglądarkę, że dany element będzie się zmieniał',
    answer3: 'zmodyfikowanie danego elementu CSS przez JavaScript',
    correctAnswer: 2,
  },
  question10: {
    questionValue: 'Co to znaczy, że kod jest asynchroniczny?', 
    answer1: 'przeglądarka może wykonywać część kodu w tle', 
    answer2: 'część kodu napisana jest w Java Script, a część w React',
    answer3: 'kod wykona się w odwrotnej kolejności',
    correctAnswer: 1,
  },
  question11: {
    questionValue: 'Ternary operator to:', 
    answer1: 'operator nadpisujący wartość poprzednią', 
    answer2: 'uproszczony zapis wyrażenia warunkowego if',
    answer3: 'operator terminowo wyłączający wskazany blok kodu',
    correctAnswer: 2,
  },
  question12: {
    questionValue: 'Czy dane zawarte w local Storage zostaną usunięte, kiedy użytkownik wyczyści ciasteczka z przeglądarki?', 
    answer1: 'Tak', 
    answer2: 'Nie',
    answer3: 'Nie wiem',
    correctAnswer: 2,
  },
  question13: {
    questionValue: '&lang;script&rang; możemy wpiąc w HTML:', 
    answer1: 'tylko w sekcji HEAD', 
    answer2: 'tylko na końcu sekcji BODY',
    answer3: 'w obu miejscach',
    correctAnswer: 3,
  },
  question14: {
    questionValue: '\'git checkout\' służy do:', 
    answer1: 'sprawdzenia stanu repozytorium', 
    answer2: 'sprawdzenia połączenia z serwerem',
    answer3: 'zmiany gałęzi kodu',
    correctAnswer: 3,
  },
  question15: {
    questionValue: 'Do czego służy CSS Sprites?', 
    answer1: 'do łączenia wielu plików css w jeden plik', 
    answer2: 'do łączenia wielu plików graficznych w jeden plik',
    answer3: 'do łączenia wielu plików JS w jeden plik',
    correctAnswer: 2,
  },
  question16: {
    questionValue: '\'Git log --oneline <TAG>\' wykona następującą akcję:',
    answer1: 'doda TAG do ostatniego commita będącego na serwerze', 
    answer2: 'wyświetli log commita oznaczonego wskazanym tagiem',
    answer3: 'wyświetli historię od commita zaznaczonego wskazanym tagiem',
    correctAnswer: 3,
  },
  question17: {
    questionValue: 'Polecenie \'gitk\' wywoła:',
    answer1: 'narzędzie do przeglądania historii projektu',
    answer2: 'consolę git\'a',
    answer3: 'narzędzie do komunikacji z serwerem',
    correctAnswer: 1,
  },
  question18: {
    questionValue: 'Flex-basis pozwala określić:',
    answer1: 'maksymalny rozmiar elementu',
    answer2: 'położenie obiektu w kontenerze',
    answer3: 'domyślne ułożenie elementu względem innych elementów',
    correctAnswer: 1,
  },
  question19: {
    questionValue: 'Typ input radiobutton pozwala na:',
    answer1: 'wybranie dwóch elementów z listy',
    answer2: 'wybranie losowego elementu z listy',
    answer3: 'wybranie tylko jednego elementu z listy',
    correctAnswer: 3,
  },
  };
  //Set below value public, that other parts of code have access to this value.
  return {
    getDOMstrings: function(){
      return DOMstrings;
    },
    getQuestions: function(){
      return questions;
    }, 
    htmlBuilding: function(questNumber){
      var questNmb, quest, html, newHtml;
      questNmb = 'question' + questNumber.questionNumber;
      quest = questions[questNmb];
      // Create HTML string with placeholder text
      html = '<section class="display-area--js"><h2 class="question question--js">%qestion%</h2><div class="answer"><p class="answer__title">Zaznacz prawidłową odpowiedź:</p><section class="answer__avalible answer__avalible--js"><div class="margin-bottom"><input type="checkbox" id="choice1">%answer1%</div><div class="margin-bottom answer__avalible--gold"><input type="checkbox" id="choice2">%answer2%</div><div class="margin-bottom"><input type="checkbox" id="choice3">%answer3%</div><button class="button button--js">Send Answer</button></section></div></section>';
      newHtml = html.replace('%qestion%', quest.questionValue);
      newHtml = newHtml.replace('%answer1%', quest.answer1);
      newHtml = newHtml.replace('%answer2%', quest.answer2);
      newHtml = newHtml.replace('%answer3%', quest.answer3);
  
      return newHtml;
    },
    setupQuestionEventListener: function(checkValue, displayQuestion){
      document.getElementById(DOMstrings.answer1).addEventListener('click', checkValue);
      document.getElementById(DOMstrings.answer2).addEventListener('click', checkValue);
      document.getElementById(DOMstrings.answer3).addEventListener('click', checkValue);
      document.querySelector(DOMstrings.answerButton).addEventListener('click', displayQuestion);
    },
    finalResultDisplayBuilding: function(scoreValue){
      var finalScore, html, finalHtml;
      finalScore = scoreValue;

      if(finalScore < 5){
        html = '<section class="final-result final-result--js"><h2 class="final-result__header">Gratulacje</h2><p class="final-result__text">Zakończyłeś test</p><p class="final-result__text margin-bottom">Twój wynik wynosi:</p><p class="final-result__score final-result__score--js">%value%</p>        <p class="final-result__summary final-result__summary--js">Jeśli poćwiczysz jeszcze trochę, na pewno będziesz znał odpowiedź na większość pytań</p><button class="final-result__button final-result__button--js">Gram ponownie</button></section>';

        finalHtml = html.replace('%value%', finalScore);

      }else if (finalScore >= 5 && finalScore < 8){
        html = '<section class="final-result final-result--js"><h2 class="final-result__header">Gratulacje</h2><p class="final-result__text">Zakończyłeś test</p><p class="final-result__text margin-bottom">Twój wynik wynosi:</p><p class="final-result__score final-result__score--js">%value%</p>        <p class="final-result__summary final-result__summary--js">Już prawie wiesz wszystko :)</p><button class="final-result__button final-result__button--js">Gram ponownie</button></section>';

        finalHtml = html.replace('%value%', finalScore);
      }else{
        html = '<section class="final-result final-result--js"><h2 class="final-result__header">Gratulacje</h2><p class="final-result__text">Zakończyłeś test</p><p class="final-result__text margin-bottom">Twój wynik wynosi:</p><p class="final-result__score final-result__score--js">%value%</p>        <p class="final-result__summary final-result__summary--js">Jesteś super FrontEnd HERO</p><button class="final-result__button final-result__button--js">Gram ponownie</button></section>';

        finalHtml = html.replace('%value%', finalScore);
      }
      return finalHtml;
    }
  }
}());

// COUNT CONTROLLER
var countController = (function(){
  
  
  return{

    number: function(){

      var questionsLenght, questions, questionNumber, randomNumber;
      
      //Load avalibe question from SessionStorage
      questions = sessionStorage.getItem('AwalibleQuestions');
      questions = questions.split(",");
      questionsLenght = questions.length - 1;
      
      //Calculate random number
      randomNumber = Math.round(Math.random() * questionsLenght);
      questionNumber = questions[randomNumber];

      //Save question number
      sessionStorage.setItem('question', questionNumber);

      //Deleted used question from questions storage
      questions.splice(randomNumber, 1);
      
      sessionStorage.setItem('AwalibleQuestions', questions.toString());
      return{
        questionNumber
      };
    },
    checkAnswer: function(answerValue, questions){
      var questionNumber, correctAnswerValue, questNmb, point;
      
      //Get last question number from local storage
      questionNumber = JSON.parse(sessionStorage.getItem('question'));
      questNmb = 'question' + questionNumber;
      correctAnswerValue = questions[questNmb].correctAnswer;
      if (answerValue === correctAnswerValue){
        point = 1;
      }else{
        point = 0;
      }
      return {
        point
      }
    },
  }
}());

// GLOBAL APP CONTROLLER
var controller = (function(UICtrl, count){
  //Question number storage

  //JS pointer definition
  var DOM = UICtrl.getDOMstrings();
  
  var setupEventListeners = function(){
    
    document.querySelector(DOM.startButton).addEventListener('click', displayFirstQuestion);
  };
  var displayFirstQuestion = function()  {
    var element, html, questions, questNumber, questNumbersArray, questionsLenght;
    
    //Set sesion counter value
      sessionStorage.setItem('numberOfQuestions', 1);
      sessionStorage.setItem('score', 0);
      //Set posible question number array
      questions = UICtrl.getQuestions();
      questionsLenght = Object.keys(questions).length - 1;
      questNumbersArray =Array.from({length: questionsLenght});
      for (let i = 0; i <= questionsLenght; i++){
        questNumbersArray[i] = i;
      }
      sessionStorage.setItem('AwalibleQuestions', questNumbersArray.toString());

    // Delete first page img and button
      element = document.querySelector(DOM.displaySection);
      element.parentNode.removeChild(element);
    // Select random number
      questNumber = count.number();
    // Add Question, aswers and send button
      html = UICtrl.htmlBuilding(questNumber);
    // Insert the HTML into the DOM
      document.querySelector(DOM.pagewrapper).insertAdjacentHTML('beforeend', html);
    //Set Events Listener
      UICtrl.setupQuestionEventListener(checkValue, displayQuestion);
  };
  var displayQuestion = function()  {
    var element, html, questions, questNumber, answer, point, score, numberOfQuestions;

    if (document.getElementById(DOM.answer1).checked || document.getElementById(DOM.answer2).checked || document.getElementById(DOM.answer3).checked){
      
      // Get question variable
      questions = UICtrl.getQuestions();
      //Check if answer is correct and add point if so
      if (document.getElementById(DOM.answer1).checked){
        answer = 1;
      }else if (document.getElementById(DOM.answer2).checked){
        answer = 2;
      }else if (document.getElementById(DOM.answer3).checked){
        answer = 3;
      }else {
        window.alert('Coś poszło nie tak, odśwież stronę :/');
      }
      point = count.checkAnswer(answer, questions);
      point = point.point;
      
      //Total Score history
      score = JSON.parse(sessionStorage.getItem('score'));
      score += point;
      sessionStorage.setItem('score', score);

      //Delete last question from page
      element = document.querySelector(DOM.displaySection);
      element.parentNode.removeChild(element);
      // Count displayed question
      numberOfQuestions = JSON.parse(sessionStorage.getItem('numberOfQuestions'));
      numberOfQuestions ++;
      sessionStorage.setItem('numberOfQuestions', numberOfQuestions);
      //Checked if game is over
      var refreshingPage = function(){
        window.location.reload(false);
      };

      if (numberOfQuestions >= 10){
        html = UICtrl.finalResultDisplayBuilding(score);
        // Insert the HTML into the DOM
        document.querySelector(DOM.pagewrapper).insertAdjacentHTML('beforeend', html);
        //Set Events Listener
        document.querySelector(DOM.finalButton).addEventListener('click', refreshingPage);
      }else{
        //Select random number
        questNumber = count.number(questions);
        //Add Question, aswers and send button
        html = UICtrl.htmlBuilding(questNumber);
        // Insert the HTML into the DOM
        document.querySelector(DOM.pagewrapper).insertAdjacentHTML('beforeend', html);
        //Set Events Listener
        UICtrl.setupQuestionEventListener(checkValue, displayQuestion);
      }  
    }else {
      window.alert('Zaznacz odpowiedź, żeby przejść dalej.');
    }
    
  };
  //Allow user checked only one answer
  var checkValue = function (event) {
      for (var i = 1;i <= 3; i++)
        {
          let element = 'choice' + i;
          document.getElementById(element).checked = false;
        }
      document.getElementById(event.target.id).checked = true;
  };
  //function allow us to start aplication
  return {
    init: function(){
      setupEventListeners();
    },
  }
}(UIController, countController));


//This line of code start aplication after page load
controller.init();