class Paper {
 constructor(x,y,r){
  
  var options ={
  restitution:0.2,
  density:1
  }
  this.body=Bodies.circle(x,y,r/2-10,options)
  this.r=r
  this.image=loadImage("paper.png")
  
  World.add(world,this.body)
 }
display(){
var pos=this.body.position;
push()
translate(pos.x,pos.y)
imageMode(CENTER)
image(this.image,0,0,this.r,this.r)
pop()





}


}










