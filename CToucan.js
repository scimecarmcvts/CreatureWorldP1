/**
* Name: Mason Gross
* Program Name: Visual Studio
* Date: 6/2/25
* Extra: The toucan falls to the bottom of the screen once clicked and just bounces
*/


class CToucan {
  constructor(x, y, size) {
    this.img = loadImage("assets/ToucanFrame0.png");
    this.position = createVector(x,y);
    this.mouse = createVector(mouseX, mouseY);
    this.behaviour = 0;
    this.size = size;
    this.t = 0;
    this.falling = false;
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.previousX = this.position.x;
  }
  show() {
    image(this.img, this.position.x, this.position.y, this.size, this.size);
  }
  update() {
    if(this.falling == true) {
      this.position.add(this.velocity.x, this.velocity.y);
      this.velocity.add(this.acceleration.x,this.acceleration.y);
     this.velocity.y += 0.7;
    }
    this.mouse = createVector(mouseX, mouseY);
    this.t += random(0.01,0.04);
    this.behaviour = 0 + noise(this.t) * (3);
    if (this.behaviour >= 0 && this.behaviour <= 1) {
      this.img = Tframe0;
    } else if(this.behaviour >= 1 && this.behaviour <= 2) {
      this.img = Tframe2;
    } else if(this.behaviour >= 2 && this.behaviour <= 3) {
      this.img = Tframe1;
    }
    if(mouseIsPressed == true &&
      this.mouse.x >= this.position.x - 40 &&
      this.mouse.x <= this.position.x + 40 &&
      this.mouse.y <= this.position.y + 60 &&
      this.mouse.y >= this.position.y - 60) {
      this.falling = true;
      this.velocity.add(0,2);
      this.acceleration.add(0,0.02);
    }
    if(this.position.y >= height - 200 && this.falling == true) {
      this.velocity.y *= -1;
      this.velocity.y += 3;
      if(this.position.y <= height + 70){
        this.position.y = height - 200;
      }
    }
    if(this.position.y <= 30) {
      this.position.y = 100;
    }
}
}