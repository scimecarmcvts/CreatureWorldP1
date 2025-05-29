class Camel {
  constructor() {
    this.x = random(width);
    //set the height to the height of the ground
    this.y = height/2; 
    this.xoff = random(1000);
    this.camel_img = loadImage("assets/camel.png");
    this.targetX = this.x; 
    this.easing = 0.05; 
    this.camelDirection = 1;
    this.display = true;
    this.size = 3; 
  }

  show() {
    push();
    translate(this.x, this.y); 
    scale(this.camelDirection * this.size, this.size); 
    image(this.camel_img, 0, 0); 
    pop();
  }

  update() {
    let newTargetX = noise(this.xoff) * width;
    this.targetX = lerp(this.targetX, newTargetX, 0.02);

    this.x = lerp(this.x, this.targetX, this.easing);

    if (this.targetX > this.x + 1) { 
      this.camelDirection = 1;
    } else if (this.targetX < this.x - 1) {
      this.camelDirection = -1;
    }

    this.xoff += 0.005; 
  }
}
