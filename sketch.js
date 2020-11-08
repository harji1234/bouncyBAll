//Namespacing
const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var ground,ball;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options = {
    isStatic: true
  }
  ground=Bodies.rectangle(400,390,800,50,ground_options)
  World.add(world,ground);

  var ball_options={
    restitution:1.5
  }
  ball= Bodies.circle(200,50,20,ball_options)
World.add(world,ball)

}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER)
  fill("grey");
rect(ground.position.x,ground.position.y,800,50);
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)

}