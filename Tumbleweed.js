
class Tumbleweed {
constructor() {
  this.rotato = 0;
  this.n = random(1000);
  this.position = createVector(random(width), random(height / 4, height));
  this.display = true;
  this.velocity = createVector(random(-2, 2), 0);
  this.acceleration = createVector(0,0);
  this.size = 1.5;
  this.img = loadImage("assets/tumbler.png");
  this.px = this.position.x;
}
show(){
  angleMode(DEGREES);
  imageMode(CENTER);
  push();
  translate(this.position.x, this.position.y);
  rotate(this.rotato);
  image(this.img, 0, 0, 32 * this.size, 32 * this.size);
  pop();
  this.px = this.position.x;
}
update(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  let xDif = this.px - this.position.x;
 this.rotato += (xDif*-5);
 this.acceleration.mult(0);
 if (this.position.x > width) {
  this.position.x = 0;
} else if (this.position.x < 0) {
  this.position.x = width;
}

if (this.position.y > height) {
  this.position.y = 0;
} else if (this.position.y < 0) {
  this.position.y = height;
}

}
}