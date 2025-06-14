//Name: Nysa Patel
//Class: 1A CIS Intro to Java
//Project: Creature Lab 1.1
//Date: 06/05/25
//Extra: When shark touches edge, the image frame changes and slight bobbing up and down using sine

class Shark {
  constructor(img) {
    this.position = createVector(50, 300);
    this.position.x = random(width);
    this.position.y = height/2;
    this.display = true;
    this.size = 5;
    this.dir = 1;
    this.speed = 10;
    this.currentframe = 0;
    this.img = loadImage("./assets/shark.png");
    this.frameTimer = 0;
    this.velocity = createVector(1,0.25);
    this.acceleration= createVector(0.0000000001, 0.0000000001);
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
    this.position.y += sin(frameCount * 0.1) * 1;

}
  }
