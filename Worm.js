//extra: added beta support for multiple sandworms

class Sandworm {
  constructor(pos, underground, above) {
    //no velocity vector because there's really no spot for it, the movement operates directly off of noise on the canvas itself
    this.pos = pos;
    this.underground = underground;
    this.above = above;
    this.display = true;
    this.size = 0.3;
    this.offset = createVector(0, 0);
    this.currentSprite = this.underground;
  }

  move() {
    // this.offset.x += 0.001;
    // this.offset.y += 0.0005;
    this.offset.add(random(0.0001, 0.005), random(0.00001, 0.0005));
    // this.pos.x = width * noise(this.xOff);
    // this.pos.y = height * noise(this.yOff);
    this.pos = createVector(width * noise(this.offset.x), height * noise(this.offset.y));
    //no show() method in the interest of simplicity, you can just change Sandworm.display
    if (this.display) {
      image(
        this.currentSprite,
        this.pos.x,
        this.pos.y,
        this.currentSprite.width * this.size,
        this.currentSprite.height * this.size
      );
    }
  }

  changeSprite() {
    let result = round(random(0, 1));
    if (result == 1) {
      this.currentSprite = this.above;
    } else {
      this.currentSprite = this.underground;
    }
  }
}
