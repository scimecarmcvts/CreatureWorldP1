
class World {
  constructor() {
    //Scenes
    this.scene = 2.0;
    this.scenes = ["Rainforest", "Ocean", "Desert"];

    //Buttons
    this.btnL = createButton("<=");
    this.btnL.position(0, 0);
    this.btnL.mousePressed(this.moveLeft);
    this.btnR = createButton("=>");
    this.btnR.position(width - 90, 0);
    this.btnR.mousePressed(this.moveRight);

    //Noise Variables
    this.nt = 0;
    this.ntWaves = 100;
    this.noiseSpeed = 0.04;
    this.oceanCreatures = [];
    
    this.rainForestCreatures = [];
    
    this.desertCreatures = [];
    
    
    //Rainforest
    this.trees = [];
    
  }

  show() {
    if (this.scene == 0) {
      this.drawRainforest();
    } else if (this.scene == 1) {
      this.drawOcean();
    } else {
      this.drawDesert();
    }

    this.drawText();

    
  }
  moveLeft() {
    if (w.scene > 0) w.scene -= 1;
  }
  moveRight() {
    if (w.scene < 2) w.scene += 1;
  }
  drawOcean() {
    background("rgb(186,226,255)");

    //waves and ocean water
    let waveHeight = height / 4;
    fill(0, 0, 155);
    beginShape();
    vertex(0, height);
    for (let i = 0; i < width + 10; i += 10) {
      vertex(i, waveHeight + noise(this.ntWaves + i * this.noiseSpeed) * 10);
    }

    vertex(width, height);
    endShape();

    this.ntWaves += this.noiseSpeed;

    //build the sea floor
    let startFloor = height - 100;
    let redVal = 90;
    this.nt = 0;
    for (let j = 0; j < 3; j++) {
      startFloor += 20;
      fill(200, 130, redVal);
      beginShape();
      vertex(0, height);
      for (let i = 0; i < width + 10; i += 10) {
        vertex(i, startFloor + noise(this.nt + i * this.noiseSpeed) * 10);
      }

      vertex(width, height);
      endShape();
      redVal -= 30;
      this.nt += 100;
    }
    
    //Draw Ocean Creatures
    if (this.scene == 1) {
      for (let i = 0; i < this.oceanCreatures.length; i++) {
        this.oceanCreatures[i].show();
        this.oceanCreatures[i].update();
      }
    }
  }
  drawRainforest() {
   background(0, 155, 0);
   fill(0, 150,255);
   beginShape();
  vertex(0,0);
  vertex(width, 0);
  vertex(width, 150);
  let anchorGap = 100;
  let mountainheight = 150;
  let t = 0;
    for (let i = 3; i >= 0; i--){
      let y = noise(t) * mountainheight + 150;
      let x = width/4 * i;
      bezierVertex(x - anchorGap, y, x + anchorGap, y, x, y);
      t += 0.9;
      //console.log("x:" + x + "y: " + y);
    }
   endShape();
   
    //Draw Rain Forest Creatures
    if (this.scene == 0) {
      for (let i = 0; i < this.rainForestCreatures.length; i++) {
        this.rainForestCreatures[i].show();
        this.rainForestCreatures[i].update();
      }
    }
    
  }
  drawDesert() {

     background("rgb(199, 228, 255)");
    fill("rgb(212,137,43)");
    rect(0, height / 4, width, (height / 4) * 3 )


    
    if (this.scene == 2) {
      for (let i = 0; i < this.desertCreatures.length; i++) {
        this.desertCreatures[i].show();
        this.desertCreatures[i].update();
      }
    }
    
  }
  drawText() {
    fill(255);
    textSize(25);
    text(this.scenes[this.scene], 50, 50);
  }
}

class Creature {
  constructor(img) {
    this.position = createVector(random(0, width), height / 2);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0, 0.1);
    this.display = true;
    this.img = img;
    this.size = random(0.1, 1);
    this.restHeight = random(height - 180, height - 150);
    
  }
  show() {
    if (this.img != null)
      image(this.img, this.position.x, this.position.y, 32 * this.size, 32 * this.size);
  }
  update() {
    if (this.position.y < this.restHeight) {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
    }
      
  }
  //   async loadImg(){
  //   return await loadImage("rock.png");
  // }
}