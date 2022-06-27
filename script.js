/* 
Created with passion by Corné Adema / 0xcorne
GitHub: https://github.com/0xcorne
*/
// Constant that holds question objects with answers and correct answer
const quizQA = [
  {
    question: 'What is my name?',
    a: 'Benedictus Hobbelink',
    b: 'Riccardo van Liempt',
    c: 'Corné Adema',
    d: 'Kenan Briels',
    rightAnswer: 'c',
  },
  {
    question: 'What year was I born?',
    a: 2000,
    b: 1999,
    c: 2002,
    d: 2003,
    rightAnswer: 'a',
  },
  {
    question: 'Which city am I born in?',
    a: 'Amsterdam',
    b: 'Groningen',
    c: 'Leeuwarden',
    d: 'Eindhoven',
    rightAnswer: 'c',
  },
  {
    question: 'What was my profession before becoming a developer?',
    a: 'Music Producer',
    b: 'Electrician',
    c: 'Painter',
    d: 'Restaurant Owner',
    rightAnswer: 'a',
  },
  {
    question: 'Where did I live from November 2020 to March 2022?',
    a: 'Singapore',
    b: 'Dubai',
    c: 'London',
    d: 'Los Angeles',
    rightAnswer: 'b',
  },
];

// Grab elements from DOM
const questionContainer = document.getElementById('question_info');
const answerAContainer = document.getElementById('text_a');
const answerBContainer = document.getElementById('text_b');
const answerCContainer = document.getElementById('text_c');
const answerDContainer = document.getElementById('text_d');
const submitButton = document.getElementById('submit_answer');
const answersInput = document.querySelectorAll('.answer');

// We start at index 0, aka question 1
let getCurrentQuestion = 0;
// standard answer undefined
let answer = undefined;
// init score starts at 0
let score = 0;

// First init of the quiz
getQuiz();

// Quiz function that renders question and answers
function getQuiz() {
  // Variable that holds the current question object
  let currentQuiz = quizQA[getCurrentQuestion];

  // Changing the DOM with current question and answers
  questionContainer.innerHTML = currentQuiz.question;
  answerAContainer.innerHTML = currentQuiz.a;
  answerBContainer.innerHTML = currentQuiz.b;
  answerCContainer.innerHTML = currentQuiz.c;
  answerDContainer.innerHTML = currentQuiz.d;
}

// Check for the selected radio button
function radioSelected() {
  // This constant selects all classes with 'answer'
  const answersInput = document.querySelectorAll('.answer');

  let answer = undefined;
  // This forEach loops through all radio buttons and saves the checked value
  answersInput.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.value;
    }
  });

  return answer;
}

submitButton.addEventListener('click', () => {
  // answer checked
  const answer = radioSelected();

  // if there is an answer > answer will get compared to rightanswer >
  // if correct answer > add + 1 to score
  if (answer) {
    if (answer === quizQA[getCurrentQuestion].rightAnswer) {
      score++;
    }
    // Index gets added +1
    getCurrentQuestion++;

    // Checks if there are any questions left, if none left > alert final message + score > reload page
    if (getCurrentQuestion >= quizQA.length) {
      alert(
        `You are done! Congratulations! Your score is ${score}/${quizQA.length}!`
      );
      location.reload();
    } else {
      getQuiz();
    }

    // set radiobuttons unchecked
    answersInput.forEach((answer) => {
      answer.checked = false;
    });
  }
});
