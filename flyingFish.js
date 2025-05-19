
class Fish  {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.z = width;
    this.a = width;
    this.display = true;
    this.size = 1;
    this.img = loadImage("assets/fish1.png");
    this.img2 = loadImage("assets/fish2.png");
    
    this.choice = 0;
    this.choice2 = 0;
  }
  show() {
    image(this.img, this.x, this.y, 32 * this.size, 32 * this.size);
    image(this.img2, this.z, this.a, 32 * this.size, 32 * this.size);
    image(this.img, this.x, this.y, 32 * this.size, 32 * this.size);
  }

  update() {
    this.choice = (noise(this.x*0.01)*height) + height/3.7;
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
