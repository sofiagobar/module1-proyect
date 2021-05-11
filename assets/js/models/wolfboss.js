class BossWolf extends Shooterwolf {
    constructor(ctx) { 
        super(ctx)

        this.w = 130
        this.h = 250

        this.y = 300
    }
    
    draw(){
        super.draw()
    }

    move() {
        if (this.x -= this.vx = 10) {
            this.x += this.vx < this.ctx.canvas.width + 50
        }
    }

    fire() {
        super.fire()
    }

    clearRottenApples() {
        super.clearRottenApples()
    }
}