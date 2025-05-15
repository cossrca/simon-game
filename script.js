

var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

$(document).keydown(function() {
  nextSequence();
});

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  var currentPattern = $("#" + gamePattern[gamePattern.length - 1]);

  currentPattern.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
});

  if (randomNumber === 0) {
    new Audio("sounds/red.mp3").play();
  } 
  else if (randomNumber === 1) {
    new Audio("sounds/blue.mp3").play();
  } 
  else if (randomNumber === 2) {
    new Audio("sounds/green.mp3").play();
  } 
  else if (randomNumber === 3) {
    new Audio("sounds/yellow.mp3").play();
  } 
  else {
    new Audio("sounds/wrong.mp3").play();
  }
