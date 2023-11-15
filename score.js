// Iteration 5: Store the player score and display it on the game over screen
var score = localStorage.getItem("score");
var sBoard = document.getElementById("score-board");

var againButton = document.getElementById("play-again-button");
sBoard.innerHTML = score;

againButton.onclick = () => {
  window.location= "./game.html";
};