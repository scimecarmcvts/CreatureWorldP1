

class Ant {
  constructor() {
    this.position = createVector(random(width), random(height, height/3));
    this.vel = createVector(random(-3, 3), random(-3, 3));
    this.accel = createVector(random(-0.1), random(0.1));
    this.antImg = loadImage("assets/ant.png");
    this.vel.limit(3);
    this.direction = 1;
  }

  update() {

    this.vel.add(this.accel.x);
    this.position.add(this.vel.x);
     if (this.position.x <= 0) {
      this.direction = -1;
    } else if (this.position.x >= width) {
      this.direction = 1;
    }

    if (this.position.x < 0) {
      this.vel = createVector(3, random(-3, 3));
      this.accel = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
      this.position.x = 0;
    }
    if (this.position.x > width) {
      this.vel = createVector(-3, random(-3, 3));
      this.accel = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
      this.position.x = width;
    }
 
  }

  show() {
   
       push();
    translate(this.position.x, this.position.y);

    if (this.direction == -1) {
      scale(-1, 1);
    }

    image(this.antImg, 0, 0, 20, 20);
    pop();
  }
}
