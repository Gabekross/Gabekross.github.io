// script.js
let secretNumber = Math.floor(Math.random() * 100) + 1; // Generate secret number
let currentScore = 10;
let highScore = 0;
let guessedNumbers = [];

// DOM Elements
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');
const feedbackElement = document.getElementById('feedback');
const guessInput = document.getElementById('guess-input');
const checkBtn = document.getElementById('check-btn');
const resetBtn = document.getElementById('reset-btn');
const guessHistory = document.getElementById('guess-history');

// Modal Elements
const modal = document.getElementById('win-modal');
const correctNumberElement = document.getElementById('correct-number');
const finalScoreElement = document.getElementById('final-score');
const bestScoreElement = document.getElementById('best-score');
const playAgainBtn = document.getElementById('play-again-btn');
const gameOverModal = document.getElementById('game-over-modal');
const lostNumberElement = document.getElementById('lost-number');
const tryAgainBtn = document.getElementById('try-again-btn');

let gameActive = true;

// Function to display feedback messages
const displayMessage = (message) => {
    feedbackElement.textContent = message;
};

// Function to reset game
const resetGame = () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    currentScore = 10;
    guessedNumbers = []; // Clear guessed numbers
    gameActive = true;

    scoreElement.textContent = currentScore;
    feedbackElement.textContent = 'Guess a Number';
    guessInput.value = '';
    guessInput.disabled = false;
    checkBtn.textContent = 'Check';
    document.body.style.backgroundColor = '#d0f0f7';
    guessHistory.innerHTML = '';
    modal.classList.add('hidden');
};

// Function to handle the game logic
const handleGuess = () => {
    const guess = Number(guessInput.value);
    if (!gameActive) return;

   // Handle invalid input
    if (!guess || guess < 1 || guess > 100) {
      displayMessage('Invalid input! Enter a number between 1 and 100.');
         return;
    }

    if (guessedNumbers.includes(guess)) {
        displayMessage(`You've already guessed ${guess}. Try a new number.`);
        return;
    }
    // Add the guess to the guessed numbers array
    guessedNumbers.push(guess);
   
    // Check if the guess is correct
    if (guess === secretNumber) {
        displayMessage('🎉 Correct! You win!');
        guessInput.disabled = true; // Disable the input box

        // Update modal content
        correctNumberElement.textContent = secretNumber;
        finalScoreElement.textContent = currentScore;
        bestScoreElement.textContent = highScore > currentScore ? highScore : currentScore;

        // Update high score if necessary
        if (currentScore > highScore) {
            highScore = currentScore;
            highScoreElement.textContent = highScore;
        }

        // Show the modal
        modal.classList.remove('hidden');
        gameActive = false;
        return;
    }

    // Handle incorrect guess
    if (currentScore > 1) {
        displayMessage(guess < secretNumber ? '📉 Too low!' : '📈 Too high!');
        currentScore--;
        scoreElement.textContent = currentScore;

    
        // Add guess to history
        const historyItem = document.createElement('li');
        historyItem.textContent = `You guessed: ${guess}`;
        guessHistory.appendChild(historyItem);
    } else {
        displayMessage('💥 Game over!');
        guessInput.disabled = true;
         // Show the Game Over Modal
        lostNumberElement.textContent = secretNumber; // Show the secret number
        gameOverModal.classList.remove('hidden'); // Display the modal
          
        gameActive = false;
    }
};




// Function to handle the game logic
// const handleGuess = () => {
//     if (!gameActive) {
//         return;
//     }

//     const guess = Number(guessInput.value);

//     // Handle invalid input
//     if (!guess || guess < 1 || guess > 100) {
//         displayMessage('Invalid input! Enter a number between 1 and 100.');
//         return;
//     }

//     // Correct guess
//     if (guess === secretNumber) {
//         displayMessage('🎉 Correct! You win!');
//         guessInput.disabled = true;

//         // Show modal
//         correctNumberElement.textContent = secretNumber;
//         finalScoreElement.textContent = currentScore;
//         if (currentScore > highScore) {
//             highScore = currentScore;
//             highScoreElement.textContent = highScore;
//         }
//         bestScoreElement.textContent = highScore;
//         modal.classList.remove('hidden');
//         gameActive = false;
//         return;
//     }

//     // Wrong guess
//     if (currentScore > 1) {
//         displayMessage(guess < secretNumber ? '📉 Too low!' : '📈 Too high!');
//         currentScore--;
//         scoreElement.textContent = currentScore;

//         // Add guess to history
//         const historyItem = document.createElement('li');
//         historyItem.textContent = `You guessed: ${guess}`;
//         guessHistory.appendChild(historyItem);
//     } else {
//         displayMessage('💥 Game over!');
//         guessInput.disabled = true;
//         checkBtn.textContent = 'Play Again';
//         gameActive = false;
//     }
// };


// Reset game functionality for "Try Again" button
tryAgainBtn.addEventListener('click', () => {
    resetGame();
    gameOverModal.classList.add('hidden'); // Hide the Game Over Modal
});
// Attach event listeners
checkBtn.addEventListener('click', handleGuess);
resetBtn.addEventListener('click', resetGame);
playAgainBtn.addEventListener('click', resetGame);


