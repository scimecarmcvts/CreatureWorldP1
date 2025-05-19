class Camel {
  constructor() {
    // set this.x to the x position of the desert area
    this.x = random(width);
    // set this.y to the height of the ground
    this.y = random(height);
    this.xoff = random(1000);
    this.camel_img = loadImage("assets/camel.png");
    this.camelSpeed = 0.75;
    this.camelDirection = 1;
    this.display = true;
    this.size = 2;
  }

  show() {
    push();
    scale(this.camelDirection, 1);
    pop();
    this.xoff += 0.0035;
  }

  update() {
    this.x += this.camelSpeed * this.camelDirection;

    let x = (noise(this.xoff) * width);
    

    if (x > this.x) {
      this.camelDirection = 1;
    } else if (x < this.x) {
      this.camelDirection = -1;
    }

    // set the conditional to fit the positions of the walls
    if (this.x >= width - 32) {
      this.camelDirection = -1;
      this.x -= 100;
    } else if (this.x <= 32) {
      this.camelDirection = 1;
      this.x += 100;
    }
  }
}
