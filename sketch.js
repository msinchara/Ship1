var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadImage("ship-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");
  
//Moving background
    sea=createSprite(400,200);
    sea.addImage(seaImg);
    sea.scale=0.3;

   
    ship=createSprite(138,200,30,30,);
    ship.addImage("movingship,shipImg1");
    ship.scale =0.25;

}

function draw() {
    background("blue");
 
}ssssss