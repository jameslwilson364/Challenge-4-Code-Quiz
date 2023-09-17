//scoreboard.html variables
var userInitials = document.getElementById("initials");
var userHighScores = document.getElementById("highScoreList");
var returnRefresh = document.getElementById("returnRefresh");
var userInitialEntry = document.createElement("form");
var userEntryBox = document.createElement("input");
var userSubmitInitials = document.createElement("button");
var userInitialsCaptured = "";
var userHighScoresList = document.createElement("ol");
var scoreboardSpan  = document.createElement("span");
var returnButton = document.createElement("button");
var refreshScoreBoard = document.createElement("button");
var highScoresListLength = 0;

// captures user initials
function enterInitials() {
    userSubmitInitials.textContent = ("Log it");
    userInitials.textContent = ("Enter Your Initials Player");
    userInitials.appendChild(userInitialEntry);
    userInitials.appendChild(userEntryBox);
    userInitials.appendChild(userSubmitInitials);
        
    userSubmitInitials.addEventListener("click", function () {
        userInitialsCaptured = userEntryBox.value;
        console.log(userInitialsCaptured);
        scoreboardLeaders();
    });
    
}

// The scoreboard for the users
function scoreboardLeaders() {
    // capture the user score from local storage and combine it with the user initials
    var userScore = localStorage.getItem("User-Score");
    //var yourScore = (userInitialsCaptured + " " + userScore);
    var yourScore = [userInitialsCaptured, userScore];
    console.log(userScore);
    console.log(yourScore);
    userInitials.style.display = "none";
    
    // store the user and score in a local storage string
    var allScores = [];
    localStorage.setItem("yourScore", JSON.stringify(yourScore));
    allScores.push(yourScore);
    console.log(yourScore);
    console.log(allScores)
    
    // append the local storage yourScore for new values
    allScores = JSON.parse(localStorage.getItem("yourScore"));
    // allScores = localStorage.getItem("yourScore");
    // var allScores2 = JSON.parse(allScores);
    console.log(allScores);

    
    
    //localStorage.setItem("allScores", JSON.stringify(allScores));
    console.log(allScores);
    console.log(allScores.length);
    

    // print all of the saved scores to the highScoresList
    userHighScores.appendChild(userHighScoresList);
    for (var i = 0; i < allScores.length; i++) {
        var allScores = allScores[i];
        var li = document.createElement("li");
        li.textContent = allScores;
        //li.setAttribute("data-index", i);
        userHighScoresList.appendChild(li);
    }
  
 // make a clear button to clear the local storage
    returnRefresh.appendChild(scoreboardSpan);
    scoreboardSpan.appendChild(refreshScoreBoard);
    refreshScoreBoard.textContent = "Wipe the board";

    refreshScoreBoard.addEventListener("click", function () {
        localStorage.setItem("yourScore", "");
    });

  // make a button that take the user back to a new quiz
    returnRefresh.appendChild(scoreboardSpan);
    scoreboardSpan.appendChild(returnButton);
    returnButton.textContent = "Retry the Quiz";

    returnButton.addEventListener("click", function () {
        location.href = "./index.html";
    });

}


    
    // localStorage.setItem("User-Initials-Historic", userInitialsCaptured);
    // localStorage.setItem("User-Score-Historic", userScore);
    // var allScores = {
    //     userName : userInitialsCaptured.value.trim(),
    //     theirScore: userScore.value.trim(),
    // };
    // console.log(allScores);
    //localStorage.setItem("allScores", JSON.stringify(allScores));

    // var allScores = JSON.parse(localStorage.getItem("User-Initials", "User-Score"));
    
    //console.log(allScores);
    //for (i=0, i<)
    


enterInitials();