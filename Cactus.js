//Ayaan Patel, 6/2/2025/, Ecosystem Lab(Camel), EXTRA:
class Cactus {
  constructor(img, size, x, y) {
    this.img = img;
    this.size = size;
    this.position = createVector(x, y)

    this.maxAngle = 45; // maximum sway
    this.angle = 0;
    
    this.noiseSpeed = 0.01;
    this.velocity =.25;
    this.xOffset = random(200,500);
  }

  update( ) {
    //organic movement with noise

    let noiseV = noise(this.xOffset);
    
    this.angle = map(noiseV + this.velocity, 0, 1, -this.maxAngle, this.maxAngle);
    
    this.xOffset = this.xOffset + this.noiseSpeed;
    //this.velocity.add(this.acceleration);
    //this.velocity.limit(6);
    //this.position.add(this.velocity);

  }

  show( ) {

 push(); 
 translate(this.position.x, this.position.y);
    //scale(1,-1);
    
  shearX(this.angle);
  imageMode(CENTER);
    
  image(this.img, 0, 0, this.size, this.size);
    pop();
  }

  display() { this.show(); }  // also shows the cactus
}
