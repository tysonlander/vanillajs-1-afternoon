const board = [];



function play(clickedId) {
  let playerSpan = document.getElementById('player');
  let clickedElement = document.getElementById(clickedId);


  if(playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X'
    board[clickedId] = 'X'
  } else {
    playerSpan.innerText = 'X'
    clickedElement.innerText = 'O'
    board[clickedId] = 'O'
  }


  if (board[0] !== undefined && board[0] === board[1] && board[0] === board[2]) {
    alert(`${board[0]} is the winner!`);
  }
  if (board[3] !== undefined && board[3] === board[4] && board[3] === board[5]) {
    alert(`${board[3]} is the winner!`)
  }
  if (board[6] !== undefined && board[6] === board[7] && board[6] === board[8]) {
    alert(`${board[6]} is the winner!`)
  }
  if (board[0] !== undefined && board[0] === board[4] && board[0] === board[8]) {
    alert(`${board[0]} is the winner!`)
  }
  if (board[2] !== undefined && board[2] === board[4] && board[2] === board[6]) {
    alert(`${board[2]} is the winner!`)
  }
  if (board[0] !== undefined && board[0] === board[3] && board[0] === board[6]) { // vertical first column
    alert(`${board[0]} is the Winner!`)
  }
  if (board[1] !== undefined && board[1] === board[4] && board[1] === board[7]) { // vertical second column
    alert(`${board[1]} is the Winner!`)
  }
  if (board[2] !== undefined && board[2] === board[5] && board[2] === board[8]) { // vertical third column
    alert(`${board[2]} is the Winner!`)
  }
  
  const boardFull = true;

  for (let i = 0; i < 9; i++) {
    if(board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("It's a cats game")
  }

}

