
class Alien {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.girlx = 0;
    this.girly = 0;
    this.size = 2;
    this.girlsize = 1.8;
    this.img = loadImage("assets/ufo.png");
    this.girlimg = loadImage("assets/girlufo.png");

    this.xoff = 10;
    this.yoff = 10;
    this.girlxoff = 5;
    this.girlyoff = 5;
  }

  update() {
    this.x = noise(this.xoff) * width;
    this.y = noise(this.yoff) * (height / 5);
    this.xoff += 0.005;
    this.yoff += 0.005;
    this.girlx = noise(this.girlxoff) * width;
    this.girly = noise(this.girlyoff) * (height / 5);
    this.girlxoff += 0.005;
    this.girlyoff += 0.005;
  }

  show() {
    image(this.img, this.x, this.y, 32 * this.size, 32 * this.size);

    image(
      this.girlimg,
      this.girlx,
      this.girly,
      32 * this.girlsize,
      32 * this.girlsize
    );
  }
}
