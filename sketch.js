const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var maxDrops = 150;
var drops = [];
var w1, w2, w3, w4, w5, w6, w7, w8, t1, t2, t3, t4;
var umbr;
var frames = 0, chooseR = 100;
var frame = 0;
var pos = 0;

function preload(){
	w8 = loadImage("images/Walking/walking_1.png");
	w7 = loadImage("images/Walking/walking_2.png");
	w6 = loadImage("images/Walking/walking_3.png");
	w5 = loadImage("images/Walking/walking_4.png");
	w4 = loadImage("images/Walking/walking_5.png");
	w3 = loadImage("images/Walking/walking_6.png");
	w2 = loadImage("images/Walking/walking_7.png");
	w1 = loadImage("images/Walking/walking_8.png");
	t1 = loadImage("images/thunderbolt/1.png");
	t2 = loadImage("images/thunderbolt/2.png");
	t3 = loadImage("images/thunderbolt/3.png");
	t4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
	canvas = createCanvas(400,850);
	
	engine = Engine.create();
	world = engine.world;
	
	for(var i = 0; i < maxDrops; i++)
	{
		drops.push(new Drop(random(0, 400), random(0, 400)));
	}
	
	umbr = new Umbrella(200,500);
}

function draw(){
	background(0);

	Engine.update(engine);

	for(var j = 0; j < maxDrops; j++){
		drops[j].display();
		drops[j].update();
	}
	umbr.display();
	thunder();

	if(frameCount % 128 == 0 || frameCount % 81 == 0)
	{
		pos = Math.round(random(0, 250))
	}
}



function thunder() {
	if(chooseR > 0)
	{
		chooseR = chooseR - 1;
	}
	if(chooseR == 90)
	{
		frame = 0;
	}
	if(chooseR == 0)
	{
		var r = Math.round(random(1, 4));
	}
	switch(r){
		case 1 : chooseR = 100;
		frame = 1;
		break;

		case 2 : chooseR = 100;
		frame = 2;
		break;

		case 3 : chooseR = 100;
		frame = 3;
		break;

		case 4 : chooseR = 100;
		
		frame = 4;
		break;
	}
	if(frame == 1)
	{
		image(t1, pos, 1, pos + 100, 301);
	}
	if(frame == 2)
	{
		image(t2, pos, 1, pos + 100, 301);
	}
	if(frame == 3)
	{
		image(t3, pos, 1, pos + 100, 301);
	}
	if(frame == 4)
	{
		image(t4, pos, 1, pos + 100, 301);
	}
}