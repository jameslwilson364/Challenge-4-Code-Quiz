// get a handle on the variables
var timerE1 = document.getElementById("timerQuestion");
var scoreBoard = document.getElementById("#scoreboard");
var startButton = document.getElementById("#start");
var questionCurrent = document.getElementById("#questionFramework");

// start button to begin the quiz

// change content to first question
// needs question
// needs potential answers
// needs to track the right answer
// needs to capture the user input
// needs a decision loop to determine if the answer if correct or incorrect

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

  countdown();  

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