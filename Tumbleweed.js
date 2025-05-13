
class Tumbleweed {
constructor() {
  this.rotato = 0;
  this.n = random(1000);
  this.x = random(width);
  this.y = random(height);
  this.display = true;
  this.size = 1;
  this.img = loadImage("assets/tumbler.png");
  this.px ;
}
show(){
  angleMode(DEGREES);
  imageMode(CENTER);
  push();
  translate(this.x, this.y);
  rotate(this.rotato);
  image(this.img, 0, 0, 32 * this.size, 32 * this.size);
  pop();
  this.px = this.x;
}
update(){
 this.x = width * noise(0.005 * this.n++);
  let xDif = this.px - this.x;
 this.rotato += (xDif*-5);
  //console.log(xDif*5);
}
}