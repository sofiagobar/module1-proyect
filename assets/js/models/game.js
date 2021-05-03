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

        this.points = 0

        //this.audio = new Audio('./assets/sound/80s-synth-music.mp3')
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear()
            this.move()
            this.draw()
            this.checkCollisions()
            //this.audio.play()
            //this.checkAppleColision()
            //this.score()

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
            this.gameOver()
        }
    }

    /*checkAppleColision() {
        const appleCollision = this.littleRedRidingHood.apples.some(apple =>{
            const appleColX = this.wolf.x + this.wolf.w >= this.apples.x &&
            this.wolf.x <= this.apples.x + this.apples.w

            const appleColY = this.apple.y + this.apple.h >= game.wolf.y

            return appleColX && appleColY

        })
        if (appleCollision){
            !apple.isVisible()
            //lobo no visible
            this.points++
        }
    }

    score(){
        
        this.ctx.font = "40px Serif";
        this.ctx.fillStyle = 'white';
        this.ctx.textAlign = "center"
        this.context.fillText(
            `Score: ${points}`, 
            350, 
            50
        );
    }*/

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