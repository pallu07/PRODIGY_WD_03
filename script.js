let board = [];
let currentPlayer = 'x';
let winner = null;

for (let i = 0; i < 9; i++) {
    board.push(null);
}

document.querySelectorAll('.cell').forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (winner === null && board[index] === null) {
            board[index] = currentPlayer;
            cell.classList.add(currentPlayer);
            checkWinner();
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
        }
    });
});

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];
        if (board[combination[0]] === board[combination[1]] && board[combination[1]] === board[combination[2]] && board[combination[0]] !== null) {
            winner = board[combination[0]];
            document.getElementById('winner').innerHTML = `Player ${winner.toUpperCase()} wins!`;
            document.getElementById('winner').classList.add('winner');
            return;
        }
    }

    if (board.every(cell => cell !== null)) {
        document.getElementById('winner').innerHTML = `It's a draw!`;
        document.getElementById('winner').classList.add('winner');
    }
}