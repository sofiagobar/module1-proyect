class Apple {
    constructor(ctx, x, y) {
        this.ctx = ctx

        this.x = x
        this.y = y

        this.w = 20
        this.h = 20
    
        this.vx = 10
        this.vy = 0
        this.g = 0.3
    
        this.img = new Image()
        this.img.src = './assets/img/apple.png'
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            0,
            0,
            this.img.width,
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h,
        )
        
    }

    move() {
        this.vy += this.g
        this.x += this.vx
        this.y += this.vy
    }

    animate(){}
}