var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var WinningScoreDisplay = document.querySelector("p span")
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;

p1Button.addEventListener("click", function(){
    if(!gameOver){
    p1Score++;    
    if(winningScore === p1Score){
        gameOver=true;
        p1Display.classList.add("winning");
    }
    p1Display.textContent = p1Score;
    }
});
p2Button.addEventListener("click", function(){
    if(!gameOver){
    p2Score++;
    if(winningScore === p2Score){
        gameOver=true;
        p2Display.classList.add("winning");
    }
    p2Display.textContent = p2Score;
    }
});
resetButton.addEventListener("click", function(){
    reset();
})
function reset(){
p1Score = 0;
p2Score = 0;
p1Display.textContent = 0;
p2Display.textContent = 0;
p1Display.classList.remove("winning");
p2Display.classList.remove("winning");
gameOver = false;
}
numInput.addEventListener("change", function(){
    WinningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});
