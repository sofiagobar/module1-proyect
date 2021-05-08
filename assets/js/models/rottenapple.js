class RottenApple extends Apple {
    constructor(ctx, x, y) {
        super(ctx, x, y)

        this.x = x
        this.y = y

        this.w = 20
        this.h = 20
    
        this.vx = 10
        this.vy = 0

        this.img = new Image()
        this.img.src = './assets/img/rottenapple.png'
    }

    move() {
        //this.vy += this.g
        this.x += this.vx
        this.y += this.vy
    }
}