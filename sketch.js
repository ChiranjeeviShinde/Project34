const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = new Ground(600, 600, 1500, 20);

  hero = new Hero(200,300,250);
  rope = new Rope(hero.body, { x: 200, y: 300 });
  monster = new Monster(1300,550,300);

  box1 = new Box(500, 550, 70, 70);
  box2 = new Box(570, 550, 70, 70);
  box3 = new Box(740, 550, 70, 70);
  box4 = new Box(810, 550, 70, 70);
  box5 = new Box(980, 550, 70, 70);
  box6 = new Box(1050,550, 70, 70);
  box7 = new Box(500, 480, 70, 70);
  box8 = new Box(570, 480, 70, 70);
  box9 = new Box(740, 480, 70, 70);
  box10 = new Box(810, 480, 70, 70);
  box11 = new Box(980, 480, 70, 70);
  box12 = new Box(1050,480, 70, 70);
  box13 = new Box(500, 410, 70, 70);
  box14 = new Box(570, 410, 70, 70);
  box15 = new Box(740, 410, 70, 70);
  box16 = new Box(810, 410, 70, 70);
  box17 = new Box(980, 410, 70, 70);
  box18 = new Box(1050, 410, 70, 70);
}

function draw() {
  background(bg);
  Engine.update(engine);

  textSize(50);
  fill(0);
  text("Kill the monster!!",100,50);
  textSize(30);
  text("Press Space for second chance.",500,50)

  ground.display();
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
  box17.display();
  box18.display();

  //rope.display();
  hero.display();
  monster.display();

  //console.log(mouseX);
  //console.log(mouseY);
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x: mouseX , y: mouseY});
}

function mouseReleased(){
  rope.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(hero.body, {x:200, y:400})
		rope.attach(hero.body);
  }
 }
