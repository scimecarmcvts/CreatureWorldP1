
class Frog{
  // initilizes frog variables
  constructor(xpos,ypos,rspeed,lspeed,jumpprob,floorpos,jumpspeed,left){
    this.velocity = createVector(3,jumpspeed);
    this.acceleration = createVector(0,.25);
    this.jumpprob = jumpprob;
    this.left = false;
    this.display = true;
    this.size = 1;
    this.img = loadImage("assets/frog.png");
    this.floorpos = floorpos;
    this.jumping = true;
    this.left = false;
    this.position = createVector(width/2,this.floorpos);
    this.mouse = createVector(0,0);
  }

  show(){
    // shows the frog at its position and updates if it should flip its x axis or not
   
    if (this.display){
    if (this.left == false){
    image(this.img,this.position.x,this.position.y,32*this.size,32*this.size);
    } else{
        push();
        scale(-1, 1); 
        image(this.img,-this.position.x -20,this.position.y,32*this.size,32*this.size);
        pop();
    }
    } 
  }
  update(){
    this.mouse = createVector( mouseX, mouseY);
    if(mouseIsPressed == true && this.updatedMouse == false){
      if( this.mouse.x > this.position.x - this.size *32 &&  this.mouse.x < this.position.x + this.size * 32 &&  this.mouse.y > this.position.y - this.size *32 &&  this.mouse.y < this.position.y + this.size * 32){
      this.xoffset =  this.mouse.x - this.position.x;
      this.yoffset =  this.mouse.y - this.position.y;
      this.beingHeld = true;
      this.jumpspeed = floor(random(6,10));
      }
    
      this.updatedMouse = true;
  }    else{
    if(mouseIsPressed == false){
      this.updatedMouse = false;
      this.beingHeld = false;
    }
  }
     if(this.beingHeld == true){
      
      if(keyIsPressed){
        if(key == '-' || key == "_"){
          if(this.size > 0){
          this.size -= .1;
          }
        } 
        if (key == "=" || key == "+"){
          this.size += .1;
        }
      }
      this.position.x = this.mouse.x - this.xoffset;
      this.position.y = this.mouse.y - this.yoffset;
      this.floorpos = this.position.y;
      this.jumping = true;
      return;
     }

     if (this.position.y >= this.floorpos && this.jumping == false){
       // if the frog is on the floor generate a random number to see if it should jump
       this.position.y = this.floorpos;
       this.jumpchance = floor(random(30,95));
       if (this.jumpchance == 80){
       this.jumping = true;
       this.velocity.y = floor(random(-6,-10));
         this.num = floor(random(0,2));
         // when it jumps gives it a chance to jump leftwards or rightwards
         if (this.num == 0){
           this.left = false;
         } else{
           this.left = true;
         }
         // if the frog is too close to one side  jump the opposite direction
         if (this.position.x + 100 > width){
           this.left = true;
         }
         if (this.position.x - 100 < 0){
           this.left = false;
         }
         if(this.left){
          this.velocity.x = -1;
         } else{
          this.velocity.x = 1;
         }
     }
     }
    // checks if it ahs gone below the floor after jumping
    if (this.position.y >= this.floorpos + 0.5 && this.jumping == true){
      this.jumping = false;
    }
    if (this.jumping == true){
       this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
    }
     
    }
  
  
}