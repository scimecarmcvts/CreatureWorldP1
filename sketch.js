let w;
let img;
let IJTree;
let cactusImage;
let scorpImg;
let snakeImg;
let snakeImg1;
let snakeImg2;
let underground, above;

async function setup() {
  img = await loadImage("./assets/rock.png");
  IJTree = loadImage("assets/JTree1.png");
  cactusImage = loadImage("assets/cactus.png"); // loads image
  scorpImg = loadImage("assets/scorp.png");
  snakeImg = loadImage("assets/snake.png");
  snakeImg1 = loadImage("assets/SnakeBernard.png");
  snakeImg2 = loadImage("assets/SnakeBertha.png");
  Tframe0 = loadImage("assets/ToucanFrame0.png");
  Tframe1 = loadImage("assets/ToucanFrame1.png");
  Tframe2 = loadImage("assets/ToucanFrame2.png");
  createCanvas(1980, 1080);
  //createCanvas(600, 400);

  console.log("Hello Class");
  //Adding Creature Objects
  w = new World();
  for (let i = 0; i < 15; i++) {
    w.oceanCreatures.push(new Creature(img));
  }
  for (let i = 0; i < 5; i++) {
    w.oceanCreatures.push(new Submarine());
  }
  for (let i = 0; i < 5; i++) {
    w.oceanCreatures.push(new Shark());
  }
  for (let i = 0; i < 5; i++) {
    w.oceanCreatures.push(new Crab());
  }

  for (let i = 0; i < 5; i++) {
    w.oceanCreatures.push(new Fish());
  }
  for (let i = 0; i < 5; i++) {
    w.oceanCreatures.push(new Bird());
  }

  for (let i = 0; i < 5; i++) {
    w.rainForestCreatures.push(
      new CToucan('assets/ToucanFrame0.png', random(width), random(height), 100)
    );

    w.rainForestCreatures.push(
      new Frog(random(width), random(height), 1, -1, 10, 300, 5)
    );

    w.rainForestCreatures.push(
      new Jaguar(random(width), random(height / 2, height))
    );

   w.rainForestCreatures.push(new Snake2(snakeImg1) );
    w.rainForestCreatures.push(new Snake2(snakeImg2) );
  }

  for (let i = 0; i < 50; i++) {
    w.rainForestCreatures.push(
      new JungleTree(IJTree, random(width), random(height), random(20, 50))
    );
    w.rainForestCreatures.push(new BushBerry());

    w.rainForestCreatures.push(new Ant());
  }

  for (let i = 0; i < 5; i++) {
    w.desertCreatures.push(new Camel());
    w.desertCreatures.push(new Alien());
    w.desertCreatures.push(new Scorpion(scorpImg));
     w.desertCreatures.push(
     new Snake(random(width), random(height), snakeImg));
     w.desertCreatures.push(new Worm(random(0, width), random(height/4, height), underground, above))
  }

  for (let i = 0; i < 150; i++) {
    let cHeight = random(height/4, height);

    w.desertCreatures.push(
      new Cactus(cactusImage, map(cHeight, height/4, height, 50, 200), random(width), cHeight)
    );
  }

  for (let i = 0; i < 30; i++) {
  
    w.desertCreatures.push(new Tumbleweed());
  }
}

function draw() {
  background(220);

  w.show();
}

// class Tree {
//   constructor() {
//     this.x = random(width);
//     this.y = 0;
//   }
//   show() {
//     for (let i = 0; i < 50; i++) {
//       fill("rgb(163,99,32)");
//       rect(this.x, this.y, 20, height);
//     }
//   }
// }

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 50 && mouseY < height && keyCode == 65) {
    let fs = fullscreen();
    fullscreen(!fs);
    
  }
}

function windowResized() {
  resizeCanvas(windowWidth - 10, windowHeight);
}
