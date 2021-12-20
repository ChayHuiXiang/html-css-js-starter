/*jshint esversion: 8 */
let level = 0;
let index = 0;
let simonArray = [];
let buttonData = [
    {
        "colour":"green","audio":new Audio("sounds/green.mp3"),
    }, 
    {
        "colour":"red","audio":new Audio("sounds/red.mp3"),
    },
    {
        "colour":"yellow","audio":new Audio("sounds/yellow.mp3"),
    },
    {
        "colour":"blue","audio":new Audio("sounds/blue.mp3"),
    },
];

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

$(document).keypress(()=>{
    runGame();
});

$("[type='button']").click(function(){
    let button = $(this).attr('id');
    $(this).addClass("pressed");
    setTimeout(()=>{$(this).removeClass("pressed");},100);
    processAnswer(button);
});

function runGame(){
    let button = getRandomInt(4);
    level++;
    console.log(level);
    $("#level-title").text(`Level ${level}`);
    let buttonColour = buttonData[button].colour;
    buttonData[button].audio.play();
    $(`#${buttonColour}`).fadeOut(150).fadeIn(150);
    simonArray.push(buttonColour);
}

function processAnswer(button) {
    let correctAnswer = simonArray[index];
    if (button == correctAnswer){
        index++;
        if (index == simonArray.length){
            index = 0;
            setTimeout(()=>{runGame();},1000);
        }
    } else {
        simonArray = [];
        level = 0;
        index = 0;
        $("body").addClass("game-over");
        setTimeout(()=>{
            $("body").removeClass("game-over");
        },300);
        $("#level-title").text("Game Over, Press Any Key to Restart");
    }
}