var canvas;
var music;
 
function preload(){
    music = loadSound("music.mp3");
  
}

function setup(){
  createCanvas(800,600);
  
redSurface = createSprite(100,550,180,50);
blueSurface = createSprite(300,550,180,50);
greenSurface = createSprite(500,550,180,50);
yellowSurface = createSprite(700,550,180,50);
boxS = createSprite(400,50,50,50);
  
redSurface.shapeColor="red";  
blueSurface.shapeColor="blue"; 
greenSurface.shapeColor="green";
yellowSurface.shapeColor="yellow";
boxS.shapeColor="white"
  
leftEdge = createSprite(0,300,20,600);
}


function draw(){
  background("black")
  
  
bounceOff(boxS,edges);

  if(keyDown("space")){
    boxS.velocityY=3;
    boxS.velocityX=-5;
    
  }
  
 
  drawSprites();
}