// get a handle on the variables
var timerE1 = document.getElementById("timerQuestion");
var scoreBoard = document.getElementById("scoreboard");
var startButton = document.getElementById("start");
var questionOne = document.getElementById("questionOne");
var startButton = document.getElementById("start");
var startQuiz = document.getElementById("startQuiz");
var confirmAnswer = document.getElementById("confirm");
var numCorrect = 0;
var numIncorrect = 0;


var questionOneQues = document.createElement("div");
var questionOneList = document.createElement("ol");
var questionOneAnswerA = document.createElement("li");
var questionOneAnswerABut = document.createElement("button");
var questionOneAnswerB = document.createElement("li");
var questionOneAnswerBBut = document.createElement("button");
var questionOneAnswerC = document.createElement("li");
var questionOneAnswerCBut = document.createElement("button");
var questionOneAnswerD = document.createElement("li");
var questionOneAnswerDBut = document.createElement("button");

// needs to have a timer
function countdown() {
    var timeLeft = 20;
  
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerE1.textContent = timeLeft + (" seconds left");
  
        if (timeLeft===0) {
          clearInterval(timeInterval);
          timerE1.textContent = "time has expired";
        } 
    }, 1000);
  }

// start button to begin the quiz
function callQuestionOne() {
    questionOne.textContent = ("Question 1")
    questionOneQues.textContent = ("The question");
    questionOneAnswerABut.textContent = ("Answer A");
    questionOneAnswerBBut.textContent = ("Answer A");
    questionOneAnswerCBut.textContent = ("Answer A");
    questionOneAnswerDBut.textContent = ("Answer A");
    console.log(questionOneAnswerA);
    console.log(questionOneAnswerB);
    console.log(questionOneAnswerC);
    console.log(questionOneAnswerD);
    console.log(questionOneQues);
    console.log(questionOne);
    startButton.style.display = "none";
    startQuiz.style.display = "none";
    questionOne.appendChild(questionOneQues);
    questionOneQues.appendChild(questionOneList);
    questionOneList.appendChild(questionOneAnswerA);
    questionOneAnswerA.appendChild(questionOneAnswerABut);
    questionOneList.appendChild(questionOneAnswerB);
    questionOneAnswerB.appendChild(questionOneAnswerBBut);
    questionOneList.appendChild(questionOneAnswerC);
    questionOneAnswerC.appendChild(questionOneAnswerCBut);
    questionOneList.appendChild(questionOneAnswerD);
    questionOneAnswerD.appendChild(questionOneAnswerDBut);
    // timerE1.style.visibility = "visible";
    countdown();
    questionOneAnswerABut.addEventListener("click", function() {
        confirmAnswer.textContent = "You are correct";
    });
    questionOneAnswerBBut.addEventListener("click", function() {
        confirmAnswer.textContent = "You are incorrect";
    });
    questionOneAnswerCBut.addEventListener("click", function() {
        confirmAnswer.textContent = "You are incorrect";
    });
    questionOneAnswerDBut.addEventListener("click", function() {
        confirmAnswer.textContent = "You are incorrect";
    });

}
    
startButton.addEventListener("click", callQuestionOne);    


// change content to first question
// needs question
// needs potential answers
// needs to track the right answer
// needs to capture the user input
// needs a decision loop to determine if the answer if correct or incorrect



 // countdown();  

// needs to display number of correct answers out of total questions

// after first question is answered display second question
// same parameters
// capture right/wrong
// transition to third question
// update score

// same as second question
// capture the final score
// capture the user's initials for the score board
// takes the user to the score board
// display the results of the quiz on the highscore page
// after completion it should take the user to the high score board page
// high score board page needs a return to the main page
// restart quiz