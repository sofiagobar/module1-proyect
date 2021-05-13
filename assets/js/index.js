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
  const scoreButton = document.getElementById('score-button')
  const maxScore = document.getElementById('max-score')

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

  scoreButton.addEventListener('click', () => {
    document.querySelectorAll('.invisible').forEach(panel => panel.style.display = 'none');
    document.getElementById('max-score').style.display = 'block';
  
    document.getElementById('max-score').innerText = `High Score: ${localStorage.maxScore} evil wolves slayed`
  })

  maxScore.addEventListener('click', () => {
    document.querySelectorAll('.invisible').forEach(panel => panel.style.display = 'none');
    document.getElementById('game-intro').style.display = 'block';
  })

  function onGameOver(){
    document.querySelectorAll('.invisible').forEach(panel => panel.style.display = 'none');
    document.getElementById('game-restart').style.display = 'block';
  }
})


