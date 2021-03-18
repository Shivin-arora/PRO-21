var bullet,wall;
var speed,weight,thickness;
var gunimg,bulletimg,gunShotsound;
var gun,bullet,gunshot;

function preload(){
gunimg=loadImage("handgun.png");
  
bulletimg=loadImage("bulleth.png");

gunShotsound=loadSound("GunShotSnglShotEx PE1097508.mp3");

}


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(345, 175, 50, 50);
  bullet.scale=0.2;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
gun=createSprite(190,270,50,50);
gun.addImage(gunimg);
gun.scale=0.65;
  bullet.addImage(bulletimg);


thickness=random(22,83);
  speed=random(233,321);
  weight=random(30,52);
}



function draw() {
  background(0,0,0); 
  if(keyDown("space")){
  bullet.velocityX=speed;
 //var_gunshot_inwitchsoundisloaded.play();
  }

  if(hasCollided(bullet,wall)){
    
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
wall.shapeColor=color(124,252 ,0);
    }

  }

 bullet.depth=wall.depth+1;
 
  drawSprites();
}

function hasCollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge){
  return true
}

return false;

}