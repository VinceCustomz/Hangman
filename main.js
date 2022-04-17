// # generate a word at random and store it in a variable x
// # display the length of the word to the user x
// # correct_guesses is less than the length of the word
// # prompt the user to guess a letter 

// # if the guess is correct increment correct_guesses by 1
// # if the guess is incorrect increment incorrect_guesses by 1 
// # and draw the next part of the hangman
// # if the incorrect_guesses is greater than 8, tell the user 
// # they lost and exit the program
// # if correct_guesses is equal to the length of the word, tell the user they won


//VARIABLES
const wordArray = ['ironman', 'thor', 'spiderman'];
let submitButton = document.getElementById("submit-button")
let userInput = document.getElementById("user-input")
let wordLength = document.querySelector(".word-length-text")
let attemptsRemaining = document.querySelector(".attempt-remaining")
let winMessage = document.querySelector(".win-message")
let correctGuessCount = document.querySelector(".correct-guess-count")

let chosenWord = randomWord(wordArray.length);
let splitWordArray = chosenWord.split('')
let attemptsCount = 8;
let correctGuesses = 0;

attemptsRemaining.innerText = `${attemptsCount}`
wordLength.innerText = `${splitWordArray.length} letters`
correctGuessCount.innerText = `${correctGuesses}`

//GAME RUNNING

submitButton.addEventListener('click', checkCorrectLetter)


//FUNCTIONS ---------------



function randomWord(max) {
    index = Math.floor(Math.random() * max)
    return wordArray[index];
}

function checkCorrectLetter() {
    if (splitWordArray.includes(`${userInput.value}`)) {
        correctGuesses++;
        correctGuessCount.innerText = `${correctGuesses}`
        
    } else {
        attemptsCount--;
        attemptsRemaining.innerHTML = `${attemptsCount}`;

    }
    console.log(correctGuesses +" correct guesses")
    console.log(attemptsCount +" attempts left")

}

function checkWinGame() {
    if (correctGuesses = splitWordArray.length) {
        winMessage.innerText = `You Win! You guessed ${chosenWord}!`

    } else if (attemptsCount = 0) {
        winMessage.innerText = "You Lose! You are dead."
    } else {
    
    }
    console.log("we made it here")
}

