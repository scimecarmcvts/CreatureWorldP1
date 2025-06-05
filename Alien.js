class Alien {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(random(2, -2), random(-2,1));
    this.acceleration = createVector(-0.01, 0.01);
    this.img = loadImage("assets/ufo.png");
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(2);
    this.position.add(this.velocity);
    if (this.position.x > width){
      this.position.x = width
      this.velocity.x *= -1
    }
   if (this.position.x < 0){
    this.position.x = 0
    this.velocity.x *= -1
  }

  }
  show() {
    image(this.img,this.position.x, this.position.y/20, 50, 50);
  }
}