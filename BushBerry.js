
class BushBerry{
  constructor(){
    this.x = random(width);
    this.y = random(height/2, height);
    this.display = true;
    this.size = 1; // this is at 100 percent size and 0.5 is 50 percent
    this.img = loadImage("assets/bushberry.png");
  }

  show(){
    image(this.img, this.x, this.y, 32 * this.size, 32 * this.size);
  }
  
  update(){
    
    
  }
}