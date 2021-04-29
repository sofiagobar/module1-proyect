const ctx = document.getElementById('game-canvas').getContext('2d')

const game = new Game('game-canvas')

game.start()

document.addEventListener('keydown', e => {
  game.onKeyEvent(e)
})

document.addEventListener('keyup', e => {
  game.onKeyEvent(e)
})