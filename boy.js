class Boy{
   constructor(x,y,r){
       var options={
         isStatic:true,
         friciton:0.2,

       }
       
       this.body=Bodies.circle(x,y,r,options);
       this.x=x
       this.y=y
       this.r=r;
       this.image=loadImage("walking_1.png")
      
       //this.
       World.add(world,this.body);
   }
   display(){
    //  var pos=this.body.position
      push()
      //translate(pos.x,pos.y)
   //  rotate(this.body.angle)
     image(this.image,200,350,200,200)
    //  circle(50,410,200,200)
     pop()
   }

   }
