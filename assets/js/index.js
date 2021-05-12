document.addEventListener('DOMContentLoaded', () => {

  let game = new Game('game-canvas', onGameOver)

  document.addEventListener('keydown', (event) => {
    game.onKeyEvent(event)
  })
  
  document.addEventListener('keyup', (event) => {
    game.onKeyEvent(event)
  })

  document.getElementById('game-intro').style.display = 'block';
  const startButton = document.getElementById('start-button')
  const tryAgainButton = document.getElementById('try-again-button')

  startButton.addEventListener('click', () => {
    document.querySelectorAll('.invisible').forEach(panel => panel.style.display = 'none');
    document.getElementById('game-canvas').style.display = 'block';
    game.start();
    
  })
  
  tryAgainButton.addEventListener('click', () => {
    document.querySelectorAll('.invisible').forEach(panel => panel.style.display = 'none');
    document.getElementById('game-canvas').style.display = 'block';
    game = new Game ('game-canvas', onGameOver)
    game.start();
  })

  function onGameOver(){
    document.querySelectorAll('.invisible').forEach(panel => panel.style.display = 'none');
    document.getElementById('game-restart').style.display = 'block';
  }

})




 