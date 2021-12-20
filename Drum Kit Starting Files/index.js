/*jshint esversion: 6 */
let audio;
document.addEventListener("keypress", (event) => {
    let triggeredButton = document.querySelector(`.${event.key}`);
    triggeredButton.classList.add("pressed");
    setInterval(()=>{
        triggeredButton.classList.remove("pressed");
    });

  switch (event.key) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log(this.innerHTML);
      break;
  }
});
