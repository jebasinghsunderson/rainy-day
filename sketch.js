const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;  


var backgroundimg,boy
 var engine, world;
 var drops = []; 
 var rand; 
 var maxDrops=100; 
var thunderCreatedFrame=0;
var maxDrops=100;
function preload(){
    
    backgroundimg=loadImage("11.png");
    thunderimg=loadImage("1.png","2.png")
    thunderimg2=loadImage("3.png","4.png")
}

function setup(){
    
    engine = Engine.create();
    world = engine.world;
    if(frameCount % 150 === 0)
    {
        for(var i=0; i<maxDrops; i++)
        { drops.push (new createDrop(random(0,400), random(0,400)));
         } }
    Drop=new createDrop(500,600)
    boy=new Boy(300,400,50,50)
    

}

function draw(){
    createCanvas(500,550)
    background(backgroundimg)
    Engine.update(engine)

    console.log(frameCount)
   Thunder()
  //displaying rain drops 
  for(var i = 0; i<maxDrops; i++){
       drops[i].showDrop(); drops[i].updateY() 
    }
    if(frameCount % 150 === 0){ 
        for(var i=0; i<maxDrops; i++)
        { drops.push(new createDrop(random(0,400), random(0,400))); } 
    }
    boy.display()
    drawSprites()
 // if(frameCount%1==0){
 //     Drop.showDrop()
 //     Drop.updateY()
 // }
}   
function Thunder(){
    if(frameCount%80==0){
        rand=Math.round(1,2)
        thunder=createSprite(random(30,450),random(40,50),50,50)
        switch(rand){
            case 1: thunder.addImage(thunderimg)
            break;
            case 2: thunder.addImage(thunderimg2)
            break;
            default:
            break;
        }
       
        thunder.scale=random(0.3,0.8)   
      //  thunder.destroy()
    }
    if(frameCount%100==0){
        thunder.destroy()
    }
    
   
}

