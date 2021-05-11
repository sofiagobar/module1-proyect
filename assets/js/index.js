document.addEventListener('DOMContentLoaded', () => {

  const game = new Game('game-canvas')

  document.addEventListener('keydown', (event) => {
    game.onKeyEvent(event)
  })
  
  document.addEventListener('keyup', (event) => {
    game.onKeyEvent(event)
  })

  document.getElementById('start-button').onclick = () => {
    if (!game.intervalId) {
      game.start();
      displayGame();
    }
  }

  function displayGame(){
    document.getElementById('game-intro').style.display = 'none';
    document.getElementById('game-canvas').classList.remove('invisible')
  }

})

  //displayGame()
 /*function displayGame(){
  document.getElementById('game-intro').style.display = 'none';
  document.getElementById('game-canvas').classList.remove('invisible')} 
  
  

  const ctx = document.getElementById('game-canvas').getContext('2d')

  document.getElementById('start-button').onclick = () => {
  if (!game.intervalId) {
    game.start();
    displayGame()
    }
  }
  
  */
