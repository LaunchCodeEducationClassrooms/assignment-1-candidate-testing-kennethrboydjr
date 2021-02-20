const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? "
let correctAnswer = "Sally Ride"
let candidateAnswer = ""
let questions = ["Who was the first woman in space? ", "True of false: 5000 meters = 5 kilometers. ", "(5+3)/2 * 10 = ? ", "Given the array [8, 'orbit, 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "]
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3" ]
let candidateAnswers = ["", "", "", "", ""]


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question('What is your name? ');
  
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  /*candidateAnswer = input.question(question);
  console.log(`Your Answer: ${candidateAnswer}`);
  console.log(`Correct Answer: ${correctAnswer}`) */
  let i = 0;

  while (i < 5) {
    candidateAnswers[i] = input.question(questions[i]);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}`);
    console.log("");
    i++;
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  /*if (candidateAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
    correctAnswer = 1
  } else correctAnswer = 0

  let grade = (correctAnswer / 1) * 100
  console.log(`>>> Overall Grade: ${grade} (${correctAnswer} of 1 responses correct) <<<`);
  if (grade >= 80) {
    console.log(">>> Status: PASSED <<<") 
  } else console.log(">>> Status: FAILED <<<")
  return grade;*/
  let i =0;

  while (i < 5) {
    if (candidateAnswers[i].toUpperCase() == correctAnswers[i].toUpperCase()) {
      correctAnswers[i] = 1
    }else {
      correctAnswers[i] = 0
    }
    i++;
  }
let grade = ((correctAnswers[0] + correctAnswers[1] + correctAnswers[2] + correctAnswers[3] + correctAnswers[4]) / Number(correctAnswers.length)) * 100;
let sum = (correctAnswers[0] + correctAnswers[1] + correctAnswers[2] + correctAnswers[3] + correctAnswers[4]);
console.log("")
console.log(`>>> Overall Grade: ${grade}% (${sum} of 5 responses correct) <<<`);
if (grade >=80) {
  console.log(">>> Status: Passed <<<");
} else console.log(">>> Status: FAILED <<<");
return grade;
}



function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Candidate Name: ${candidateName}`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
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