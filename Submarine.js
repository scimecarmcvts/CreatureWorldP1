
class Submarine{
  constructor(){
    //this.x= random(width);
    //this.y = height/4 + random(height-height/4);
    this.position = createVector(random(width),height/4 + random(height-height/4))
    this.size=0;
    this.speed=10;
  
    this.img=loadImage("./assets/sub.png");
    this.bubbley=[]
    this.bubblex=[]
      this.bubblesize=[];
    this.bubblespeed=[];
    this.amount=0;
    this.direction = 1;
    this.velocity = createVector(1,0)
    this.oceanforce = createVector(-0.0002,0)
    
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
      fill(255);
      ellipse(this.bubblex[k],this.bubbley[k],this.bubblesize[k],this.bubblesize[k]);
      
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
    // Bubbles are also made here 
    if(frameCount % 20 == 0){ //amount of bubbles is made by the number after modulous
    if(this.velocity.x<=-1){
    this.bubblex.push(this.position.x*-1-35);
    }else if(this.velocity.x>=0.1){
       this.bubblex.push(this.position.x);
    }
    this.bubbley.push(this.position.y+20);
    this.bubblesize.push(random(5,14));
    this.bubblespeed.push(random(0.9,1.5));
    // console.log(this.bubblex);
    this.amount++;
    }
    
    for(let k=0;k<this.amount;k++){
      this.bubbley[k]=this.bubbley[k]-this.bubblespeed[k];
       if(this.bubbley[k]<height/3.7){
         this.amount--;
         this.bubbley.splice(k,1);
         this.bubblex.splice(k,1);
         this.bubblespeed.splice(k,1);
         this.bubblesize.splice(k,1);
         
        
       }
       
       
       
      }
  }
   
  
}