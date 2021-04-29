class LittleRedRidingHood {
    constructor(ctx){
        this.ctx = ctx

        this.x = 0
        this.y = 450

        this.vx = 0
        this.vy = 0

        this.w = 250
        this.h = 80

        this.g = 0

        this.img = new Image()
        this.img.tick = 0
        this.img.frames = 12
        this.img.frameIndex = 12
        this.img.src = './assets/img/red-hood.png'
    }

    draw(){
        this.img.tick++

        this.ctx.drawImage(
            this.img,
            this.img.frameIndex * this.img.width / this.img.frames,
            0,
            this.img.width / 12,
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h  
        )
    }

    move(){
        if (this.img.tick >= 12) {
            this.img.tick = 0
            
            this.img.frameIndex--

            if (this.img.frameIndex >= this.img.frames) {
                this.img.frameIndex = 0
            }
        }
        
    }

    animate(){}

    fire(){}

    onKeyEvent(){}

    receiveDamage(){}
}