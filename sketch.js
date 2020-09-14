//Create variable for the car and wall
var car, wall;
//create variable for speed and weight
var speed, weight;


function setup() {
  //Creaate the canvas
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  
  speed.random(55,90)
  weight.random(400,1400)
  
}

function draw() {
  background(255,255,255);  
  car.createSprite(50,200,20,40)
  wall.createSprite(1500,200,60,800)
  car.velocityX = speed;

  if(wall.x-car.x < (car.width+wall.width)/2){
    
    car.velocityX=0;
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation>180){
        car.shapeColor = color(255,0,0)
    } if (deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0)
    } if (deformation<100){
      car.shapeColor = color (0,255,0)
    }

  }

  
  drawSprites();
}