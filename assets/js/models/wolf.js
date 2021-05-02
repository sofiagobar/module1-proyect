class Wolf {
    constructor(ctx){
        this.ctx = ctx

        
        this.y = 440

        this.vx = 5
        this.vy = 0

        this.w = 70
        this.h = 125
        this.x = this.ctx.canvas.width + this.w
        this.dist = Math.random() * 100 + 300

        this.img = new Image()
        this.img.tick = 0
        this.img.frames = 4
        this.img.frameIndex = 0
        this.img.src = './assets/img/wolf.png'

    }
    
    draw(){
        this.img.tick++

        if (this.img.tick >= 10) {
            this.img.tick = 0
            this.animate()
        }

        // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        this.ctx.drawImage(
            this.img,
            0,
            this.img.frameIndex * this.img.height / this.img.frames,
            this.img.width,
            this.img.height / 4,
            this.x,
            this.y,
            this.w,
            this.h  
        )
        
    }

    move(){
        this.x -= this.vx
    }

    animate(){
        this.img.frameIndex++

        if (this.img.frameIndex >= this.img.frames) {
           this.img.frameIndex = 0
        }
        
    }

}