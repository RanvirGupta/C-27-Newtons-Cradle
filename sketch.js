const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world; 
	//Create the Bodies Here.
    roof = new Roof(400,150,200,15);

    bobObject1 = new Bob(320,350,20);
	bobObject2 = new Bob(360,350,20);
    bobObject3 = new Bob(400,350,20);
    bobObject4 = new Bob(440,350,20);
    bobObject5 = new Bob(480,350,20);
    
    rope1 = new Rope(320,200,3,250);
    rope2 = new Rope(360,200,3,250);
    rope3 = new Rope(400,200,3,250);
    rope4 = new Rope(440,200,3,250);
    rope5 = new Rope(380,200,3,250);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("White");
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();  
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



