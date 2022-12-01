'use strict';

// Pair Programming @Cleland

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

let score = 0;
let nums = 3;
for (let i = 0; i < 4; i++) {


  let userQuestionSix = prompt('What number am I thinking of its a number between 1 and 7');

  if (nums < userQuestionSix) {
    alert(`${userQuestionOne} try again you're too high`);
  }
  else if (nums > userQuestionOne) {
    alert(`${userQuestionOne} try again the number is too low`);

  }
  else if (userQuestionSix === nums) {
    alert(`${userQuestionOne} that's a great guess, you are correct`);
    score++;
    break;

  }
  if (i === 3) {
    alert(`${userQuestionOne} you are all out of chances the answer was ${nums}`);

  }
}



for (let i = 0; i < 4; i++) {
  alert(`${userQuestionOne} you are all out of chances the answer was ${nums}`);
}

let favMovie = ['superbad', 'harry potter', 'good will hunting', 'knives out', 'rush hour', 'hot tub time machine'];

for (let i = 0; i < 6; i++) {
  let questionSevenGuess = prompt(`${userQuestionOne} What do you think my favorite movie is?`).toLowerCase();
  for (let j = 0; j < favMovie.length; j++) {
    if (questionSevenGuess === favMovie[5]) {
      alert('correct one of the funniest movies ever created!!!!')
      if (questionSevenGuess === favMovie[0, || 1, || 2, || 3, || 4]) {
        alert(`${userQuestionOne} all great movie but no. Please try again`);
      }
      else (questionSevenGuess === 6) {
        alert(`${userQuestionOne} you are all out of tries. My favorite movie is ${favNovie[5]}`);
      }
      score++;
      i = 6;
      break;
    }

  }
}


alert(`Thank you for participating ${userQuestionOne}! I nnow grant you access to my deppest darkest secrets!!!`);
