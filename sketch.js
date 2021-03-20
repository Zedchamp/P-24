const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(200,320,100,70);
    box2 = new Box(520,320,150,150);
   
    bird = new Bird(100,100);
ball1= new Ball(300,300,20,20)
ball2= new Ball(300,300,10,10)
ball3= new Ball(300,300,10,10)
ball4= new Ball(300,300,10,10)
ball5= new Ball(300,300,10,10)
ball6= new Ball(300,300,10,10)
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    
    box1.display("red");
    box2.display("black");
    ground.display();
    ball1.display();
fill("green");
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    
    bird.display();
}