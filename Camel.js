class Camel {
  constructor() {
    //set this.position.y to equal the height of the ground
    this.position = createVector(random(width), height/2)
    this.xoff = random(1000);
    this.camel_img = loadImage("assets/camel.png");
    this.targetX = this.position.x; 
    this.easing = 0.05; 
    this.camelDirection = 1;
    this.display = true;
    this.size = 3; 
  }

  show() {
    push();
    translate(this.position.x, this.position.y); 
    scale(this.camelDirection * this.size, this.size); 
    image(this.camel_img, 0, 0); 
    pop();
  }

  update() {
    let newTargetX = noise(this.xoff) * width;
    this.targetX = lerp(this.targetX, newTargetX, 0.02);

    this.position.x = lerp(this.position.x, this.targetX, this.easing);

    if (this.targetX > this.position.x + 1) { 
      this.camelDirection = 1;
    } else if (this.targetX < this.x - 1) {
      this.camelDirection = -1;
    }

    this.xoff += 0.005; 
  }
}
