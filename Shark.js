
class Shark {
  constructor(img) {
    this.position = createVector(300, 300);
    this.position.x = random(width);
    this.position.y = height/4 + random(height-height/4);
    this.display = true;
    this.size = 1;
    this.dir = 1;
    this.speed = 10;
    this.currentframe = 0;
    this.img = loadImage("./assets/shark.png");
    this.frameTimer = 0;
    this.velocity = createVector(1,1);
    this.acceleration= createVector(0.00000001, 0.0000001);
  }
    
show(){
    push(); 
  if (this.position.x<0)
    scale(-1, 1); 
  if(this.position.x<-width) {
    scale(1,1);
    this.position.x = width;
    if (this.position.y > 1850 || this.position.y <1920) {
      this.currentframe ==1;
      this.position.y=600;
    }
}
    if (this.currentframe == 0) {
  image(this.img, this.position.x, this.position.y, 64, 64, 32, 0, 32, 32);
    } else {
  image(this.img, this.position.x, this.position.y, 64, 64, 0, 0, 32, 32);
    }
    pop(); 
  image(this.img, this.position.x, this.position.y, 64, 64, this.currentFrame*32, 0, 32, 32);
  //image(this.img, this.position.x, this.position.y, 64, 64, this.currentFrame *frameW, 0, frameW, frameH);
  }
  
  update(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.position.x -= 3 * this.dir;
    this.frameTimer++;
    if(this.frameTimer > 10) {
      this.currentFrame = (this.currentFrame + 1) %2; //switch between the two frames
      this.frameTimer = 0;
    }
  }


}
function mouseClicked (){
    this.size*=10;
}
