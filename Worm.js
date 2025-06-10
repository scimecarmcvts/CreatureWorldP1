class Worm {
    constructor(x, y, underground, above) {
      this.x = x;
      this.y = y;
      this.underground = underground;
      this.above = above;
      this.display = true;
      this.size = 0.3;
      this.xOff = 0;
      this.yOff = 0;
      this.currentSprite = this.underground;
    }
  
    update() {
      this.xOff += 0.001;
      this.yOff += 0.0005;
      this.x = width * noise(this.xOff);
      this.y = height * noise(this.yOff);
      //no show() method in the interest of simplicity, you can just change Sandworm.display
      if (this.display) {
        image(
          this.currentSprite,
          this.x,
          this.y,
          this.currentSprite.width * this.size,
          this.currentSprite.height * this.size
        );
      }
    }
    show(){


    }
  
    changeSprite() {
      let result = round(random(0, 1));
      print(result);
      if (result == 1) {
        this.currentSprite = this.above;
      } else {
        this.currentSprite = this.underground;
      }
    }
  
}