let randomNumber = Math.floor(Math.random() * 10) + 1;
let guessCount = 0;
document.getElementById("submitguess").onclick = function () {
  let userGuess = parseInt(document.getElementById("guessinput").value);
  let messageElement = document.getElementById("message");
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    messageElement.textContent = "Invalid input! Enter a number from 1 to 10.";
  } else {
    guessCount++;
    if (userGuess === randomNumber) {
      messageElement.textContent = "You are right! You guessed it on the " + guessCount + " try.";
    } else {
      let message = "";
      if (userGuess < randomNumber) {
        message = "Too low! Try again by adding 1.";
        userGuess += 1;
      } else {
        message = "Too high! Try again by subtracting 1.";
        userGuess -= 1;
      }
      messageElement.textContent = message;
      document.getElementById("guessinput").value = userGuess;
    }
  }
};