class Game {
    constructor(canvasId) {
        
        const canvas = document.getElementById(canvasId)
        this.ctx = canvas.getContext("2d")
        canvas.width = 800
        canvas.height = 600

        this.background = new Background(this.ctx)
        this.littleRedRidingHood = new LittleRedRidingHood(this.ctx)
        this.wolf = new Wolf(this.ctx)
        this.tick = 0

        this.wolves = []

        //this.audio = new Audio('')
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear()
            this.move()
            this.draw()
        }, 1000 / 60)
        
        this.addWolf()
        if (this.tick++ > 10000) {
            this.tick = 0;
          }

    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    draw() {
        this.background.draw()
        this.littleRedRidingHood.draw()
        this.wolf.draw()
    }
    
    onKeyEvent() {
        this.littleRedRidingHood.onKeyEvent(event)
    }

    move() {
        this.background.move()
        this.littleRedRidingHood.move()
        this.wolf.move()
    }
    
    addWolf(){
        this.wolves.push(this.wolf)

    }

    clear() {
        //clear fireballs
    }
    gameOver(){

    }

   
}