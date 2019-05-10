//Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

//A string value to store the underlying character for the letter

//A boolean value that stores whether that letter has been guessed yet

//A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

  Index (j)       0    1    2    3    4   5   6
  word            p    a    n    c    a   k   e
  answerarray   ["_", "_", "_", "_", "_","_","_"]

function letter(value, guessing, func function()) {
    this.value = ["_"];
    this.guessing = boolean;
    this.age = age;
    this.language = language;
  }
  

  //1. Choosing a randow word

  var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
   ];
   var word = words[Math.floor(Math.random() * words.length)];

   //2. Creating the answer array
   var answerArray = [];
   for (var i = 0; i < word.length; i++) {
   answerArray[i] = "_";
   }
   var remainingLetters = word.length;
  
   //3. Showing the player progress

   alert(answerArray.join(" "));

   //4. Handling the player answer

   var guess = prompt("Guess a letter, or click Cancel to stop playing.");
   if (guess === null) {
   break;
   } else if (guess.length !== 1) {
  alert("Please enter a single letter.");
   } else {
x // Update the game state with the guess
   };

   //5. Updating the game status

   for (var j = 0; j < word.length; j++) {
   if (word[j] === guess) {
   answerArray[j] = guess;
   remainingLetters--;
     }
    };

    //6. Ending the game
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);


 