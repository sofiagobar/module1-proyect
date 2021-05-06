class Game {
    constructor(canvasId) {
        
        const canvas = document.getElementById(canvasId)
        this.ctx = canvas.getContext("2d")
        canvas.width = 800
        canvas.height = 600

        this.background = new Background(this.ctx)
        this.littleRedRidingHood = new LittleRedRidingHood(this.ctx)
                
        this.tick = 0
        this.wolves = [
            new Wolf(this.ctx)
        ]

        this.points = 0
        this.randomTickMax = 100

        //this.audio = new Audio('./assets/sound/80s-synth-music.mp3')
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear()
            this.move()
            this.draw()
            this.checkCollisions()
            this.score()
            //this.audio.play()
 
            if (this.tick++ > this.randomTickMax) {
                this.randomTickMax = (Math.random() * 100) + 40
                //console.log('tick', this.tick)
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
    }

    clearWolf() {
        this.wolves = this.wolves.filter(wolf => wolf.isVisible())
    }

    checkCollisions() {
       
        const collisionWithLittleRed = this.wolves.some(wolf => wolf.collidesWith(this.littleRedRidingHood))
        for (let i = 0; i < this.wolves.length; i++) {
            const wolf = this.wolves[i];
            for (let j = 0; j < this.littleRedRidingHood.apples.length; j++) {
                const apple = this.littleRedRidingHood.apples[j]
                if (wolf.collidesWith(apple)) {
                    this.points++
                    this.wolves.splice(i, 1)
                    this.littleRedRidingHood.apples.splice(j, 1)
                    break;
                }
            }
        }
    
        if (collisionWithLittleRed) {
            this.gameOver()
        }
    }

    score() {

        this.ctx.font = "30px Serif";
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(
            `Score: ${this.points}`, 
            60, 
            50
        );
            
    }

    gameOver() {
        clearInterval(this.intervalId)

        this.ctx.font = "40px Serif";
        this.ctx.fillStyle = 'white';
        this.ctx.textAlign = "center";
        this.ctx.fillText(
            "GAME OVER",
            this.ctx.canvas.width / 2,
            this.ctx.canvas.height / 2
        );
    }
}