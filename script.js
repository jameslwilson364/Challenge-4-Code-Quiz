// global variables
var timerE1 = document.getElementById("timerQuestion");
var scoreBoard = document.getElementById("scoreboard");
var startButton = document.getElementById("start");
var questionOne = document.getElementById("questionOne");
var questionTwo = document.getElementById("questionTwo");
var startButton = document.getElementById("start");
var startQuiz = document.getElementById("startQuiz");
var confirmAnswer = document.getElementById("confirm");
var confirmAnswer2 = document.getElementById("confirm2");
var confirmAnswer3 = document.getElementById("confirm3");
var highScore2 = document.getElementById("highscore");
var numCorrect = 0;
var numIncorrect = 0;
var userAnswer = "";


// q1 variables
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
var moveOn = document.createElement("button");
var moveOn2 = document.createElement("button");
var moveOn3 = document.createElement("button");

// the question timer
function countdown() {
    var timeLeft = 30;
  
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerE1.textContent = timeLeft + (" seconds left");
  
        if (timeLeft===0 || moveOn===true) {
          clearInterval(timeInterval);
          timerE1.textContent = "time has expired";
          numIncorrect++;
          console.log(numIncorrect);
        } else if (userAnswer === true) {
              clearInterval(timeInterval);
          } 
    }, 1000);
  } 

// Question one
function callQuestionOne() {
    questionOne.textContent = ("Question 1")
    questionOneQues.textContent = ("What is the correct function for creating items in HTML?");
    questionOneAnswerABut.textContent = (".createElement");
    questionOneAnswerBBut.textContent = (".getElementId");
    questionOneAnswerCBut.textContent = ("camelCasing");
    questionOneAnswerDBut.textContent = ("No clue bro!");
    moveOn.textContent = ("Next Question");
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
    countdown();
    var correctAnswerQ1 = "A";
    var userAnswerQ1 = "";
    
    questionOneAnswerABut.addEventListener("click", function() {
        userAnswerQ1 = "A";
        userAnswer = true;
        console.log(userAnswerQ1);
        if (userAnswerQ1 == correctAnswerQ1) {
            confirmAnswer.textContent = "You are correct ";
            numCorrect++;
            console.log(numCorrect);
            confirmAnswer.appendChild(moveOn);
            scoreBoard.textContent = "Right: " + numCorrect + " Wrong " + numIncorrect;
            moveOn.addEventListener("click", callQuestionTwo);
            console.log(moveOn);
        } else {
            confirmAnswer.textContent = "You are incorrect";
            numIncorrect++;
            console.log(numIncorrect);
            confirmAnswer.appendChild(moveOn);
            scoreBoard.textContent = "Right: " + numCorrect + " Wrong " + numIncorrect;
            moveOn.addEventListener("click", callQuestionTwo);
        }
    });
    questionOneAnswerBBut.addEventListener("click", function() {
        userAnswerQ1 = "B";
        userAnswer = true;
        if (userAnswerQ1 == correctAnswerQ1) {
            confirmAnswer.textContent = "You are correct ";
            numCorrect++;
            console.log(numCorrect);
            confirmAnswer.appendChild(moveOn);
            scoreBoard.textContent = "Right: " + numCorrect + " Wrong " + numIncorrect;
            moveOn.addEventListener("click", callQuestionTwo);
            console.log(moveOn);
        } else {
            confirmAnswer.textContent = "You are incorrect";
            numIncorrect++;
            console.log(numIncorrect);
            confirmAnswer.appendChild(moveOn);
            scoreBoard.textContent = "Right: " + numCorrect + " Wrong " + numIncorrect;
            moveOn.addEventListener("click", callQuestionTwo);
        }
    });
    questionOneAnswerCBut.addEventListener("click", function() {
        userAnswerQ1 = "C";
        userAnswer = true;
        if (userAnswerQ1 == correctAnswerQ1) {
            confirmAnswer.textContent = "You are correct ";
            numCorrect++;
            console.log(numCorrect);
            confirmAnswer.appendChild(moveOn);
            scoreBoard.textContent = "Right: " + numCorrect + " Wrong " + numIncorrect;
            moveOn.addEventListener("click", callQuestionTwo);
            console.log(moveOn);
        } else {
            confirmAnswer.textContent = "You are incorrect";
            numIncorrect++;
            console.log(numIncorrect);
            confirmAnswer.appendChild(moveOn);
            scoreBoard.textContent = "Right: " + numCorrect + " Wrong " + numIncorrect;
            moveOn.addEventListener("click", callQuestionTwo);
        }
    });
    questionOneAnswerDBut.addEventListener("click", function() {
        userAnswerQ1 = "D";
        userAnswer = true;
        if (userAnswerQ1 == correctAnswerQ1) {
            confirmAnswer.textContent = "You are correct ";
            numCorrect++;
            console.log(numCorrect);
            confirmAnswer.appendChild(moveOn);
            scoreBoard.textContent = "Right: " + numCorrect + " Wrong " + numIncorrect;
            moveOn.addEventListener("click", callQuestionTwo);
            console.log(moveOn);
        } else {
            confirmAnswer.textContent = "You are incorrect";
            numIncorrect++;
            console.log(numIncorrect);
            confirmAnswer.appendChild(moveOn);
            scoreBoard.textContent = "Right: " + numCorrect + " Wrong " + numIncorrect;
            moveOn.addEventListener("click", callQuestionTwo);
        }
    });
}


