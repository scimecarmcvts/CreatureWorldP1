/**
* Name: Timothy Nakev
* Program Name: Creature Lab (Camel)
* Date: 6/2/2025
* Extra: On random occasions, camels will stop and starting eating crops off of the ground.
*/

class Camel {
  constructor() {
    //set this.position.y to equal the height of the ground
    this.position = createVector(random(width), height/2)
    this.xoff = random(1000);
    this.camel_img = loadImage("assets/camel.png");
    this.targetX = this.position.x; 
    this.easing = 0.05; 
    this.camelDirection = 1;
    this.display = true;
    this.size = createVector(3, 3); 
  }

  show() {
    push();
    //use velocity and acceleration instead
    translate(this.position.x, this.position.y); 
    //scale() used because original sprite was too small. is there, perhaps, a way to turn off terture filtering so the sprite is crisp?
    scale(this.camelDirection * this.size.x); 
    image(this.camel_img, 0, 0); 
    pop();
  }

  update() {
    let newTargetX = noise(this.xoff) * width;
    //lerp() used for smooth movements from place to place instead of snappy motions
    this.targetX = lerp(this.targetX, newTargetX, 0.02);

    this.position.x = lerp(this.position.x, this.targetX, this.easing);

    if (this.targetX > this.position.x + 1) { 
      this.camelDirection = 1;
    } else if (this.targetX < this.x - 1) {
      this.camelDirection = -1;
    }

    this.xoff += 0.005; 
  }
}
