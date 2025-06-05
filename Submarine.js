/*
Name: Gurusaran Sathish
Program: Submarine Creature
Date: 6/5/2025
Extra: Submarine makes bubbles, bubbles have unique color and their own physics.
*/
class Submarine{
  constructor(){
    //this.x= random(width);
    //this.y = height/4 + random(height-height/4);
    this.position = createVector(random(width),height/4 + random(height-height/4))
    this.size=0;
    this.speed=10;
  
    this.img=loadImage("./assets/sub.png");
    this.bubblepos=[]
      this.bubblesize=[];
    this.bubblespeed=[];
    this.amount=0;
    this.direction = 1;
    this.velocity = createVector(1,0)
    this.oceanforce = createVector(-0.0002,0)
    this.bubbleforce = createVector(-0.6,0)
    this.bubbleforce2= createVector(0.6,0)
    this.bubblecolor= color(random(255),random(255),random(255))
    
  }
  
  show(){
    //Check which way the submarine will go and move/flip accordingly
    push();
    if(this.velocity.x>=0){
    image(this.img, this.position.x,this.position.y,32*this.size,32*this.size);
    }else{
      scale(-1,1);
       image(this.img, -this.position.x-35,this.position.y,32*this.size,32*this.size);
      
    }
    
    for(let k=0;k<this.amount;k++){
      fill(this.bubblecolor);
      stroke(255);
      strokeWeight(2)
      ellipse(this.bubblepos[k].x,this.bubblepos[k].y,this.bubblesize[k],this.bubblesize[k]);
      
      }
    this.velocity.add(this.oceanforce)
    this.position.add(this.velocity);
    
    if(this.position.x>width/*&&this.velocity.x>=1*/){
      
      this.velocity.x=-1.6;
      
    }
      if(this.position.x<-32 /*&&this.velocity.x<=-1*/){
        this.velocity.x=1;
        
        
      }
    pop();
    
  }
  update(){
    this.position.y=(noise(this.position.x*0.00255)*height)+height/3.7;
    for(let k =0; k<this.amount;k++){
      if(this.velocity.x>=0.1){
      this.bubblepos[k].add(this.bubbleforce);
    } else if(this.velocity.x<=-1) {
      this.bubb
      this.bubblepos[k].add(this.bubbleforce2);
    }
      
    }
    // Bubbles are also made here 
    if(frameCount % 20 == 0){ //amount of bubbles is made by the number after modulous
    if(this.velocity.x<=-1){
    this.bubblepos.push(createVector(this.position.x*-1-35,this.position.y+20))
    }else if(this.velocity.x>=0.1){
       this.bubblepos.push(createVector(this.position.x,this.position.y+20));
    }
    this.bubblesize.push(random(5,14));
    this.bubblespeed.push(random(0.9,1.5));
    // console.log(this.bubblex);
    this.amount++;
    }
    
    for(let k=0;k<this.amount;k++){
      this.bubblepos[k].y=this.bubblepos[k].y-this.bubblespeed[k];
       if(this.bubblepos[k].y<height/3.7){
         this.amount--;
         this.bubblepos.splice(k,1);
         this.bubblespeed.splice(k,1);
         this.bubblesize.splice(k,1);
         
        
       }
       
       
       
      }
  }
   
  
}