class JungleTree {
  constructor(img, x, y, size) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.size = size;
    this.var1 = loadImage("/assets/JTree1.png");
    this.var2 = loadImage("/assets/JTree2.png");
    this.chance = random(1, 2);
    this.varient = round(this.chance);
  }
  show() {
    switch (this.varient) {
      case 1:
        this.img = this.var1;
        break;
      case 2:
        this.img = this.var2;
        break;
    }
    image(this.img, this.x, this.y, this.size, this.size * 2);

  }
  update(){
    
    
  }
}
