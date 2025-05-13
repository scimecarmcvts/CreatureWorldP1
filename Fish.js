
class Fish  {
  constructor() {
    this.x = random(0,350);
    this.y = random(0,350);
    this.z = random(0,350);
    this.a = random(0,350);
    this.display = true;
    // this.distance = dist(this.x, this.y, this.z,this.a);
    this.size = -1;
    this.img = loadImage("assets/fish1.png");
    this.img2 = loadImage("assets/fish2.png");
    
    this.choice = 0;
    this.choice2 = 0;
  }
  show() {
    image(this.img, this.x, this.y, 32 * this.size, 32 * this.size);
    
    // image(this.img2, this.z, this.a, 32 * this.size, 32 * this.size);
  }

  update() {
    this.choice = noise(this.x*0.01)*height;
    if(this.x < width) {
      this.x += random(0,2);
      this.y = this.choice;
      
    } else {
      this.x = random(-1);
    }
    
    this.choice2 = noise(this.z*0.01)*height;
    if(this.z > 0) {
      this.z-= random(0,2);
      this.a = this.choice2;
      
    } else {
      this.z = random(windowHeight);
    }
  }

}
