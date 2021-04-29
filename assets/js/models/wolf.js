class Wolf {
    constructor(ctx){
        this.ctx = ctx

        this.x = 0
        this.y = 0

        this.vx = 0
        this.vy = 0

        this.w = 0
        this.h = 0

        this.g = 0

        this.img = new Image()
        this.img.drawCount = 0
        this.img.frames = 0
        this.img.frameIndex = 0
        this.img.src = ''

        this.lightballs = []
    }
    
    draw(){}

    move(){}

    animate(){}

}