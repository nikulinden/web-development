var buttonColors = ["red", "blue", "green", "yellow"];
var gamePatterm = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}
randomChosenColor = buttonColors[nextSequence()];
gamePatterm.push(randomChosenColor)
