
class Cactus {
  constructor(img, size, x, y) {
    this.img = img;
    this.size = size;
    this.y = y;
    
    this.x = x;

    this.maxAngle = 0.2; // maximum sway
    this.angle = 0;
    
    this.noiseSpeed = 0.01;
    this.xOffset = random(200,500);
  }

  update( ) {
    //organic movement with noise
    
    let noiseV = noise(this.xOffset);
    
    this.angle = map(noiseV, 0, 1, -this.maxAngle, this.maxAngle);
    
    this.xOffset = this.xOffset + this.noiseSpeed;
  }

  show( ) {
 push(); translate(this.x, this.y);
    //scale(1,-1);
    
    shearX(this.angle);
  imageMode(CENTER);
    
  image(this.img, 0, 0, this.size, this.size);
    pop();
  }

  display() { this.show(); }  // also shows the cactus
}
