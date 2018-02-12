'use strict';

// keeping score for total correct and incorrect answers
var correctAnswers = 0;
var userName = prompt('Hi! Glad you are here. What is your name?');

function helloName() {
  alert('Hi, ' + userName + ', nice to meet you! I am going to ask you a few fun questions about me. Please answer with y/n or yes/no.');
  console.log('User was asked their name, responded with: ' + userName + '.');
}

// QUESTION 1
function question1() {
  var answer1 = prompt('Do you think I like pets?').toLowerCase().trim();
  console.log('User was asked if I like pets, responded with: ' + answer1);

  if (answer1 === 'yes' || answer1 === 'y') {
    correctAnswers++;
    console.log(correctAnswers);
    alert('Right! ' + userName + ', I don\'t have any, but I really want a quaker parrot and an ausi shepard!');

  } else if (answer1 === 'no' || answer1 === 'n') {
    alert('You are wrong, ' + userName + '! I love animals!');
  } else {
    alert('Sorry! That was not a valid answer. Maybe you made a typo? No matter, let\'s crack on to the next question!');
  }
  console.log(correctAnswers);
}

// QUESTION 2
function question2() {
  var answer2 = prompt('Next question! Do you think I have any sisters?').toLowerCase().trim();
  console.log('User was asked if I had any sisters, reponded with: ' + answer2);

  if (answer2 === 'no' || answer2 === 'n') {
    correctAnswers++;
    alert('Correct, ' + userName + '! I have 3 brothers split between the east and west coast!');
  } else if (answer2 === 'yes' || answer2 === 'y') {
    alert('Sorry ' + userName + ', I actually have three brothers!');
  } else {
    alert('Come on now, ' + userName + '! Follow the directions!');
  }
  console.log(correctAnswers);
}

// QUESTION 3
function question3() {
  var answer3 = prompt(userName + ', maybe we should try something else! Do I enjoy hiking?').toLowerCase().trim();
  console.log('User was asked if I enjoy hiking, reponded with: ' + answer3);

  if (answer3 === 'yes' || answer3 === 'y') {
    correctAnswers++;
    alert('Absolutely right, ' + userName + '! Onward!');
  } else if (answer3 === 'no' || answer3 === 'n') {
    alert('Noooo. ' + userName + ', we live in Seattle, how could I not?');
  } else {
    alert('There were definitely guidelines at the beginning, and that certainly wasn\'t the correct type of response...Next question!');
  }
  console.log(correctAnswers);
}

//QUESTION 4
function question4() {
  var answer4 = prompt('Okay, ' + userName + '. let\'s try another! Am I a military veteran?').toLowerCase().trim();
  console.log('User was asked if I am a veteran, reponded with: ' + answer4);

  if (answer4 === 'yes' || answer4 === 'y') {
    correctAnswers++;
    alert('Indubitably, my dear ' + userName + '! On to the last question');
  } else if (answer4 === 'no' || answer4 === 'n'){
    alert('Incorrect ' + userName + ', I was in the Marine Corps for 5 years. Hopefully, you\'ll get this last one...');
  } else {
    alert('Maybe your keyboard is malfunctioning, eh? One last chance, onward we go!');
  }
  console.log(correctAnswers);
}

// QUESTION 5
function question5() {
  var answer5 = prompt('Now for the finale, ' + userName + '... Have I ever traveled outside the United States?').toLowerCase().trim();
  console.log('User was asked if I have traveled outside the United States, reponded with: ' + answer5);

  if (answer5 === 'yes' || answer5 === 'y') {
    correctAnswers++;
    alert('How did you know, ' + userName + '?! I lived in Seoul, South Korea for 6 months a few years back. Congratulations, you are really good at guessing!');
  } else if (answer5 === 'no' || answer5 === 'n') {
    alert('Tough break, ' + userName + '. I definitely lived in South Korea for a bit a few years back. Better luck next time!');
  } else {
    alert('' + userName + ', congratulations! Your keyboard is utter rubbish. Please replace promptly.');
  }
  console.log(correctAnswers);
}

// QUESTION 6 - NUMBER GUESSING GAME
function question6() {
  var favNum = Math.floor(Math.random() * 11);
  console.log('Secret number is: ' + favNum);
  // Main loop for number guessing game
  for (var i = 0; i < 4; i++) {
    var userGuess = parseInt(prompt('Can you guess my favorite number?'));
    console.log('User was asked to guess favorite number and responded: ' + userGuess);

    if (userGuess === favNum) {
      alert('Answer Correct');
      correctAnswers++;
      break;
    } else if (userGuess < favNum) {
      alert('Answer is too low.');
    } else if (userGuess > favNum) {
      alert('Answer is too high.');
    } else {
      alert('That was an invalid response!');
    }
  }
}

// QUESTION 7 - MULTI-ANSWER QUESTION
function question7() {
  var answerArray = ['united states', 'south korea', 'england'];
  var y = false;
  var x = 6;

  while (y === false && x > 0) {
    var answer7 = prompt('What countries have I lived in?').toLowerCase().trim();
    console.log('User was asked which countries I\'ve lived in and responded: ' + answer7);

    for (var j = 0; j < answerArray.length; j++) {

      if (answer7 === answerArray[j]) {
        alert('That is correct!');
        y = true;
        correctAnswers++;
      }
    }
    if (y === false) {
      alert('That was incorrect, try again!');
    }
    //decrement total chances
    x--;

    if (y === true || x === 0) {
      alert('I\'ve actually lived in the United States, South Korea, and England.');
    }
  }
}

// Final scores announcement
function finalScore() {
  alert('You got ' + correctAnswers + ' out of 7 questions correct, ' + userName + '! Better luck next time.');
}

function startGame() {
  helloName();
  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
  question7();
  finalScore();
}

startGame();