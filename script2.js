//scoreboard.html variables
var userInitials = document.getElementById("initials");
var userHighScores = document.getElementById("highScoreList");
var userInitialEntry = document.createElement("form");
var userEntryBox = document.createElement("input");
var userSubmitInitials = document.createElement("button");
var userInitialsCaptured = "";

function enterInitials() {
    userSubmitInitials.textContent = ("Log it");
    userInitials.textContent = ("Enter Your Initials Player");
    userInitials.appendChild(userInitialEntry);
    userInitials.appendChild(userEntryBox);
    userInitials.appendChild(userSubmitInitials);
    

    // event that captures the user initials
    userSubmitInitials.addEventListener("click", function () {
        // capture stuff
    });
    console.log(userInitialsCaptured)
}

enterInitials();