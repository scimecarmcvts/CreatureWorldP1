class Snake {
  constructor(x, y, img) {
    this.gridSize = 100;
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(2);
    this.img = img;
    this.noiseOffset = random(1000);
  }


  update() {
    this.noiseOffset += 0.01;
    let angleWiggle = map(noise(this.noiseOffset), 0, 1, -0.05, 0.05);
    this.vel.rotate(angleWiggle);
    this.vel.setMag(2);
    this.pos.add(this.vel);
    if (this.pos.x < 0 || this.pos.x > width - this.gridSize) {
      this.vel.x *= -1;
      this.pos.x = constrain(this.pos.x, 0, width - this.gridSize);
    }
    if (this.pos.y < 0 || this.pos.y > height - this.gridSize) {
      this.vel.y *= -1;
      this.pos.y = constrain(this.pos.y, 0, height - this.gridSize);
    }
    if (this.pos.y < 310) {
      this.pos.y = 310;
    }
  }
//I added an extra which is a color tint to objects based of the mouse
  show() {
    let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
    if (d < 150) {
      tint(255, 100, 100);
    } else {
      noTint();
    }
    image(this.img, this.pos.x, this.pos.y, this.gridSize, this.gridSize);
  }
}
