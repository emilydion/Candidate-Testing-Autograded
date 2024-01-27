const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, \'Orbit\', \'Trajectory\', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ");
  return candidateName; 
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    console.log(questions[i]); 
    candidateAnswer = input.question("Enter your answer: "); 
    candidateAnswers.push(candidateAnswer); 
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let totalCorrect = 0; 
  for (let i = 0; i < questions.length; i++) {
    if (correctAnswers[i].toLowerCase() == candidateAnswers[i].toLowerCase()) {
      console.log(`${candidateAnswers[i]} is correct!`); 
      totalCorrect++; 
    } else {
      console.log(`${candidateAnswers[i]} is incorrect. The correct answer is ${correctAnswers[i]}.`); 
    }
  }
  
  let grade;  //TODO 3.2 use this variable to calculate the candidates score.

  grade = (totalCorrect / questions.length * 100); 

  if (grade >= 80) {
    console.log(`Congratulations! You passed with a ${grade}%!`);
  } else {
    console.log(`Your grade was a ${grade}%. You must have a grade of 80% or higher to pass.`);
  }

  return grade;
}

function runProgram() {
  candidateName = askForName();
  // TODO 1.1c: Greet candidate using their name //git 
  console.log("Hello, " + candidateName + "!");
  askQuestion();
  gradeQuiz(candidateAnswers);
}

runProgram(); 

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};