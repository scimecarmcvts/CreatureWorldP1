//Nysa Vadaliya
//1A Intro to Java
// 6/5/25
//Extra: checkedges, fricition slows down after time, when the bird hits the wall it starts back at the right of the screen
class Bird {
  constructor() {
    this.position = createVector(random(width), random(height/ 4));
    this.vel = createVector(-4, random(-0.8, 0.8)); //left up and vertical movement
    this.acc = createVector(0, 0);
    this.size = 64;
    this.currentFrame = 0;
    this.frameTimer = 0;
    this.startX = random()
    this.img = loadImage("assets/bird.png");
  }

  update() {
    
    this.vel.add(this.acc);
    this.position.add(this.vel);
    this.acc.mult(0);
   // this.vel.mult(0.99);//simple friciton from vector lab slows down over time
    this.frameTimer++; 
    //changes between both of the 2 frames
    if (this.frameTimer > 10) {
      this.currentFrame = (this.currentFrame + 1) % 2;
      this.frameTimer = 0;
    }

    if (this.position.x < -this.size) {
      this.position.x = width;
    }
//making sure it stays at the top of the screen
    if (this.position.y > height / 4) {
      this.position.y = height / 4;
      this.vel.y = 0;
    }
  }

  show() {
    image(this.img, this.position.x, this.position.y, this.size, this.size, this.currentFrame * 32, 0, 32, 32);
  }

  checkEdges() {
      //left edge
  if (this.position.x < this.radius) {
    this.position.x = this.radius;
    this.velocity.x *= -1;
  } //top edge
  if (this.position.y < this.radius) {
    this.position.y = this.radius;
    this.velocity.y *= -1;
  }
  }
}