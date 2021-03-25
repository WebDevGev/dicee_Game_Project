var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomNumberImage1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var randomNumberImage2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);



if(randomNumber1 > randomNumber2) {
  document.querySelectorAll("p")[0].innerText = "Player 1 is win!"
}
else if (randomNumber1 < randomNumber2) {
  document.querySelectorAll("p")[1].innerText = "Player 2 is win!"
}


function refreshPage(){
    window.location.reload();
} 
