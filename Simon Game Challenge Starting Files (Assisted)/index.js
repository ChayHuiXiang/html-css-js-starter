/*jshint esversion: 8 */
const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let gameStarted = false;
let level = 0;
let index = 0;
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text(`Level ${level}`);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(colour) {
  let buttonSound = new Audio(`sounds/${colour}.mp3`);
  buttonSound.play();
}

function animatePress(colour) {
  $(`#${colour}`).addClass("pressed");
  setTimeout(()=>$(`#${colour}`).removeClass("pressed"), 100);
}

function checkAnswer(userChosenColour){
    if (userChosenColour == gamePattern[index]){
        index++;
        if (index == gamePattern.length){
            index = 0;
            setTimeout(()=>nextSequence(),1000);
        }
    } else {
        gameStarted = false;
        gamePattern = [];
        userClickedPattern = [];
        index = 0;
        level = 0;
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(()=>$("body").removeClass("game-over"),200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
    }
}

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userChosenColour);
});

$(document).keypress(()=>{
    if (!gameStarted){
        gameStarted = true;
        nextSequence();
    }
});