
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var dustbinObj,crumbledPaperObject,groundObject
 //var dustbinObjImage,crumbledPaperObjectImage
 var engine,world;

 function setup() {
	createCanvas(1600,800);

	engine = Engine.create();
	world = engine.world;

	dustbinObj=new dustbin(1200,650);
	//dustbinObj.addIamge("dustbingreen.png");
	crumbledPaperObject=new crumbledPaper(200,450,40);
	//crumbledPaperObject.addIamge("paper.png");
	groundObject=new ground(width/2,670,width,20);
 
	Engine.run(engine);
 }

 function draw() {

 rectMode(CENTER);
  background(0);

 // dustbinObjImage.display();
  //crumbledPaperObjectImage.display();
  crumbledPaperObject.display();
  dustbinObj.display();
  groundObject.display();
 }

 function keyPressed(){
	 if(keyCode===UP_ARROW){
		 Matter.Body.applyForce(crumbledPaperObject.body,crumbledPaperObject.body.position,{x:35,y:-35});
	 }
 }



