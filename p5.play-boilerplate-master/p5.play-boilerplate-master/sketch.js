
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;
var divisionH = 300

//particles = particles
//plinkos = plinko
//barriers = barrier

var particles = [];
var plinkos = [];
var barriers = [];

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  for(var k = 0 ; k <= width ; k = k + 80){
    barriers.push(new barrier(k,height-divisionH/2,10,divisionH));
  }

  for(var j = 40 ; j <= width ; j = j + 50){
    plinkos.push(new plinko(j,75));
  }

  for(var j = 15 ; j <= width - 10 ; j = j + 50){
    plinkos.push(new plinko(j,150));
  }

  for(var j = 40 ; j <= width ; j = j + 50){
    plinkos.push(new plinko(j,225));
  }

  for(var j = 15 ; j <= width - 10 ; j = j + 50){
    plinkos.push(new plinko(j,300));
  }

  

  platform = new ground(400,750,800,20);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  for(var l = 0 ; l < particles.length ; l++){
    particles[l].display();
  }

  if(frameCount % 60 === 0){
    particles.push(new particle(random(width/2-10,width,2+10),5,5));
  }

  for(var j = 0 ; j < plinkos.length ; j++){
    plinkos[j].display();
  }

    for(var k = 0 ; k < barriers.length ; k++){
      barriers[k].display();
    }
  platform.display();
}