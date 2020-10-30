var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1100, 200, 60, height/2);
  speed=random(40,90);
  weight=random(400,1500);
car.velocityX=speed;
wall.shapeColor=color(80,80,80);
car.shapeColor=color('blue');
}

function draw() {
  background(0);  

if(wall.x-car.x<(car.width+wall.width)/2)
{
  car.velocityX=0;
  var deform=0.5*weight*speed*speed/22500;

  if(deform>180)
  {
    car.shapeColor=color(255,0,0);
  }
  if(deform<180 && deform>100)
  {
    car.shapeColor=color(230,230,0);
  }
  if(deform<100)
  {
    car.shapeColor=color(0,255,0);
  }
}
  drawSprites();
}