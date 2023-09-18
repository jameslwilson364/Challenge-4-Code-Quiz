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


// captures user initials
function enterInitials() {
    userSubmitInitials.textContent = ("Log it");
    userInitials.textContent = ("Enter Your Initials Player");
    userInitials.appendChild(userInitialEntry);
    userInitials.appendChild(userEntryBox);
    userInitials.appendChild(userSubmitInitials);
        
    userSubmitInitials.addEventListener("click", function () {
        userInitialsCaptured = userEntryBox.value;
        localStorage.setItem("User-Initials", userInitialsCaptured);
        console.log(userInitialsCaptured);
        scoreboardLeaders();
    });
    
}

// The scoreboard for the users
function scoreboardLeaders() {
    // capture the user score from local storage and combine it with the user initials
    var userScore = localStorage.getItem("User-Score");
    //var yourScore = (userInitialsCaptured + " " + userScore);
    //var yourScore = [userInitialsCaptured, userScore];
    console.log(userScore);
    console.log(userInitialsCaptured);
    //console.log(yourScore);
    userInitials.style.display = "none";
    
    // treat the variables separately; first check if localStorage is empty, then append the array if not
    if ((localStorage.getItem("Users-Scores")) === null || (localStorage.getItem("Users-Scores")) == "") {
    var userScoresStored = [];
    console.log(userScoresStored);
    userScoresStored.push(userScore);
    console.log(userScoresStored);
    console.log(userScoresStored.length);
    localStorage.setItem("Users-Scores", JSON.stringify(userScoresStored));

    var usersInitialsStored = [];
    console.log(usersInitialsStored);
    usersInitialsStored.push(userInitialsCaptured);
    console.log(usersInitialsStored);
    console.log(usersInitialsStored.length);
    localStorage.setItem("Users-Initials", JSON.stringify(usersInitialsStored));
    }  else {
    var userScoresStored = JSON.parse(localStorage.getItem("Users-Scores"));
    console.log(userScoresStored);
    userScoresStored.push(userScore);
    console.log(userScoresStored);
    console.log(userScoresStored.length);
    localStorage.setItem("Users-Scores", JSON.stringify(userScoresStored));

    var usersInitialsStored = JSON.parse(localStorage.getItem("Users-Initials"));
    console.log(usersInitialsStored);
    usersInitialsStored.push(userInitialsCaptured);
    console.log(usersInitialsStored);
    console.log(usersInitialsStored.length);
    localStorage.setItem("Users-Initials", JSON.stringify(usersInitialsStored));
    }

    // print all of the saved scores to the highScoresList
    userHighScores.appendChild(userHighScoresList);
    for (var i = 0; i < usersInitialsStored.length; i++) {
        var boardEntry = usersInitialsStored[i] + " " + userScoresStored[i];
        var li = document.createElement("li");
        li.textContent = boardEntry;
        userHighScoresList.appendChild(li);
    }
  
 // make a clear button to clear the local storage
    returnRefresh.appendChild(scoreboardSpan);
    scoreboardSpan.appendChild(refreshScoreBoard);
    refreshScoreBoard.textContent = "Wipe the board";

    refreshScoreBoard.addEventListener("click", function (event) {
        
        localStorage.setItem("Users-Scores", "");
        localStorage.setItem("Users-Initials", "");
        localStorage.setItem("User-Score", "");
        localStorage.setItem("User-Initials", "");
        userHighScoresList.replaceChildren("");
    });

  // make a button that take the user back to a new quiz
    returnRefresh.appendChild(scoreboardSpan);
    scoreboardSpan.appendChild(returnButton);
    returnButton.textContent = "Retry the Quiz";

    returnButton.addEventListener("click", function (event) {
        
        location.href = "./index.html";
    });

}
// call function
enterInitials();