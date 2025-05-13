class Camel {
  constructor() {
    // set this.x to the x position of the desert area
    this.x = random(width);
    // set this.y to the height of the ground
    this.y = random(height);
    this.xoff = random(1000);
    this.camel_img = loadImage("assets/camel.png");
    this.camel_img_flipped = loadImage("assets/camel_flipped.png");
    this.camelSpeed = 0.75;
    this.camelDirection = 1;
    this.display = true;
    this.size = 2;
  }

  show() {
    if (this.camelDirection == 1) {
      image(this.camel_img, this.x, this.y, this.size * 32, this.size * 32);
    } else {
      image(this.camel_img_flipped, this.x, this.y, this.size * 32, this.size * 32);
    }
  }

  update() {
    this.x += this.camelSpeed * this.camelDirection;

    let x = (noise(this.xoff) * width) / 15;
    this.xoff += 0.035;

    if (x > 30) {
      this.camelDirection = 1;
      this.xoff -= 0.025;
    } else if (x < 30) {
      this.camelDirection = -1;
      this.xoff += 0.025;
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
