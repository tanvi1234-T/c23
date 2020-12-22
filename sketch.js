const Engine = Matter .Engine
const World = Matter .World
const Bodies = Matter .Bodies

var engine,world,Box1;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  
  var options={
    isStatic:true
  }
 

  obj1 = Bodies.rectangle(10,390,600,30,options);
  World.add(world,obj1);
  
  Box1 = new Box(200,200,50,50);
 



}

function draw() {
  background("purple");  
  
  Engine.update(engine);
  rect(obj1.position.x,obj1.position.y,600,30);
  
  Box1.display();
}