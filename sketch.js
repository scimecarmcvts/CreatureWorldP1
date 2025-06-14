let w;
let img;
let IJTree;
let cactusImage;
let scorpImg;
let snakeImg;
let snakeImg1;
let snakeImg2;
let underground, above, wormIndex;

async function setup() {
  img = await loadImage("./assets/rock.png");
  IJTree = loadImage("assets/JTree1.png");
  IJTree2 = loadImage("assets/JTree2.png");
  cactusImage = loadImage("assets/cactus.png"); // loads image
  scorpImg = loadImage("assets/scorp.png");
  snakeImg = loadImage("assets/snake.png");
  snakeImg1 = loadImage("assets/SnakeBernard.png");
  snakeImg2 = loadImage("assets/SnakeBertha.png");
  Tframe0 = loadImage("assets/ToucanFrame0.png");
  Tframe1 = loadImage("assets/ToucanFrame1.png");
  Tframe2 = loadImage("assets/ToucanFrame2.png");
  underground = loadImage("assets/underground.png");
  above = loadImage("assets/above.png");


  createCanvas(1980, 1080);


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
for (let i = 0; i < 50; i++) {
    
    w.rainForestCreatures.push(new Ant());
  }
   

  let startY = 210;
  let yInc = 10;
  let treeSize = 30;
  for (let j = 0; j < 6; j++){
  for (let i = 0; i < width; i += 15 + random(-10 * j, 10 * j) + j * 40){
    //as the loop iterates, move down the screen and increase the tree size
 
   w.rainForestCreatures.push(
      new JungleTree(IJTree, IJTree2, i , startY + random(0, 50) + (j * 80), treeSize)
    );

  }
  treeSize += 30;
}

  for (let i = 0; i < 5; i++) {
    w.rainForestCreatures.push(
      new CToucan(random(width), random(height) + 200, 100)
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

  

  for (let i = 0; i < 100; i++){
    w.rainForestCreatures.push(new BushBerry());
  } 


  
  




  for (let i = 0; i < 5; i++) {
    w.desertCreatures.push(new Camel());
    w.desertCreatures.push(new Alien());
    w.desertCreatures.push(new Scorpion(scorpImg));
     w.desertCreatures.push(
     new Snake(random(width), random(height), snakeImg));
   
  }
   w.desertCreatures.push(new Worm(random(0, width), random(height/4, height), underground, above));
  wormIndex = w.desertCreatures.length - 1;
   setInterval(() => {
    w.desertCreatures[wormIndex].changeSprite();
  }, 5000);
    

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
  w.btnR.position(width - 90, 0);
}
