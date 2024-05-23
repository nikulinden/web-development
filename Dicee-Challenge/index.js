var randomNumber1 = Math.ceil(Math.random() * 6)
var randomNumber2 = Math.ceil(Math.random() * 6)
// document.getElementsByClassName("img1")[0].src="./images/dice" + randomNumber1 + ".png"
// document.getElementsByClassName("img2")[0].src="./images/dice" + randomNumber2 + ".png"
document.querySelector(".img1").src="./images/dice" + randomNumber1 + ".png"
document.querySelector(".img2").src="./images/dice" + randomNumber2 + ".png"
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Is a WINNER!🚩";
}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Is a WINNER!🚩";
}else{
    document.querySelector("h1").innerHTML="It is a DRAW🏳‍🌈";
}

