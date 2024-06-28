popup = document.querySelector("#popup");
roundSelector = document.querySelector("#rounds");
roundSelectBox = document.querySelector("#roundSelectionBox");
startBtn = document.querySelector("#startBtn");
nextBtn = document.querySelector("#nextBtn");
restartBtn = document.querySelector("#restartBtn");
closebtn = document.querySelector("#close");
gameControls = document.querySelectorAll(".gameControls");
userControls = document.querySelectorAll(".userControls");
computerControls =  document.querySelectorAll(".computerControls");
roundId = document.querySelector("#roundNum");
roundSpan = roundId.querySelector("span");
countDown = document.querySelector("#countDown");
userScore = document.querySelector("#userScore");
computerScore = document.querySelector("#computerScore");

function openPopUp (){
    addclasses([popup], ["hidden"]);
}

function closePopUp (){
    removeClasses([popup],["hidden"])
}

function addclasses (elements, classes) {
    elements.forEach(element => {
        classes.forEach(className => {
            element.classList.remove(className)
        })
        
    });
};

function removeClasses(elements, classes){
    elements.forEach(element => {
        classes.forEach(className => {
            element.classList.add(className)
        })
    })
}