// q2 variables
var questionTwoQues = document.createElement("div");
var questionTwoList = document.createElement("ol");
var questionTwoAnswerA = document.createElement("li");
var questionTwoAnswerABut = document.createElement("button");
var questionTwoAnswerB = document.createElement("li");
var questionTwoAnswerBBut = document.createElement("button");
var moveOn = document.createElement("button");

// Question 2
function callQuestionTwo() {
    questionTwo.textContent = ("Question 2");
    questionOne.style.display = "none";
    confirmAnswer.style.display = "none";
    moveOn2.textContent = ("Next Question");
    questionTwoQues.textContent = ("True or False, you can get time intervals to stop before they are done counting");
    questionTwoAnswerABut.textContent = ("True");
    questionTwoAnswerBBut.textContent = ("False");
    questionTwo.appendChild(questionTwoQues);
    questionTwoQues.appendChild(questionTwoList);
    questionTwoList.appendChild(questionTwoAnswerA);
    questionTwoAnswerA.appendChild(questionTwoAnswerABut);
    questionTwoList.appendChild(questionTwoAnswerB);
    questionTwoAnswerB.appendChild(questionTwoAnswerBBut);
    userAnswer = false;
    countdown();
    var correctAnswerQ2 = "A";
    var userAnswerQ2 = "";
    questionTwoAnswerABut.addEventListener("click", function() {
        userAnswerQ2 = "A";
        userAnswer = true;
        console.log(userAnswerQ2);
        if (userAnswerQ2 == correctAnswerQ2) {
            confirmAnswer2.textContent = "You are correct ";
            numCorrect++;
            console.log(numCorrect);
            confirmAnswer2.appendChild(moveOn2);
            scoreBoard.textContent = "Right: " + numCorrect + " Wrong " + numIncorrect;
            moveOn2.addEventListener("click", callQuestionThree);
            
        } else {
            confirmAnswer2.textContent = "You are incorrect";
            numIncorrect++;
            console.log(numIncorrect);
            confirmAnswer2.appendChild(moveOn2);
            scoreBoard.textContent = "Right: " + numCorrect + " Wrong " + numIncorrect;
            moveOn2.addEventListener("click", callQuestionThree);
        }        
    });
    questionTwoAnswerBBut.addEventListener("click", function() {
        userAnswerQ2 = "B";
        userAnswer = true;
        console.log(userAnswerQ2);
        if (userAnswerQ2 == correctAnswerQ2) {
            confirmAnswer2.textContent = "You are correct ";
            numCorrect++;
            console.log(numCorrect);
            confirmAnswer2.appendChild(moveOn2);
            scoreBoard.textContent = "Right: " + numCorrect + " Wrong " + numIncorrect;
            moveOn2.addEventListener("click", callQuestionThree);
            
        } else {
            confirmAnswer2.textContent = "You are incorrect";
            numIncorrect++;
            console.log(numIncorrect);
            confirmAnswer2.appendChild(moveOn2);
            scoreBoard.textContent = "Right: " + numCorrect + " Wrong " + numIncorrect;
            moveOn2.addEventListener("click", callQuestionThree);
        }
    });
}


// q3 variables
var questionThreeQues = document.createElement("div");
var questionThreeList = document.createElement("ol");
var questionThreeAnswerA = document.createElement("li");
var questionThreeAnswerABut = document.createElement("button");
var questionThreeAnswerB = document.createElement("li");
var questionThreeAnswerBBut = document.createElement("button");
var questionThreeAnswerC = document.createElement("li");
var questionThreeAnswerCBut = document.createElement("button");
var moveOn = document.createElement("button");

