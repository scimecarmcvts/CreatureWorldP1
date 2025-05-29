
class Frog{
  // initilizes frog variables
  constructor(xpos,ypos,rspeed,lspeed,jumpprob,floorpos,jumpspeed,left){
    this.xpos = width/2;
    this.jumpspeed = jumpspeed;
    this.rspeed = rspeed;
    this.lspeed = lspeed;
    this.speed = rspeed;
    this.jumpprob = jumpprob;
    this.left = false;
    this.display = true;
    this.size = 1;
    this.img = loadImage("assets/frog.png");
    this.floorpos = floorpos;
    this.ypos = this.floorpos;
    this.jumping = true;
    this.left = false;
  }

  show(){
    // shows the frog at its position and updates if it should flip its x axis or not
    if (this.display){
    if (this.left == false){
    image(this.img,this.xpos,this.ypos,32*this.size,32*this.size);
    } else{
        push();
        scale(-1, 1); 
        image(this.img,-this.xpos -20,this.ypos,32*this.size,32*this.size);
        pop();
    }
    } 
  }
  update(){
    if(mouseIsPressed == true && this.updatedMouse == false){
      if(mouseX > this.xpos - this.size *32 && mouseX < this.xpos + this.size * 32 && mouseY > this.ypos - this.size *32 && mouseY < this.ypos + this.size * 32){
      this.xoffset = mouseX - this.xpos;
      this.yoffset = mouseY - this.ypos;
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
  console.log(this.beingHeld);
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
      this.xpos = mouseX - this.xoffset;
      this.ypos = mouseY - this.yoffset;
      this.floorpos = this.ypos;
      this.jumping = true;
      return;
     }
     if (this.ypos >= this.floorpos && this.jumping == false){
       // if the frog is on the floor generate a random number to see if it should jump
       this.ypos = this.floorpos;
       this.jumpchance = floor(random(30,95));
       if (this.jumpchance == 80){
       this.jumping = true;
       this.jumpspeed = floor(random(6,10));
         this.num = floor(random(0,2));
         // when it jumps gives it a chance to jump leftwards or rightwards
         if (this.num == 0){
           this.left = false;
         } else{
           this.left = true;
         }
         // if the frog is too close to one side  jump the opposite direction
         if (this.xpos + 100 > width){
           this.left = true;
         }
         if (this.xpos - 100 < 0){
           this.left = false;
         }
     }
     }
    // checks if it ahs gone below the floor after jumping
    if (this.ypos >= this.floorpos + 0.5 && this.jumping == true){
      this.jumping = false;
    }
    if (this.jumping == true){
       this.jumpspeed -= 0.3;
       this.ypos -= this.jumpspeed;
      if (this.left == false){
        this.xpos += this.rspeed;
      } else{
        this.xpos += this.lspeed;
      }
    }
     
    }
  
  
}