// create global variables that access the DOM elements.
const questionDiv = document.querySelector("#question");
const answerDiv = document.querySelector("#answer");
const feedbackDiv = document.querySelector("#feedback");
let currentQuestion = null;

// Simulate Fetching a Random Trivia Question
function getTriviaQuestion() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // code to fetch random trivia will go here
            const index = Math.floor(Math.random() * questions.length);
            const question = questions[index];
            if (index > questions.length) {
                reject('An error occured while fetching the trivia question.');
            } else {
                resolve(question);
            }
        }, 1000);   
    });
}

// Display Trivia Question
function displayQuestion(triviaQuestion) {
  questionDiv.textContent = triviaQuestion.question;
  answerDiv.value = "";
  feedbackDiv.textContent = "";
}

// Handle the "New Question" button
document.querySelector("#questionBtn").addEventListener('click', () => {
    getTriviaQuestion().then((question) =>{   //get a random question
        currentQuestion = question;    //update the current Question variable
        displayQuestion(question);     //pass the question to the displayQuestion function
    })
    .catch((error) => {
        console.log(error); 
    })
})


// Handle the "Submit Answer" button
document.querySelector("#answerBtn").addEventListener('click', () => { 
    const userAnswer = answerDiv.value.trim().toLowerCase();  //normalizes users answer
    console.log(userAnswer, currentQuestion.answer); //logs both answers to the console to help with debugging - I thought this was allowing us to compare?
    if (userAnswer === currentQuestion.answer.toLowerCase()) {
        feedbackDiv.style.color = "green";
        feedbackMessage = "Great job! Your answer is correct.";
    } else {
        feedbackDiv.style.color = "red";
        feedbackMessage = `Sorry, that is incorrect.  The correct answer is: "${currentQuestion.answer}". Try another question!`;
    }
    feedbackDiv.textContent = feedbackMessage; 
})

// Test game

// Optional Challenge 1:  add CSS or bootstrap to make game pretty
// Optional challenge 2: Add more trivia questions to practice working with JSON
// Optional challenge 3: Create scorekeeping function
// Optional Challenge 4: Comit to Git (done)
// Add trivia API 