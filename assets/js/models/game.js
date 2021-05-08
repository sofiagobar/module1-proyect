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
        this.shooterWolves = []

        this.points = 0
        this.randomTickMax =100

        this.wolfAudio = new Audio('./assets/sound/wolfHowling.mp3')
        //this.audio = new Audio('./assets/sound/80s-synth-music.mp3')
    };

    start() {
        //this.audio.play()
        this.intervalId = setInterval(() => {
            this.clear()
            this.move()
            this.draw()
            this.checkCollisions()
            this.score()
            
            if (this.tick++ > this.randomTickMax) {
                this.randomTickMax = (Math.random() * 100) + 40
                this.tick = 0;
                this.addWolf()
            }

            if (this.tick === 50) {
                this.addShooterWolf()
            }
        }, 1000 / 60)
    };

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        this.clearWolf()
    };

    draw() {
        this.background.draw()
        this.littleRedRidingHood.draw()
        this.wolves.forEach(wolf => wolf.draw())
        this.shooterWolves.forEach(shooterWolf => shooterWolf.draw())
        
    };
    
    onKeyEvent() {
        this.littleRedRidingHood.onKeyEvent(event)
    };

    move() {
        this.background.move()
        this.littleRedRidingHood.move()
        this.wolves.forEach(wolf => wolf.move())
        this.shooterWolves.forEach(shooterWolf => shooterWolf.move())
    };
    
    addWolf(){
        const newWolf = new Wolf(this.ctx)
        this.wolves.push(newWolf)
    };

    addShooterWolf () {
        console.log('entro')
        const newShooterWolf = new Shooterwolf(this.ctx)
        this.shooterWolves.push(newShooterWolf)
    };

    clearWolf() {
        this.wolves = this.wolves.filter(wolf => wolf.isVisible())
        this.shooterWolves = this.shooterWolves.filter(shooterWolf => shooterWolf.isVisible())
    };

    checkCollisions() {
        const collisionWithLittleRed = this.wolves.some(wolf => 
            wolf.collidesWith(this.littleRedRidingHood))
        if (collisionWithLittleRed) {
            this.gameOver()
        }

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

        for (let i = 0; i < this.shooterWolves.length; i++) {
            const wolf = this.shooterWolves[i];
            for (let j = 0; j < this.littleRedRidingHood.apples.length; j++) {
                const apple = this.littleRedRidingHood.apples[j]
                if (wolf.collidesWith(apple)) {
                    this.points++
                    this.shooterWolves.splice(i, 1)
                    this.littleRedRidingHood.apples.splice(j, 1)
                    break;
                }
            }
        }
        
        const collisionWithShooterWolf = this.shooterWolves.some(shooterWolf => 
            shooterWolf.collidesWith(this.littleRedRidingHood))
        if (collisionWithShooterWolf) {
            this.gameOver()
        }
        /*
        for (let i = 0; i < this.shooterWolves.length; i++) {
            const wolf = this.shooterWolves[i];
            for (let j = 0; j < this.littleRedRidingHood.apples.length; j++) {
                const apple = this.littleRedRidingHood.apples[j]
                if (shooterWolf.collidesWith(apple)) {
                    this.points++
                    this.shooterWolf.splice(i, 1)
                    this.littleRedRidingHood.apples.splice(j, 1)
                    break;
                }
            }
        }
*/
        const allWolfApples = []

        for (let i = 0; i < this.shooterWolves.length; i++){
            const shooterWolf = this.shooterWolves[i]
            allWolfApples.push(...shooterWolf.rottenApples)
        } 
            console.log(allWolfApples)
        const hitPlayer = allWolfApples.some(apple => this.littleRedRidingHood.collidesWith(apple))
        if (hitPlayer){
            this.gameOver()
        }
        // iterate over wolves and add their apples to the array
        // iterate over allWolfApples and check collision with caperucita
      
    };

    score() {
        this.ctx.font = "30px Serif";
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(
            `You slayed ${this.points} wolves`, 
            50, 
            50
        )

    }

    gameOver() {
        clearInterval(this.intervalId)
        
        this.ctx.font = "40px Serif";
        this.ctx.fillStyle = 'white';
        this.ctx.textAlign = "center";
        this.ctx.fillText(
            "YOU LOSE",
            this.ctx.canvas.width / 2,
            this.ctx.canvas.height / 2
        );
        this.wolfAudio.play()
    }

    
}