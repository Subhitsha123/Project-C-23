var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var box1,box2,box3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-50, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 25, {isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	box1 = new Box(400,635,200,20 );
	box2 = new Box(500,635,20,100 );
	box3 = new Box(300,635,20,100 );

	Engine.run(engine);
  
}

function draw() {
  background(0);
  Engine.update(engine);
  
  box1.display();
  box2.display();
  box3.display();
  
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  keyPressed();

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) { 
	Body.setStatic(packageBody,false); 
}
}