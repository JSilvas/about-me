'use strict';

// keeping score for total correct and incorrect answers
var correctAnswers = 0;
var totalAnswers = 0;


var userName = prompt('Hi! Glad you are here. What is your name?');
alert('Hi, ' + userName + ', nice to meet you! I am going to ask you a few fun questions about me. Please answer with y/n or yes/no.');
console.log('User was asked their name, responded with: ' + userName + '.');


// QUESTION 1

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
totalAnswers++;
console.log(correctAnswers);
console.log(totalAnswers);


// QUESTION 2

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
totalAnswers++;
console.log(correctAnswers);
console.log(totalAnswers);


// QUESTION 3

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
totalAnswers++;
console.log(correctAnswers);
console.log(totalAnswers);

//QUESTION 4

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
totalAnswers++;
console.log(correctAnswers);
console.log(totalAnswers);


// QUESTION 5

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
totalAnswers++;
console.log(correctAnswers);
console.log(totalAnswers);


// QUESTION 6 - NUMBER GUESSING GAME

var favNum = 3;
// Main loop for number guessing game
for (var i = 0; i < 4; i++) {
  var userGuess = parseInt (prompt('Can you guess my favorite number?'));
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
totalAnswers++;
//console.log(correctAnswers);
//console.log(totalAnswers);

// QUESTION 6 Solution using Functions and Reg Ex

// // Generates pseudo-random number from input range condition
// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
// console.log('Random Int function expected output (0-10): ' + getRandomInt(11));

// // Parses input string into strictly equal integer
// var filterInt = function(value) {
//   if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
//     return Number(value);
//   return NaN;
// };
// console.log('Parse Int function expected output(421): ' + filterInt('421'));

// var randNum = (getRandomInt(11));
// console.log('Super secret current game answer: ' + randNum);

// // Main loop for number guessing game
// for (var i = 0; i < 4; i++) {
//   var userGuess = prompt('Can you guess which number I picked out of 0-10?');
//   var userGuessInt = (filterInt(userGuess));

//   if (userGuessInt === randNum) {
//     alert('Answer Correct');
//     break;
//   } else if (userGuessInt < randNum) {
//     alert('answer too low');
//   } else if (userGuessInt > randNum) {
//     alert('answer too high');
//   } else {
//     alert('invalid');
//   }
// }


// QUESTION 7 - MULTI-ANSWER QUESTION

var answerArray = ['united states', 'south korea', 'england'];
var y = false;
var x = 6;

while (y === false && x > 0) {
  var answer7 = prompt('What countries have I lived in?').toLowerCase().trim();
  console.log('User was asked to guess favorite number and responded: ' + userGuess);

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


// Final scores announcement

alert('You got ' + correctAnswers + ' out of 7 questions correct, ' + userName + '! Better luck next time.');
// alert('You got ' + correctAnswers + ' out of ' + totalAnswers + ' questions correct, Bobbi! Better luck next time.')