
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObj;
var mango1,mango2,mango3,mango4,mango5;
var gardenImg;
var world,boy;
var launchingForce = 100;


function preload(){
	boy=loadImage("images/boy.png");
	gardenImg=loadImage("images/garden.PNG");

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,200,30);
	mango3=new mango(1200,200,30);
	mango4=new mango(900,250,30);
	mango5=new mango(950,150,30);

	stoneObj=new Stone(150,370,20);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	launcherObj = new SlingShot(stoneObj.body,{x:200, y:100});
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1300,
			height: 600,
			wireframes: false
		}

	});
	Engine.run(engine);

}

function draw() {

  background(gardenImg);
  //Add code for displaying text here!
  fill("red");
  textSize(25);
  text("Press SPACE to get a second chance",50,50);

  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneObj.display();
 
  

  groundObject.display();
 launcherObj.display();
 detectCollision(stoneObj,mango1);
 detectCollision(stoneObj,mango2);
 detectCollision(stoneObj,mango3);
 detectCollision(stoneObj,mango4);
 detectCollision(stoneObj,mango5);
}


function mouseDragged(){
   Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcherObj.fly();
}

function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.body.setPosition(stoneObj.body,{x:235 , y:420});
		launcherObj.attach(stoneObj.body);
	}
}

function detectCollsion(lstone , lmango)
{
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;
	var distance = dist(stoneBodyPosition.x , stonePosition.y , mangoBodyPosition.x , mangoBodyPosition.y);
	if(distance<=lmango.r + lstone.r)
	{
		Matter.Body.setStatic(lmango.body , false);
	}

}
