const ctx = document.getElementById('game-canvas').getContext('2d')

const game = new Game('game-canvas')

game.start()

document.addEventListener('keydown', (event) => {
  game.onKeyEvent(event)
})

document.addEventListener('keyup', (event) => {
  game.onKeyEvent(event)
})