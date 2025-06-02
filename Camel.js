/**
* Name: Timothy Nakev
* Program Name: Creature Lab (Camel)
* Date: 6/2/2025
* Extra: On random occasions, camels will stop and starting eating crops off of the ground.
*/

class Camel {
  constructor() {
    this.position = createVector(random(width), height * 0.75);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.xoff = random(1000);
    this.camel_img = loadImage("assets/camel.png");
    this.camel_eating_img = loadImage("assets/camel_eating.png");
    this.maxSpeed = 2;
    this.accelerationForce = 0.05; // defines the strength of the camel's acceleration towards the target
    this.size = 3;
    this.eatingChance = 0;
    this.eatingTimer = 0;
    imageMode(CENTER);
  }

  show() {
    push();
    translate(this.position.x, this.position.y);

    if (this.velocity.x < 0) {
      scale(-this.size, this.size);
    } else {
      scale(this.size, this.size);
    }

    this.eatingChance = random(0, 10);

    if(this.eatingChance % 2 == 0) {
      image(this.camel_eating_img, 0, 0);
    } else {
      image(this.camel_img, 0, 0);
    }
    pop();
  }

  update() {
    let targetX = noise(this.xoff) * width;

    let targetDirection = createVector(targetX - this.position.x, 0);

    if (targetDirection.x > 0) {
      this.acceleration.x = this.accelerationForce;
    } else if (targetDirection.x < 0) {
      this.acceleration.x = -this.accelerationForce;
    } else {
      this.acceleration.x = 0;
    }

    this.velocity.add(this.acceleration);

    if (abs(this.velocity.x) > this.maxSpeed) {
      this.velocity.x = this.maxSpeed * (this.velocity.x > 0 ? 1 : -1);
    }
    this.velocity.y = 0;

    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.xoff += 0.005;

    // checks if the camel has reached the boundary yet
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

    // keeps the y position consistent (camel stays on the ground)
    this.position.y = height * 0.75;
  }
}
