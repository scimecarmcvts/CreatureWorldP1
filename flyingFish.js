// Name: Ekansh Simgekar
// Date: 6/2/25
// Project Name: Creature Lab: Fishes (Vector Update)
// Extra: 
 
class Fish  {
  constructor() {
    this.position = createVector(random(0, width), random(height * 0.3, height * 0.7));
this.position2 = createVector(random(width, 0), random(height * 0.3, height * 0.7));
    this.velocity = createVector(2,0);
    this.acceleration = createVector(0.1,0.1);
    this.display = true;
    this.size = random(1,2);
    this.img = loadImage("assets/fish1.png");
    this.img2 = loadImage("assets/fish2.png");
    this.choice = 0;
    this.choice2 = 0;
  }
  show() {
    image(this.img, this.position.x, this.position.y, 32 * this.size, 32 * this.size);
    image(this.img2, this.position2.x, this.position2.y, 32 * this.size, 32 * this.size);
  }

  update() {
    
    this.position.add(this.velocity);

    if (this.position.x > width) {
      this.position.x = 0; 
    }
  
    this.position2.sub(this.velocity);
  
    if (this.position2.x < 0) {
      this.position2.x = width; 
    }
  }

}
