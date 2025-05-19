
class Bird {
  constructor() {
    this.x = width / 2;
    this.y = 100;
    this.size = 2; 
    this.img = loadImage("assets/bird.png");
    this.xoff = random(1000);
    this.yoff = random(1000);
    this.currentFrame = 0;
    this.frameTimer = 0;
    //this.xoff = 85;
  }

  update() {
    this.x -= 3; //to make sure it only moves to the left
    //this.x += (noise(this.xoff) - 0.5) * 2;
    this.y += (noise(this.yoff) - 0.5) * 2;
    this.xoff += 0.1;
    this.yoff += 0.01;
    
    // switch frame to animate wings
    this.frameTimer++;
    if (this.frameTimer > 10) { 
      this.currentFrame = (this.currentFrame + 1) % 2; // switch between frame 0 and 1
      this.frameTimer = 0;
    }
    
    if (this.y > height / 4) {
    this.y = height / 4;
  } //to make sure it stay at the top of the screen

    
    if (this.x > width) {
      this.x = 0;  
    } else if (this.x < 0) {
      this.x = width;  
    } //to make sure if it touches the left side it comes back on screen

    if(this.y > height) {
      this.y = height / 4;
    }
  }

  show() {
    image(this.img, this.x, this.y, 64, 64, this.currentFrame * 32, 0, 32, 32);
 
  
  } //crop the current animation frame from the sprite sheet that was uploaded and draw it at the bird's position scaled
}
