const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var leftWall, rightWall, ground, topWall
var ball
var button

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  ground = new Ground (200, 390,400, 20);
  rightWall = new Ground (390, 200, 20, 400);
  leftWall = new Ground (10, 200, 20, 400);
  topWall = new Ground (200, 10, 400, 20)

  var ball_Options = {
    restitution: 0.95,
    frictionAir: 0.01
  }

  ball = Bodies.circle (100, 10, 20, ball_Options);
  World.add (world, ball)
  ellipseMode (RADIUS)
  button = createImg ("push.png")
  button.position (100, 60)
  button.size (50, 50)
  button.mouseClicked (HForce)    
}

function draw() 
{
  background(51);
  Engine.update(engine);
  
  ground.show ();
  rightWall.show ();
  leftWall.show ();
  topWall.show ();

  ellipse (ball.position.x, ball.position.y, 20);
}

function HForce () {
  Matter.Body.applyForce (ball,{x:0,y:0},{x:0.05,y:0})
}


































