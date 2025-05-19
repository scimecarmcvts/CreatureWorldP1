
class Submarine{
  constructor(){
    this.x= random(width);
    this.y = height/4 + random(height-height/4);
    this.size=0;
    this.speed=10;
  
    this.img=loadImage("./assets/sub.png");
    this.bubbley=[]
    this.bubblex=[]
      this.bubblesize=[];
    this.bubblespeed=[];
    this.amount=0;
    this.direction = 1;
    
  }
  
  show(){
    //Check which way the submarine will go and move/flip accordingly
    push();
    if(this.direction==1){
    image(this.img, this.x,this.y,32*this.size,32*this.size);
    }else{
      scale(-1,1);
       image(this.img, -this.x-35,this.y,32*this.size,32*this.size);
      
    }
    
    for(let k=0;k<this.amount;k++){
      fill(255);
      ellipse(this.bubblex[k],this.bubbley[k],this.bubblesize[k],this.bubblesize[k]);
      
      }
    
    this.x+=this.direction;
    
    if(this.x>width&&this.direction==1){
      
      this.direction=-1;
      
    }
      if(this.x< 0 - 32 &&this.direction==-1){
        this.direction=1;
        
        
      }
    pop();
    
  }
  update(){
    this.y=(noise(this.x*0.00295)*height)+height/3.7;
    // Bubbles are also made here 
    if(frameCount % 20 == 0){ //amount of bubbles is made by the number after modulous
    if(this.direction==-1){
    this.bubblex.push(this.x*-1-35);
    }else{
       this.bubblex.push(this.x);
    }
    this.bubbley.push(this.y+20);
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