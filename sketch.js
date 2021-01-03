var car1, car2, wall
var speed, weight
var Deformation = 0
var accident = "safe"


function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  speed = random(55, 90)
  weight = random(400, 1500)
  wall = createSprite(1500, 200, 60, height/2)
  car.velocityX = speed
  Deformation = 0.5 * weight * speed * speed/22500
  wall.shapeColor = "grey"
  car.shapeColor = "white"
}

function draw() {
  
  background(0);  
  car.collide(wall)
  if (Deformation > 180){
    accident = "lethal"
    fill("red")
  }else if (Deformation > 100 && Deformation < 180){
    accident = "Average"
    fill("yellow")
  }else{
    accident = "Safe"
    fill("green")
  }

  textSize(32);
  text("Deformation was: "+ accident, 800, 50)


  drawSprites();
}

