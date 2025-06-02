//Silver Tucker, Intro to Java 2A, 6/2/25,Creature Lab 1.1 (Vector Update)
//Extra: 

class Snake2 {
  constructor(img) {
    this.position = createVector(random(width),300);
    this.velocity = createVector(3, 2);
    this.acceleration = createVector(0.01, 0.01);
    this.size = 1;
    this.img = img;
  }

    update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.velocity.limit(10);
    this.checkEdges();
  }
  
  checkEdges() {
    if (this.position.x > width) {
      this.position.x = 0; //right
    } else if (this.position.x < 0) {
      this.position.x = width; //left
    }

    if (this.position.y > height) {
      this.position.y = 0; //top
    } else if (this.position.y < 0) {
      this.position.y = height; //bottom
    }
  }

  show() {
    image(this.img, this.position.x, this.position.y, 60 * this.size, 60 * this.size); 
  }
  
}

// Snaky class
class Snaky {
  constructor(img2) {
    this.position = createVector(random(width),random(height));
    this.velocity = createVector(-3, 1);
    this.acceleration = createVector(0.01, 0.01);
    this.size = 1;
    this.img2 = img2;
  }
  
    update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.velocity.limit(6);
    this.checkEdges();
  }
  
  checkEdges() {
      if (this.position.x > width) {
      this.position.x = 0; //right
    } else if (this.position.x < 0) {
      this.position.x = width; //left
    }

    if (this.position.y > height) {
      this.position.y = 0; //top
    } else if (this.position.y < 0) {
      this.position.y = height; //bottom
    }
  }

  show() {
    image(this.img2, this.position.x, this.position.y, 60 * this.size, 60 * this.size); 
  }
  
}
