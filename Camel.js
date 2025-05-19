class Camel {
  constructor() {
    // set this.x to the x position of the desert area
    this.x = random(width);
    // set this.y to the height of the ground
    this.y = random(height);
    this.xoff = random(1000);
    this.camel_img = loadImage("camel.png");
    this.camelSpeed = 0.75;
    this.camelDirection = 1;
    this.display = true;
    this.size = 2;
  }

  show() {
    push();
    translate(this.x + this.camel_img.width / 2, this.y + this.camel_img.height / 2);
    if (this.camelDirection === -1) {
      scale(-1, 1);
    }
    image(this.camel_img, -this.camel_img.width / 2, -this.camel_img.height / 2);
    pop();
    this.xoff += 0.03;
  }

  update() {
    this.x += this.camelSpeed * this.camelDirection;

    let x = (noise(this.xoff) * width);

    if (x > this.x) {
      this.camelDirection = 1;
    } else if (x < this.x) {
      this.camelDirection = -1;
    }
  }
}
