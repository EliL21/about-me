'use strict';

// Pair Programming @Cleland

function guessingGame() {

  let userQuestionOne = prompt('What is your name?');
  alert(`welcome to my site ${userQuestionOne}!Please answer the following questions with yes/no or y/n`);

  let questionOneGuess = prompt('Do you I have siblings?').toLowerCase();

  if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
    alert('You are correct!');
  }
  else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
    alert('Sorry you got it wrong');

  }
  let userQuestionThree = prompt('Do I have children?').toLowerCase();

  if (userQuestionThree === 'yes' || userQuestionThree === 'y') {
    alert('Sorry you got it wrong ');
  }
  else {
    alert('Yes you are coreect!');

  }


  let userQuestionGuess = prompt('Do I have any pets?').toLowerCase();

  if (userQuestionGuess === 'yes' || userQuestionGuess === 'y') {
    alert('Sorry you got it wrong');
  }
  else if (userQuestionGuess === 'no' || userQuestionGuess === 'n') {
    alert('You are correct!');

  }

  let fiveGuessQuestion = prompt('Do I own a instrument?').toLowerCase();
  if (fiveGuessQuestion === 'yes' || fiveGuessQuestion === 'y') {
    alert('You are correct!');

  }
  else if (fiveGuessQuestion === 'no' || fiveGuessQuestion === 'n') {
    alert('Sorry you got it wrong');
  }
}
guessingGame();



function numberGame() {


  let nums = 3;
  for (let i = 0; i < 4; i++) {


    let userQuestionSix = prompt('What number am I thinking of its a number between 1 and 7');

    if (nums < userQuestionSix) {
      alert('try again you\'re too high');
    }
    else if (nums > userQuestionSix) {
      alert('try again the number is too low');

    }
    else if (parseInt(userQuestionSix) === nums) {
      alert('that\'s a great guess, you are correct');

      break;

    }
    if (i === 3) {
      alert(`you are all out of chances the answer was ${nums}`);

    }
  }
}
numberGame();

function favoriteMovie() {

  let score = 0;
  let favMovie = ['superbad', 'harry potter', 'good will hunting', 'knives out', 'rush hour', 'hot tub time machine'];

  for (let i = 0; i < 6; i++) {
    let questionSevenGuess = prompt('What do you think my favorite movie is?').toLowerCase();

    if (questionSevenGuess === favMovie[5]) {
      alert('correct one of the funniest movies ever created!!!!');
      score++;
      break;
    }
    else {
      for (let j = 0; j < favMovie.length; j++) {

        if (questionSevenGuess === favMovie[j]) {
          alert('all great movie but no. Please try again');
        }



      }

    }
  }
  if (score === 0) {
    alert(`you are all out of tries. My favorite movie is ${favMovie[5]}`);
  }
}
favoriteMovie();
