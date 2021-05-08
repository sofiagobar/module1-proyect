class Shooterwolf extends Wolf {
    constructor(ctx){
        super(ctx)
        this.rottenApples = []
        
        this.y = 100
        //console.log(this)

        //this.firetick = 0
    }

    fire() {
        const rottenApple = new RottenApple(
            this.ctx, 
            this.x + this.w, 
            this.y + this.h / 2
            )
        this.rottenApples.push(rottenApple)
        
        console.log('dispara')
    }

    clearRottenApples() {
        this.apples = this.rottenApples.filter(a => a.isVisible())
    };
}