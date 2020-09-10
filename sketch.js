
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; //1. namespacing

function preload()
{
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1800, 1600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
mango1 = new mango(100,200,70,70);
mango2 = new mango(250,250,70,70);
mango3 = new mango(200,300,70,70);
tree = new tree(800,500,200,200);
ground = new ground(450,500,800,700);
stone = new stone(30,20,10,10);
sling = new SlingShot(stone.body, {x:200, y: 420});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  image(boy ,200,340,200,300);
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  tree.display();
  ground.display();
  stone.display();
  
 
}
  function keyPressed(){
	  if(keycode === 32){
		  Matter.Body.setPosition(stone.body,{x:235,y:420})
		  launcherObject.attach(stone.body);
	  }
  }

  function detectCollision(stone,mango){
mangoBodyPositioin=mango.body.position
stoneBodyPositioin=stone.body.position

var distance=dis(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stone.r)
{
Matter.Body.setStatic(mango.body,false);
}
  }



