class Snake {
  constructor(x, y, img) {
     this.gridSize = 100;
     this.x = x;
       this.y = y;
     this.img = img;
    this.noiseOffsetX = 0;
       this.noiseOffsetY = 1000;
  }
  update() {
    
    this.noiseOffsetX += 0.01;
       this.noiseOffsetY += 0.01;

  
    let angle = noise(this.noiseOffsetX) * TWO_PI;
     this.x += cos(angle) * 2;
       this.y += sin(angle) * .002;


        this.x = constrain(this.x, 0, width - this.gridSize);
    this.y = constrain(this.y, 0, height - this.gridSize);
  }
  show() {
                image(this.img, this.x, this.y, this.gridSize, this.gridSize);
  }
}