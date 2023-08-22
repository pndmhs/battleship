import { player1Board, player2Board } from "./game-controller";

const boards = document.querySelectorAll('.board');
const p1BoardDiv = document.querySelector('.player1-board');
const p2BoardDiv = document.querySelector('.player2-board');

const displayBoardGrid = () => {
  boards.forEach(item => {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const boardGrid = document.createElement('div');
        boardGrid.className = 'border border-solid border-black';
        boardGrid.setAttribute('data-row', x);
        boardGrid.setAttribute('data-col', y);
        item.appendChild(boardGrid);
      }
    }
  })

  player2Board.addEventListener('click', (e) => {
    let x = Number(e.target.dataset.row)
    let y = Number(e.target.dataset.col)
    player2Board.receiveAttack(x, y);
  })
}

const displayShip = (player, gameboard) => {
  let boardToDisplay = player.name === 'Player 1' ? p1BoardDiv : p2BoardDiv;

  for (let x = 0; x < gameboard.board.length; x++) {
    for (let y = 0; y < gameboard.board.length; y++) {
      if (gameboard.board[x][y].shipType !== null) {
        const coordinateDisplay = boardToDisplay.querySelector(`[data-row="${x}"][data-col="${y}"]`)
        coordinateDisplay.className += ' bg-gray-300'
      }
    }
  }
}

export { displayBoardGrid, displayShip }