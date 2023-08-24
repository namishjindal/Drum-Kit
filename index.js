

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I got clicked!");
// }

var drumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<drumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){          //Anonymous Function
        // alert("I got clicked!");
        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
        // this.style.color = "purple";

        var buttonInnerHTML = this.innerHTML;

        switch(buttonInnerHTML){
            case "w":
                var crash = new Audio("sounds/crash.mp3")
                crash.play();
                break;
            case "a":
                var kick = new Audio("sounds/kick-bass.mp3")
                kick.play();
                break;
            case "s":
                var snare = new Audio("sounds/snare.mp3")
                snare.play();
                break;
            case 'd':
                var tom1 = new Audio("sounds/tom-1.mp3")
                tom1.play();
            case 'j':
                var tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play();
            case 'k':
                var tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play();
            case 'l':
                var tom4 = new Audio("sounds/tom-4.mp3")
                tom4.play();
            default:
        }
    });
}

