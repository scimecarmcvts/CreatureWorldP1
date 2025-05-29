
class Shark {
  constructor(img) {
    this.x = random(width);
    this.y = height/4 + random(height-height/4);
    this.display = true;
    this.size = 1;
    this.dir = 1;
    this.speed = 100;
    this.currentframe = 0;
    this.img = loadImage("./assets/shark.png");
    this.frameTimer = 0;
    this.velocity = createVector(300,500);
    this.acceleration= createVector(0.2, 0.2);
  }
    
show(){
    push(); 
  if (this.x<0)
    scale(-1, 1); 
  if(this.x<-width) {
    scale(1,1);
    this.x = width;
    if (this.y > 1850 || this.y <1920) {
      this.currentframe ==1;
      this.y=600;
    }
}
    if (this.currentframe == 0) {
  image(this.img, this.x, this.y, 64, 64, 32, 0, 32, 32);
    } else {
  image(this.img, this.x, this.y, 64, 64, 0, 0, 32, 32);
    }
    pop(); 
  image(this.img, this.x, this.y, 64, 64, this.currentFrame*32, 0, 32, 32);
  //image(this.img, this.x, this.y, 64, 64, this.currentFrame *frameW, 0, frameW, frameH);
  }
  
  update(){
    this.velocity.add(this.acceleration);
    this.x -= 3 * this.dir;
    this.frameTimer++;
    if(this.frameTimer > 10) {
      this.currentFrame = (this.currentFrame + 1) %2; //switch between the two frames
      this.frameTimer = 0;
    }
  }

}
