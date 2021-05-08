class LittleRedRidingHood {
    constructor(ctx) {
        this.ctx = ctx

        this.x = 20
        this.y = 460
        this.floor = this.y

        this.vx = 0
        this.vy = 0

        this.w = 50
        this.h = 80

        this.g = 0.35
        
        this.jumping = false

        this.img = new Image()
        this.img.tick = 0
        this.img.frames = 12
        this.img.frameIndex = 12
        this.img.src = './assets/img/red-hood8.png'

        this.apples = []
    }

    draw() {
        this.img.tick++

        if (this.img.tick >= 10) {
            this.img.tick = 0
            this.animate()
        }

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
        
        this.clearApples()
        this.apples.forEach(a => a.draw())
    }

    move() {

        if (this.isJumping()) {
            this.vy += this.g
        }
        
        this.x += this.vx
        this.y += this.vy

        if (!this.isJumping()){
            this.vy = 0
            this.y = this.floor
        }
        
        this.apples.forEach(a => a.move())

        if (this.x + this.w > this.ctx.canvas.width) {
            this.vx = 0
        }
        if (this.x <= 0) {
            this.vx = 0
            this.x = 0
        }
    }
        
    isJumping() {
        return this.y < this.floor
    }

    animate() {
        this.img.frameIndex--

        if (this.img.frameIndex === 0) {
           this.img.frameIndex = 11
        }
    };

    fire() {
        const apple = new Apple(
            this.ctx, 
            this.x + this.w, 
            this.y + this.h / 2
            )

        this.apples.push(apple)
    };

    clearApples() {
       this.apples = this.apples.filter(a => a.isVisible())
    };

    onKeyEvent(event) {
        if (event.type === 'keydown') {

            switch(event.keyCode) {
                case KEY_RIGHT:
                    this.vx = 10
                    break;
                case KEY_LEFT:
                    this.vx = -10
                    break;
                case KEY_UP:
                    if (!this.isJumping()) {
                        this.vy = -10
                    }
                    break;
                case KEY_FIRE:
                    this.fire()
                    break;
            }
        } else {
            switch(event.keyCode){
                case KEY_RIGHT:
                    this.vx = 0
                    break;
                case KEY_LEFT:
                    this.vx = 0
                    break;
            }
        }
    };

    collidesWith(element) {
        const colX =
          element.x + element.w > this.x &&
          element.x < this.x  + this.w;
    
        const colY =
          element.y + element.h > this.y &&
          element.y < this.y + this.h;
    
        return colX && colY;
      }

}
