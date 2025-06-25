var randomNumber1 = Math.floor(Math.random()*6)+1; //generate a random number for 1st image

var randomDiceImage1 = "images/" + "dice" + randomNumber1 + ".png" //concatenate the image source like images/dice1.png

 document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1); //change the attribute(image) source acc to randomDiceImage


 var randomNumber2 = Math.floor(Math.random()*6)+1;

 var randomDiceImage2 = "images/" + "dice" + randomNumber2 + ".png"

 document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

 if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 won";

 } else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 won";

 } else {
    document.querySelector("h1").innerHTML = "Draw"
 }