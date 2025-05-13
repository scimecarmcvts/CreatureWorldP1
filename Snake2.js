class Snake2 {
  constructor(img) {
    this.x = random(width);
    this.y = 300;
    this.t = 0; 
    this.size = 1;
    //this.img =  loadImage("pixil-frame-0.png");
    this.img = img;
  }

    update() {
    this.x = noise(this.t) * 200; 
    this.t += 0.002; 
      
  //Extra:
  //stops green snake from going outside screen
    if (this.x > width) {
    this.x = 0;  
    } else if (this.x < 0) {
    this.x = width;  
    } 
  }
  show() {
    image(this.img, this.x, this.y, 60 * this.size, 60 * this.size); 
  }
  
}

// 🐦‍🔥 Snaky class
class Snaky {
  constructor(img2) {
    this.x = random(width);
    this.y = 300;
    this.t = random(1000); 
    this.size = 1;
    this.img2 = img2;
  }
  
    update() {
    this.x = noise(this.t) * 300; 
    this.t += 0.009;
      
    //Extra:
    //stops red snake from going outside screen
    if (this.x > width) {
    this.x = 0;  
    } else if (this.x < 0) {
    this.x = width;  
    } 
  }
  show() {
    image(this.img2, this.x, this.y, 60 * this.size, 60 * this.size); 
  }
  
}