// Question 3
function callQuestionThree() {
    questionThree.textContent = ("Question 3")
    questionTwo.style.display = "none";
    confirmAnswer2.style.display = "none";
    moveOn3.textContent = "To the Results"
    questionThreeQues.textContent = ("Whats the function for rounding decimals in JS?");
    questionThreeAnswerABut.textContent = ("toFixed()");
    questionThreeAnswerBBut.textContent = ("Math.round");
    questionThreeAnswerCBut.textContent = ("I have no idea!");
    questionThree.appendChild(questionThreeQues);
    questionThreeQues.appendChild(questionThreeList);
    questionThreeList.appendChild(questionThreeAnswerA);
    questionThreeAnswerA.appendChild(questionThreeAnswerABut);
    questionThreeList.appendChild(questionThreeAnswerB);
    questionThreeAnswerB.appendChild(questionThreeAnswerBBut);
    questionThreeList.appendChild(questionThreeAnswerC);
    questionThreeAnswerC.appendChild(questionThreeAnswerCBut);
    countdown();
    var correctAnswerQ3 = "A";
    var userAnswerQ3 = "";
    questionThreeAnswerABut.addEventListener("click", function() {
        userAnswerQ3 = "A";
        userAnswer = true;
        console.log(userAnswerQ3);
        if (userAnswerQ3 == correctAnswerQ3) {
            confirmAnswer3.textContent = "You are correct ";
            numCorrect++;
            console.log(numCorrect);
            confirmAnswer3.appendChild(moveOn3);
            scoreBoard.textContent = "Right: " + numCorrect + " Wrong " + numIncorrect;
            moveOn3.addEventListener("click", highScore);
            
        } else {
            confirmAnswer3.textContent = "You are incorrect";
            numIncorrect++;
            console.log(numIncorrect);
            confirmAnswer3.appendChild(moveOn3);
            scoreBoard.textContent = "Right: " + numCorrect + " Wrong " + numIncorrect;
            moveOn3.addEventListener("click", highScore);
        }        
    });
    questionThreeAnswerBBut.addEventListener("click", function() {
        userAnswerQ3 = "B";
        userAnswer = true;
        console.log(userAnswerQ3);
        if (userAnswerQ3 == correctAnswerQ3) {
            confirmAnswer3.textContent = "You are correct ";
            numCorrect++;
            console.log(numCorrect);
            confirmAnswer3.appendChild(moveOn3);
            scoreBoard.textContent = "Right: " + numCorrect + " Wrong " + numIncorrect;
            moveOn3.addEventListener("click", highScore);
            
        } else {
            confirmAnswer3.textContent = "You are incorrect";
            numIncorrect++;
            console.log(numIncorrect);
            confirmAnswer3.appendChild(moveOn3);
            scoreBoard.textContent = "Right: " + numCorrect + " Wrong " + numIncorrect;
            moveOn3.addEventListener("click", highScore);
        }     
        
    });
    questionThreeAnswerCBut.addEventListener("click", function() {
        userAnswerQ3 = "C";
        userAnswer = true;
        console.log(userAnswerQ3);
        if (userAnswerQ3 == correctAnswerQ3) {
            confirmAnswer3.textContent = "You are correct ";
            numCorrect++;
            console.log(numCorrect);
            confirmAnswer3.appendChild(moveOn3);
            scoreBoard.textContent = "Right: " + numCorrect + " Wrong " + numIncorrect;
            moveOn3.addEventListener("click", highScore);
            
        } else {
            confirmAnswer3.textContent = "You are incorrect";
            numIncorrect++;
            console.log(numIncorrect);
            confirmAnswer3.appendChild(moveOn3);
            scoreBoard.textContent = "Right: " + numCorrect + " Wrong " + numIncorrect;
            moveOn3.addEventListener("click", highScore);
        }     
    });
}

// send user to high score


function highScore() {
    var totalScore = ((numCorrect / 3) *100);
    var roundedScore = totalScore.toFixed(2);
    localStorage.setItem("User-Score", roundedScore);
    location.href = "./scoreboard.html";
}

// event begins the quiz
startButton.addEventListener("click", callQuestionOne);    



// needs to track the right answer
// needs to capture the user input
// needs a decision loop to determine if the answer if correct or incorrect



 



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