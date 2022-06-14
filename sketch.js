var ship
var shipAnimation
var sea
var seas
function preload(){
  sea = loadImage("sea.png")
  shipAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  
  seas = createSprite(200,200)
  seas.addImage(sea);
  ship = createSprite(200,350)
  ship.addAnimation("movingship",shipAnimation)
  ship.scale = 0.1
  seas.velocity.x = -1
}

function draw() {
  background("blue");
  
 if(seas.x<0){
   seas.x = seas.width/2
 }
 drawSprites()
}