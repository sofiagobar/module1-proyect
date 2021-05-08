class Shooterwolf extends Wolf {
    constructor(ctx){
        super(ctx)
        this.rottenApples = []
        
        
        //console.log(this)

        this.firetick = 0
    }

    draw(){
        super.draw()
        this.rottenApples.forEach(a => a.draw())
    }

    move(){
        super.move()
        this.firetick++
        if (this.firetick > 100) {
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

        console.log('dispara')
    }

    clearRottenApples() {
        this.apples = this.rottenApples.filter(a => a.isVisible())
    };
}