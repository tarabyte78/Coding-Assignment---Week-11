// Define Variables //
const squares = document.getElementsByClassName('square');
const players = ['X', 'O'];
let currentPlayer = players[0];
const endMessage = document.getElementById('endMessage');
const currentPlayerSpan = document.getElementById('currentPlayer');

// Define Winning Combinations
const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Play the Game //
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        if (squares[i].textContent !== '' || endMessage.textContent !== '') {
            return;
            }
    squares[i].textContent = currentPlayer;
        if (checkWin(currentPlayer)) {
           endMessage.textContent = `Game over! ${currentPlayer} wins!`;
            disableSquares();
            return;
            }
        if (checkTie()) {
           endMessage.textContent = `Game is tied!`;
            disableSquares();
            return;
            }
           currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
            updatePlayerTurn();
        });
    }

// Function to update the player turn display
function updatePlayerTurn() {
    currentPlayerSpan.textContent = currentPlayer;
}

// Function to disable all squares
function disableSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener('click', () => {});
    }
}

// Function to check if there's a win
function checkWin(currentPlayer) {
    for (let i = 0; i < winning_combinations.length; i++) {
        const [a, b, c] = winning_combinations[i];
            if (squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer) {
            return true;}
         }
            return false;
    }

// Function to check if it's a tie
function checkTie() {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].textContent === '') {
            return false;}
    }
            return true;
    }

// Function to restart the game
document.getElementById('restartButton').addEventListener('click', () => {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
        squares[i].addEventListener('click', () => {});
        }
        endMessage.textContent = '';
        currentPlayer = players[0];
        updatePlayerTurn();
    });