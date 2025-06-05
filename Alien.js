class Alien {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(2, -2);
    this.acceleration = createVector(-0.01, 0.01);
    this.img = loadImage("alien with ufo.png");
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(10);
    this.position.add(this.velocity);
  
  }

  show() {
    //stroke(255);
    fill(0);
    strokeWeight(2)
    image(this.img, this.position.x, this.position.y, 2.5, 2.5);
  }
}