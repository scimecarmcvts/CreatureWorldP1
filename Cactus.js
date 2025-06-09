// Ayaan Patel, 6/2/2025, Ecosystem Lab(Cactus)
// EXTRA: Every few seconds, the cactus sways hard in a random direction to simulate desert wind gusts.

class Cactus {
  constructor(img, size, x, y) {
    this.img = img;
    this.size = size;
    this.position = createVector(x, y);

    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    this.maxAngle = 65; // max sway angle in degrees
    this.angle = 0;

    this.noiseSpeed = 0.05;
    this.xOffset = random(200, 500);

    // Wind gust control
    this.gustActive = false;
    this.gustAngle = 0;
    this.gustEndFrame = 0;
    this.nextGustFrame = frameCount + int(random(180, 360)); // 3-6 seconds later
  }

  update() {
    // Update velocity & position (can add movement if needed)
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);

    // Handle gust timing
    if (!this.gustActive && frameCount >= this.nextGustFrame) {
      this.gustActive = true;
      // Random gust angle between -60 and 60 degrees
      this.gustAngle = radians(random([-1, 1]) * random(30, 120));
      this.gustEndFrame = frameCount + 60; //longer gust
    }

    // End gust
    if (this.gustActive && frameCount > this.gustEndFrame) {
      this.gustActive = false;
      this.nextGustFrame = frameCount + int(random(180, 360));
    }

    // Set angle
    if (this.gustActive) {
      this.angle = this.gustAngle;
    } else {
      let noiseV = noise(this.xOffset);
      this.angle = radians(map(noiseV, 0, 1, -this.maxAngle, this.maxAngle));
      this.xOffset += this.noiseSpeed;
    }
  }

  show() {
    push();
    translate(this.position.x, this.position.y);
    shearX(this.angle);
    imageMode(CENTER);
    image(this.img, 0, 0, this.size, this.size);
    pop();
  }

  display() {
    this.show();
  }
}
