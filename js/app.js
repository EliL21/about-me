'use strict';

let userQuestionOne = prompt( 'What is your name?');
alert(`welcome to my site ${userQuestionOne}!Please answer the following questions with yes/no or y/n`);

let questionOneGuess = prompt( 'Do you I have siblings?').toLowerCase();

if(questionOneGuess === 'yes' || questionOneGuess === 'y'){
  alert ('You are correct!');
}
else if (questionOneGuess === 'no' || questionOneGuess === 'n'){
  alert ( 'Sorry you got it wrong');
  
}
let userQuestionThree = prompt( 'Do I have children?').toLowerCase();

if(userQuestionThree === 'yes' || userQuestionThree === 'y'){
  alert ('Sorry you got it wrong ');
}
else{
  alert ( 'Yes you are coreect!');
}

let userQuestionGuess = prompt( 'Do I have any pets?').toLowerCase();
  
if(userQuestionGuess === 'yes' || userQuestionGuess === 'y'){
  alert ('Sorry you got it wrong');
}
else if (userQuestionGuess === 'no' || userQuestionGuess === 'n'){
  alert ( 'You are correct!');
}

let fiveGuessQuestion = prompt('Do I own a instrument?').toLowerCase(); 
if(fiveGuessQuestion === 'yes' || fiveGuessQuestion === 'y'){
  alert ('You are correct!');
}
else if (fiveGuessQuestion === 'no' || fiveGuessQuestion === 'n'){
  alert ( 'Sorry you got it wrong');
}

let score = 0; 

let nums = 3;

let userQuestionSix =prompt ('What number am I thinking of its a number between 1 and 7');

while (nums < userQuestionSix){
  userQuestionSix = prompt(`${userQuestionOne} try again you're too high`);
 nums--
  if(userQuestionSix === nums){
    alert (`${userQuestionOne} that'sa great guess, you are correct`);
   
    score++
  }
  

  alert(`${userQuestionOne} you are correct`);
}


alert(`Thank you for participating ${userQuestionOne}! I nnow grant you access to my deppest darkest secrets!!!`);
