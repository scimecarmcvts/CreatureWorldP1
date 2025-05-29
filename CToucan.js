class CToucan {
  constructor(img, x, y, size) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.behaviour = 0;
    this.size = size;
    this.t = 0;
  }
  show() {
        this.t += random(0.01,0.04);
        this.behaviour = 0 + noise(this.t) * (3);
        if (this.behaviour >= 0 && this.behaviour <= 1) {
          this.img = Tframe0;
        } else if(this.behaviour >= 1 && this.behaviour <= 2) {
          this.img = Tframe2;
        } else if(this.behaviour >= 2 && this.behaviour <= 3) {
          this.img = Tframe1;
        }
      image(this.img, this.x, this.y, this.size, this.size);     
  }
  update() {

}
}