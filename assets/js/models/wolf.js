class Wolf {
  constructor(ctx) {
    this.ctx = ctx;

    this.y = 430;

    this.vx = 5;
    this.vy = 0;

    this.w = 80;
    this.h = 125;
    this.x = this.ctx.canvas.width + this.w;

    /* this.dist = Math.random() * 100 + 300
        this.x = Math.random() > 0.5 ? 0 - this.dist : this.dist*/

    this.img = new Image();
    this.img.tick = 0;
    this.img.frames = 4;
    this.img.frameIndex = 0;
    this.img.src = "./assets/img/wolf2.png";
  }

  draw() {
    this.img.tick++;

    if (this.img.tick >= 10) {
      this.img.tick = 0;
      this.animate();
    }

    // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    this.ctx.drawImage(
      this.img,
      0,
      (this.img.frameIndex * this.img.height) / this.img.frames,
      this.img.width,
      this.img.height / 4,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  move() {
    this.x -= this.vx;
  }

  animate() {
    this.img.frameIndex++;

    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0;
    }
  }
  isVisible() {
    return (
      this.x < this.ctx.canvas.width * 2 && this.x > 0 - this.ctx.canvas.width
    );
  }

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
