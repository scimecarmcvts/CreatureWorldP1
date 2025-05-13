
class Jaguar{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.xOffset = random(1000);
    this.yOffset = random(1000);
    this.display = true;
    this.size = 1; // this is at 100 percent size and 0.5 is 50 percent
    this.img = loadImage("assets/jaguar.png");
  }

  show(){
    image(this.img, this.x, this.y, 64 * this.size, 64 * this.size);
  }
  update(){
    this.x = noise(this.xOffset) * 400;
    this.y = noise(this.yOffset) * 400;
    this.xOffset += 0.01;
    //this.yOffset += 0.01;
  }
}