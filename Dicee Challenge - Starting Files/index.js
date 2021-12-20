/*jshint esversion: 6 */

let playerOne = getRandomInt(6) + 1;
let playerTwo = getRandomInt(6) + 1;
document.querySelector(".img1").src = `images/dice${playerOne}.png`;
document.querySelector(".img2").src = `images/dice${playerTwo}.png`;
let pageTitle = document.querySelector(".container h1");
if (playerOne < playerTwo) {
  pageTitle.textContent = "Player 2 Wins!🚩";
} else if (playerOne > playerTwo) {
  pageTitle.textContent = "🚩Player 1 Wins!";
} else {
  pageTitle.textContent = "Draw!";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
