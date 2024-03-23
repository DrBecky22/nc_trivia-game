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
    getTriviaQuestion().then((question) =>{
        currentQuestion = question;
        displayQuestion(question);
    })
    .catch((error) => {
        console.log(error);
    })
})


// Handle the "Submit Answer" button
// Test game

// Optional Challenge 1:  add CSS or bootstrap to make game pretty
// Optional challenge 2: Add more trivia questions to practice working with JSON
// Optional challenge 3: Create scorekeeping function
// Optional Challenge 4: Comit to Git (done)
// Add trivia API 