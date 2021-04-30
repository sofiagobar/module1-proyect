class LittleRedRidingHood {
    constructor(ctx){
        this.ctx = ctx

        this.x = 10
        this.y = 450

        this.vx = 0
        this.vy = 0

        this.w = 50
        this.h = 80

        this.g = 0

        this.img = new Image()
        this.img.tick = 0
        this.img.frames = 12
        this.img.frameIndex = 12
        this.img.src = './assets/img/red-hood8.png'
    }

    draw(){
        this.img.tick++

        if (this.img.tick >= 5) {
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
    }

    move(){
        

    }
        


    animate(){
        this.img.frameIndex--

        if (this.img.frameIndex === 0) {
           this.img.frameIndex = 11
        }
    };

    fire(){};

    onKeyEvent(event) {
        if (event.type === 'keydown') {
            switch(event.keyCode) {}
        } else
    };

    receiveDamage(){};
}


/* this.img.tick++

        if (this.img.tick >= 13) {
            this.img.tick === 0
            this.animate()
        }
        this.img.frameIndex--
        
        if (this.img.frameIndex === 0) {
            this.img.frame = 12
        } 
        
if (this.img.tick >= 12) {
            this.img.tick = 0

            
        }
        */
        