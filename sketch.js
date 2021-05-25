var fixedrect,movingrect;
var gameobject1;
var gameobject2;


function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(300,300,50,50);
  fixedrect.shapeColor = "green";
  movingrect = createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "green";
  gameobject1 = createSprite(100,100,50,100);
  gameobject1.shapeColor = "green";
  gameobject2 = createSprite(300,100,50,50);
  gameobject2.shapeColor ="green";
  gameobject2.velocityY = 5;
  fixedrect.velocityY  = -5;
}

function draw() {
  background("yellow");  

  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if (isTouching(movingrect,gameobject1)){
   gameobject1.shapeColor = "white";
   movingrect.shapeColor = "white";
  }
  else{
    movingrect.shapeColor = "green";
     gameobject1.shapeColor = "green";

  }
bounceOff(fixedrect, gameobject2);
  drawSprites();
}

