const wordArray = ['ironman', 'thor', 'spiderman', 'hawkeye', 'hulk', 'wolverine', 'deadpool', 'morbius'];

const hintArray = [
    `"Throw a little hot-rod red in there. That should help you keep a low profile."`,
    `"I went for the head..."`,
    `"Somebody's got to look out for the little guy, right?"`,
    `"The City Is Flying, We're Fighting An Army Of Robots, And I Have A Bow And Arrow. None Of This Makes Sense."`,
    `"That's my secret, Cap: I'm always angry."`,
    `"Nature made me a freak. Man made me a weapon. And God made it last too long."`,
    `"You might be wondering why the red suit. Well, that is so bad guys don't see me bleed."`,
    `“Holy Water, Really?”`

];

//Listeners
let submitButton = document.getElementById("submit-button")
let restartButton = document.getElementById("restart-button")
let guessWordButton = document.getElementById("submit-button2")

let userInput = document.getElementById("user-input")
let guessTheWord = document.getElementById("guess-input")

let wordLength = document.querySelector(".word-length-text")
let attemptsRemaining = document.querySelector(".attempt-remaining")
let winMessage = document.querySelector(".win-message")
let correctGuessCount = document.querySelector(".correct-guess-count")
let hintDisplay = document.querySelector(".hint-display")

let wrongLetters = document.querySelector(".incorrect-letters")
let correctLetters = document.querySelector(".correct-letters")

let inputCaption = document.querySelector(".input-caption2")

//Variables
let chosenWord = randomWord(wordArray.length);
let chosenHint = hintArray[index];
let splitWordArray = chosenWord.split('')
let attemptsCount = 9;
let correctGuesses = 0;

let correctGuessArray = [];
let wrongGuessArray = [];

//Displays
hintDisplay.innerText = `${chosenHint}`
attemptsRemaining.innerText = `${attemptsCount}`
wordLength.innerText = `${splitWordArray.length}`
correctGuessCount.innerText = `${correctGuesses}`

//GAME RUNNING
submitButton.addEventListener('click', () => {
    checkCorrectLetter();
        
        if (correctGuesses = splitWordArray.length) {
            inputCaption.classList.add("emphasize")  
            guessWord();

        } else if (attemptsCount < 1) {
            inputCaption.classList.add("emphasize")
            guessWord();

        } else {
            guessWord();
        }
});

restartButton.addEventListener('click', () => {
    hintDisplay.innerText = "";
    attemptsRemaining.innerText = "";
    wordLength.innerText = "";
    correctGuessCount.innerText = "";
    correctLetters.innerText = "";
    wrongLetters.innerText = "";
    winMessage.innerText = "";
    guessTheWord.value = "";

    chosenWord = randomWord(wordArray.length);
    chosenHint = hintArray[index];
    splitWordArray = chosenWord.split('')

    attemptsCount = 9;
    correctGuesses = 0;

    correctGuessArray = [];
    wrongGuessArray = [];
    
    hintDisplay.innerText = `${chosenHint}`
    attemptsRemaining.innerText = `${attemptsCount}`
    wordLength.innerText = `${splitWordArray.length}`
    correctGuessCount.innerText = `${correctGuesses}`

    return;
});

//FUNCTIONS ---------------
function randomWord(max) {
    index = Math.floor(Math.random() * max)
    return wordArray[index];
}

function checkCorrectLetter() {
    if (splitWordArray.includes(`${userInput.value}`)) {
        correctGuesses++;
        correctGuessCount.innerText = `${correctGuesses}`
        
        correctGuessArray.push(userInput.value);
        correctLetters.innerText = `${correctGuessArray}`

    } else {
        attemptsCount--;
        attemptsRemaining.innerHTML = `${attemptsCount}`;
        
        wrongGuessArray.push(userInput.value);
        wrongLetters.innerText = `${wrongGuessArray}`
    }
    userInput.value = "";
}

function guessWord() {
    guessWordButton.addEventListener('click', () => {
        if (guessTheWord.value === chosenWord) {
            winMessage.innerText = `You win! ${guessTheWord.value} was correct!`
        } else {
            winMessage.innerText = `${guessTheWord.value} was incorrect! The word was ${chosenWord}! You lose!`
        }
    });
}

//state and if condition - checks state of game
// if state is game over, then run this function, or else 

