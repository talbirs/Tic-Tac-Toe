  let gameTextHeader = document.getElementById('gameTextHeader');
  let restartButton = document.getElementById('restartButton');
  let cells = Array.from(document.getElementsByClassName('cell'));


  const PLAYER_X = '✗'
  const PLAYER_O = '𐤏'

  let currPlayer = PLAYER_X
  let occupancy = Array(9).fill(null)

  restartButton.addEventListener('click', restartClick)

  const winningcomb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]



  const startGame = () => {
    cells.forEach(cell => cell.addEventListener('click', cellClicked))
  }

  const finishGame = ()=>{
    cells.forEach(cell => cell.removeEventListener('click', cellClicked));
    gameTextHeader.innerHTML = currPlayer + " Has Won!";
  }

  function cellClicked(e) {
    const id = e.target.id
    if (!occupancy[id]) {
      occupancy[id] = currPlayer
      e.target.innerHTML = currPlayer

      if (ifHasWon()) {
        finishGame();
      }else{
        currPlayer = currPlayer == PLAYER_X ? PLAYER_O : PLAYER_X
        gameTextHeader.innerHTML = currPlayer + " Your Turn!"
      }
    }
  }

  function ifHasWon() {
    for (const comb of winningcomb) {
      let [a, b, c] = comb
      if (occupancy[a] == currPlayer && occupancy[b] == currPlayer && occupancy[c] == currPlayer) {
        return true;
      }

    }

  }


  function restartClick() {
    occupancy.fill(null)
    cells.forEach(cell => {
      cell.innerHTML = ""
    })
    currPlayer = PLAYER_X

    startGame()


  }

  startGame()




  /*
  for(let i =0; i<cells.length; i++){
    cells[i].addEventListener('click',(event)=>{
      console.log('click! ' + i);
    })

  */
