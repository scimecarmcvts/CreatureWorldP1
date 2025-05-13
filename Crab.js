class Crab{
  constructor(){ 
    this.size = random(0.2, 0.6);
    this.x = random(width);
    this.y = random(height - 100, height);
    this.display = true;
    this.img = loadImage("assets/crab.png");
    this.currentframe = 0;
    this.newsprite = 0;
    
    this.xoff = random(1000);
  }
  
    update(){
    if(frameCount % 30 == 0){
      this.currentframe = (this.currentframe + 1) % 3;
    }
  }
  
  show(){
    
     this.x = noise(this.xoff) * width;
    image(this.img, this.x, this.y, this.size * 80, this.size * 80, this.currentframe * 32, 0, 32, 32);
    
    this.xoff += 0.005;
    
  }
  

}