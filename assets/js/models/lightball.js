class Lightball {
    constructor(ctx, x, y) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.r = 5
    
        this.vx = 15
        this.vy = 0
        this.g = 0.4
    
        this.audio = new Audio('')
        //this.audio.play()

        this.img = new Image()
        this.img.drawCount = 0
        this.img.frames = 0
        this.img.frameIndex = 0
        this.img.src = ''
    }

    draw(){}

    move(){}

    animate(){}
}