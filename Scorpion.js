
class Scorpion{
  constructor(img) {
    this.size = 1;
    this.y = random(200, height);
    this.x = random(width);
    this.img = img;
    this.xoff =random(1000);
    this.direction = 1;
  }

    update() {
       let newX = noise(this.xoff) * width;

    if (newX < this.x) {
      this.direction = -1;
    } else if (newX > this.x) {
      this.direction = 1; 
    }

    this.x = newX;
          
      
      
  }
  show() {
 

    push();
    translate(this.x, this.y); 
    scale(this.direction, 1);

    image( this.img,0, 0, 64 * this.size * this.direction, 64 * this.size);
    pop();

    this.xoff += 0.003;
  }


}