
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint= Matter.Constraint;

//layer1
var box1,box2,box3,box4,box5,box6,box7;

//layer2
var box8,box9,box10,box11,box12;

//layer3
var box13,box14,box15;

//layer4
var box16;

//grounds
var ground1,ground2,lGround;

//hexagon
var hexa;

//layer2.1
var box17,box18,box19,box20,box21;

//layer 2.2
var box22,box23,box24;

//layer 2.3
var box25;

//constraint
var sling;

var hexaImg;
function preload()
{
	var hexaImg = loadImage("hexagon.png");
}
function setup() {
	createCanvas(1350, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={isStatic:true}
	ground1 = new Ground(850,200,400,10);

	ground2 = new Ground(500,400,400,10);

	lGround = new Ground(0,500,3000,30);


//build1
	box1 = new Box(500,240,30,40,rgb(128,128,128));

	box2 = new Box(490,260,30,40,rgb(63,224,208));
	box3 = new Box(500,260,30,40,rgb(63,224,208));
	box4 = new Box(510,260,30,40,rgb(63,224,208));

	box5 = new Box(480,280,30,40,rgb(255,192,203));
	box6 = new Box(490,280,30,40,rgb(255,192,203));
	box7 = new Box(500,280,30,40,rgb(255,192,203));
	box8 = new Box(510,280,30,40,rgb(255,192,203));
	box9 = new Box(520,280,30,40,rgb(255,192,203));

	box10 = new Box(470,300,30,40,rgb(135,206,234));
	box11 = new Box(480,300,30,40,rgb(135,206,234));
	box12 = new Box(490,300,30,40,rgb(135,206,234));
	box13 = new Box(500,300,30,40,rgb(135,206,234));
	box14 = new Box(510,300,30,40,rgb(135,206,234));
	box15 = new Box(520,300,30,40,rgb(135,206,234));
	box16 = new Box(530,300,30,40,rgb(135,206,234));

//build2
	box17 = new Box(850,70,30,40,rgb(255,192,203));

	box18 = new Box(840,80,30,40,rgb(63,224,208));
	box19 = new Box(850,80,30,40,rgb(63,224,208));
	box20 = new Box(860,80,30,40,rgb(63,224,208));

	box21 = new Box(830,100,30,40,rgb(135,206,234));
	box22 = new Box(840,100,30,40,rgb(135,206,234));
	box23 = new Box(850,100,30,40,rgb(135,206,234));
	box24 = new Box(860,100,30,40,rgb(135,206,234));
	box25 = new Box(870,100,30,40,rgb(135,206,234));

	

	hexa = new Poly(100,100,50,40);

	sling = new Chain(hexa.body,{x:200,y:100});

	Engine.run(engine);
}


function draw() {
  
	background(0);
	
        // Building 1
	box1.display();

	box2.display();
	box3.display();
	box4.display();

	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();

	box10.display();
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();

//---------------------------------------------------------------------
       //Building 2
//layer1
	box17.display();
//layer2
	box18.display();
	box19.display();
	box20.display();
//layer3
	box21.display();
	box22.display();
	box23.display();
	box24.display();
	box25.display();

	ground1.display();
	ground2.display();
	lGround.display();
//----------------------------------------------------------------------------
  hexa.display();

  sling.display();
 
  drawSprites();

}
function mouseDragged()
{
    Matter.Body.setPosition(hexa.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  sling.released();
}
function keyPressed()
{
	if(keyCode == 32)
	{
			Matter.Body.setPosition(hexa.body,{x:100,y:400});
			sling.attach(hexa.body);
	}
}