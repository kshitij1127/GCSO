var wall,car,weight,speed;
function setup() {
  createCanvas(1600,400);
 
  wall = createSprite(1250,200,60,400);
  car = createSprite(200,200,50,50);
  speed = random(30,95)
  car.velocityX = speed;
  weight = random(400,1500)
}

function draw() {
  background(0);
  if(wall.x - car.x < (wall.width/2+car.width/2)){
   car.velocityX = 0;
  var def = 0.5*weight*speed*speed/22500


  if(def < 100){
car.shapeColor = color(0,255,0)
  }


  if(def <180&& def>100){
  car.shapeColor = color(230,230,0)
  }


  if(def > 180){
car.shapeColor  = color(255,0,0)
  }
  }
  
  drawSprites();
}