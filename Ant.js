

class Ant {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.size = 1;
    this.direction = 1;
    this.antSpeed = random(-1, -2);
    this.antImg = loadImage("assets/ant.png");
  }

  update() {
    this.x += this.antSpeed * this.direction;
    this.y += this.antSpeed/2 * this.direction;

    if (this.x <= 0 || this.x >= width) {
      this.direction *= -1;
    }
    if (this.y <= 0 || this.y >= height) {
      this.direction *= -1;
    }
  }

  show() {
    push();
    translate(this.x, this.y);

    if (this.direction == -1) {
      scale(-1, 1);
    }

    image(this.antImg, 0, 0, 20, 20);
    pop();
  }
}
