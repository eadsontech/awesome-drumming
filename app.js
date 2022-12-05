
const drumBtn = document.querySelectorAll(".drum").length;


for(let i = 0; i < drumBtn; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        let buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
};

document.addEventListener("keypress", function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
});

function makeSound(key){
    switch (key) {

            case "w":
                let audio = new Audio("./sound/tom-1.mp3");
                audio.play();

                break;
                case "a":
                    let audio2 = new Audio("./sound/tom-2.mp3");
                audio2.play();

                break;
                case "s":
                    let audio3 = new Audio("./sound/tom-3.mp3");
                audio3.play();

                break;
                case "d":
                    let audio4 = new Audio("./sound/tom-4.mp3");
                audio4.play();
                break;
                
                case "j":
                    let audio5 = new Audio("./sound/snare.mp3");
                audio5.play();
                break;

                case "k":
                    let audio6 = new Audio("./sound/crash.mp3");
                audio6.play();
                break;

                case "l":
                    let audio7 = new Audio("./sound/kick-bass.mp3");
                audio7.play();
                break;

            default: 
        }
}

// button animation

function buttonAnimation(currentKey){
let activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){
    activeButton.classList.remove("pressed")
}, 100)
}
// date

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// practice

// function add(num1, num2){
// return num1 + num2;
// }

// function subtract(num1, num2){
// return num1 - num2;
// }

// function multiply (num1, num2){
// return num1 * num2;
// }

// function divide (num1, num2){
// return num1 / num2;
// }

// function calculator(num1, num2,operator){
//     return operator(num1, num2);
// }

// const result = calculator(2, 4, subtract);

// console.log(result);
