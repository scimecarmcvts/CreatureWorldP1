// Neel Ranadive, Creature Lab, 6/2/2025
class Jaguar{
  constructor(){
    this.position = createVector(random(50,width-50), random(350,height-50));
    this.velocity = createVector(random(-2,2), random(-2,2));
    this.acceleration = createVector(random(0.1,0.3), random(0.1,0.3))
    /*this.x = x;
    this.y = y;
    this.xOffset = random(2500);
    this.yOffset = random(1500);
    */
    this.display = true;
    this.size = 1; // this is at 100 percent size and 0.5 is 50 percent
    this.img = loadImage("assets/jaguar.png");
  }

  show(){
    image(this.img, this.position.x, this.position.y, 64 * this.size, 64 * this.size);
  }

  update(){
    /*this.x = noise(this.xOffset) * 2000;
    this.y = noise(this.yOffset) * 1500;
    this.xOffset += 0.01;
    this.yOffset += 0.001;
    */
    this.velocity.add(this.acceleration);
    this.velocity.limit(2);
    this.position.add(this.velocity);
    this.checkEdges();
  }
  checkEdges(){
    if (this.position.x >= width || this.position.x <= 0){
      this.velocity.x *= -1;
      this.acceleration.x *= -1;
    }
    if (this.position.y >= height || this.position.y <= 300){
      this.velocity.y *= -1;
      this.acceleration.y *= -1;
    }
  }
  loopThroughJaguars(){
    for (let jaguar of this.jaguars){
      jaguar.update();
      jaguar.show();
    }
  }
}