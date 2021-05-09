class Shooterwolf extends Wolf {
    constructor(ctx){
        super(ctx)

        this.img.src = "./assets/img/shooterwolf.png";

        this.rottenApples = []
        
        this.firetick = 0
    }

    draw(){
        super.draw()
        this.rottenApples.forEach(a => a.draw())
    }

    move(){
        super.move()
        this.firetick++
        if (this.firetick > 45) {
            this.firetick = 0
            this.fire()
        }
        this.rottenApples.forEach(a => a.move())
    }
    
    fire() {
        const rottenApple = new RottenApple(
            this.ctx, 
            this.x, 
            this.y + this.h / 2
            )
        this.rottenApples.push(rottenApple)
    }

    clearRottenApples() {
        this.apples = this.rottenApples.filter(a => a.isVisible())
    };
}