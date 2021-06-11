const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bg,tower,ground,cannon
var engine, world;
var ground, ball;
var angle
function preload(){
bg=loadImage("./assets/background.gif")
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
tower=new Tower(150,350,160,310)
angle=-PI/4
   ground=new Ground(0,height-1,width*2,1)
   cannon=new Cannon(180,110,110,50,angle,)
}

function draw(){
    background(0);
    image (bg,0,0,width,height)

    
    Engine.update(engine);
    tower.display()
   ground.display()
   cannon.display()
}