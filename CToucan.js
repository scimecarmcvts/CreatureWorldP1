class CToucan {
  constructor(x, y, direction, speed, behaviour, size) {
    this.x = x;
    this.y = y;
    
    this.direction = direction;
    this.speed = speed;
    this.behaviour = behaviour;
    this.size = size;
    this.frame0 = loadImage('/assets/ToucanFrame0.png');
    this.frame1 = loadImage('/assets/ToucanFrame1.png');
    this.frame2 = loadImage('/assets/ToucanFrame2.png');
    this.img = this.frame0;
    this.frame = round(random(3));
  }
  show() {
        if (frameCount % 60 == 0) {
          this.frame++;
        }
      switch (this.frame){
        case 0:
          this.img = this.frame0;
        break;
        case 1:
          this.img = this.frame1;
        break;
        case 2:
          this.img = this.frame2;
        break;
        case 3:
          this.frame = 0;
        break;
      }
      image(this.img, this.x, this.y, this.size, this.size);
  }
  update(){
    
    
  }
}