'use strict';

var userName = prompt('Hi! Glad you are here. What is your name?');
alert('Hi, ' + userName + ', nice to meet you! I am going to ask you a few fun questions about me. Please answer with y/n or yes/no.');
console.log('User was asked their name, responded with ' + userName + '.');


var answer1 = prompt('Do you think I like pets?').toLowerCase().trim();

console.log('User was asked if I like pets, responded with ' + answer1);

if (answer1 === 'yes' || answer1 === 'y') {
  alert('Right! ' + userName + ', I don\'t have any, but I really want a quaker parrot and an ausi shepard!');
} 
else if(answer1 === 'no' || answer1 === 'n') {   
  alert('You are wrong, ' + userName + '! I love animals!');
} 
else {
  alert('Sorry! That was not a valid answer. Maybe you made a typo? No matter, let\'s crack on to the next question!');
};



var answer2 = prompt('Next question! Do you think I have any sisters?').toLowerCase().trim();

console.log('User was asked if I had any sisters, reponded with ' + answer2);

if (answer2 === 'no' || answer2 === 'n') {
	alert('Correct, ' + userName + '! I have 3 brothers split between the east and west coast!');
}
else if (answer2 === 'yes' || answer2 === 'y') {
	alert('Sorry ' + userName + ', I actually have three brothers!');
}
else {
	alert('Come on now, ' + userName + '! Follow the directions!');
};



var answer3 =  prompt('Okay, ' + userName + '. let\'s try another! Am I a military veteran?').toLowerCase().trim();

console.log('User was asked if I am a veteran, reponded with ' + answer3);

if (answer3 === 'yes' || answer3 === 'y') {
  alert('Indubitably, my dear ' + userName + '! On to the last question');
}
else if (answer3 === 'no' || answer3 === 'n'){
	alert('Incorrect ' + userName + ', I was in the Marine Corps for 5 years. Hopefully, you\'ll get this last one...');
}
else {
	alert('Maybe your keyboard is malfunctioning, eh? One last chance, onward we go!');
};



var answer4 = prompt('Now for the finale, ' + userName + '... Have I ever traveled outside the United States?').toLowerCase().trim();

console.log('User was asked if I have traveled outside the United States, reponded with ' + answer4);

if (answer4 === 'yes' || answer4 === 'y') {
	alert('How did you know, ' + userName + '?! I lived in Seoul, South Korea for 6 months a few years back. Congratulations, you are really good at guessing!');
}
else if (answer4 === 'no' || answer4 === 'n') {
	alert('Tough break, ' + userName + '. I definitely lived in South Korea for a bit a few years back. Better luck next time!');
}
else {
	alert('' + userName + ', congratulations! Your keyboard is utter rubbish. Please replace promptly.');
}