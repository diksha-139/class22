
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ground;
var wall1,wall2,wall3,wall4;
var ball;
var btn1

function setup() {
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;
  ground = new Ground(200,390,400,20)
  wall1 = new Ground(50,200,30,20);
  wall2 = new Ground(150,200,30,20);
  wall3= new Ground(250,200,30,20);
  wall4 = new Ground(350,200,30,20);
var options ={
  restitution:0.99
}

  ball = Bodies.circle(100,200,20,options);
  World.add(world,ball);


  btn1 = createImg("up.png");
  btn1.position(20,30)
  btn1.size(50,50);
  btn1.mouseClicked(verticalForce)

}
function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  wall1.show()
  wall2.show()
  wall3.show()
  wall4.show()
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}

function verticalForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
