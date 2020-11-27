var bullet, wall, speed, weight, thickness;



function setup() {
  createCanvas(1600,400);
 
  speed = random(55, 90);
  weight = random(400, 1500);
  thickness = random(20, 80);

  bullet = createSprite(200, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "gray";

  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = "blue";
}

function draw() {
  background(0);

  if(wall.x - bullet.x < bullet.width/2 + wall.width/2){
    bullet.velocityX = 0;
    
    var deformation=0.5* weight* speed* speed/22509;

   if(deformation>180){
     wall.shapeColor = "red";
   }
   if(deformation>100 && deformation<180){
     wall.shapeColor = "yellow";
   }
   if(deformation<100){
     wall.shapeColor = "green";
   }
  }

  drawSprites();
}