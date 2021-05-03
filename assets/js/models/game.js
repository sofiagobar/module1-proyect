class Game {
    constructor(canvasId) {
        
        const canvas = document.getElementById(canvasId)
        this.ctx = canvas.getContext("2d")
        canvas.width = 800
        canvas.height = 600

        this.background = new Background(this.ctx)
        this.littleRedRidingHood = new LittleRedRidingHood(this.ctx)
        // this.wolf = new Wolf(this.ctx)
        
        this.tick = 0
        this.wolves = [
            new Wolf(this.ctx)
        ]

        //this.audio = new Audio('')
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear()
            this.move()
            this.draw()
            this.checkCollisions()

            if (this.tick++ > 100) {
                this.tick = 0;
                this.addWolf()
            }
        }, 1000 / 60)
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        this.clearWolf()
    }

    draw() {
        this.background.draw()
        this.littleRedRidingHood.draw()
        this.wolves.forEach(wolf => wolf.draw())
        
    }
    
    onKeyEvent() {
        this.littleRedRidingHood.onKeyEvent(event)
    }

    move() {
        this.background.move()
        this.littleRedRidingHood.move()
        this.wolves.forEach(wolf => wolf.move())
    }
    
    addWolf(){
        const newWolf = new Wolf(this.ctx)

        this.wolves.push(newWolf)

        /*if (this.tick * Math.random() < 100) {
            this.wolves.push(newWolf)
        }*/
        
    }

    clearWolf() {
        this.wolves = this.wolves.filter(wolf => wolf.isVisible())   
    }

    checkCollisions() {
        const collision = this.wolves.some(wolf => {
            const colX = (
                this.littleRedRidingHood.x + this.littleRedRidingHood.w >= wolf.x &&
                this.littleRedRidingHood.x <= wolf.x +wolf.w
            )

            const colY = this.littleRedRidingHood.y + this.littleRedRidingHood.h >= wolf.y

            return colX && colY
            
        })
        if (collision) {
            this.stop()
            
          }
    }

    stop() {
        clearInterval(this.intervalId)
    }
}