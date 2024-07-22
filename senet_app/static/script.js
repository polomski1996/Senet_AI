document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById('senet-board');
    const boardArray = [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', ''
    ];
    
    for (let i = 0; i < boardArray.length; i++) {
        const cell = document.createElement('div');
        cell.className = 'senet-cell';
        cell.id = 'cell-' + i;
        cell.dataset.index = i;
        cell.addEventListener('click', onCellClick);
        board.appendChild(cell);
    }

    // Add pawns to every second cell in the first row
    for (let i = 0; i < 10; i += 2) {
        const pawn = document.createElement('div');
        pawn.className = 'pawn player2';
        pawn.id = 'player' + (i / 2 + 1); // Adjusting id to be sequential (player1, player2, etc.)
        document.getElementById('cell-' + i).appendChild(pawn);
    }
    for (let i = 1; i < 10; i += 2) {
        const pawn = document.createElement('div');
        pawn.className = 'pawn player1';
        pawn.id = 'player' + (i / 2 + 1); // Adjusting id to be sequential (player1, player2, etc.)
        document.getElementById('cell-' + i).appendChild(pawn);
    }
});

let selectedCell = null;

function onCellClick(event) {
    const clickedCell = event.currentTarget;

    if (selectedCell) {
        if (selectedCell !== clickedCell) {
            movePawn(selectedCell.dataset.index, clickedCell.dataset.index);
        }
        // Deselect cell
        selectedCell.classList.remove('selected');
        selectedCell = null;
    } else {
        if (clickedCell.querySelector('.pawn')) {
            // Select cell
            selectedCell = clickedCell;
            selectedCell.classList.add('selected');
        }
    }
}

function movePawn(fromIndex, toIndex) {
    const fromCell = document.getElementById('cell-' + fromIndex);
    const toCell = document.getElementById('cell-' + toIndex);

    // Find the pawn in the source cell
    const pawn = fromCell.querySelector('.pawn');

    if (pawn) {
        // Remove pawn from source cell
        fromCell.removeChild(pawn);
        // Add pawn to target cell
        toCell.appendChild(pawn);
    } else {
        console.log('No pawn to move in cell ' + fromIndex);
    }
}