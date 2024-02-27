// Generate a random number between 1 and 20
let secretNumber = Math.floor(Math.random() * 20);

function checkGuess() {
  // Get the user's guess
  const userGuess = document.getElementById("guessInput").value;

  // Check if the guess is correct
  if (userGuess == secretNumber) {
    document.getElementById("result").innerHTML =
      "Congratulations! You guessed the correct number!";
    document.body.style.backgroundColor = "rgb(28, 192, 192)";
  } else if (userGuess <= secretNumber) {
    document.getElementById("result").innerHTML = "Too low!";
  } else if (userGuess >= secretNumber) {
    document.getElementById("result").innerHTML = "Too high!";
  } else {
    document.getElementById("result").innerHTML =
      "Please enter a valid number between 1 and 20.";
  }
}

function tryAgain() {
  window.location.reload();
}