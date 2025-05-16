

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var started = false;

//To start the game -

$(document).keydown(function() {
  if (!started) {
  nextSequence();
  started = true;
  }
});


  function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);

  }

  //click funtion - user input

  $(".btn").click(function() {

    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePress(userChosenColor);

  })

  function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
      $("#" + currentColor).removeClass("pressed")
    }, 100);
    }


  // sound logic function

  function playSound(randomChosenColor) {
    new Audio("sounds/" + randomChosenColor + ".mp3").play();
  } 
