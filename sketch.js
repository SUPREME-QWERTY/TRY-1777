var fixedRect, movingRect;
var ob1,ob2,ob3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1 = createSprite(200,200,80,80);
  ob1.shapeColor = "orange";

  ob2 = createSprite(500,200,80,80);
  ob2.shapeColor = "orange";
  ob2.velocityX = -3;

  ob3 = createSprite(890,200,80,80);
  ob3.shapeColor = "orange";
}

function draw() {
  background("#000000");  

  



 if(isTouching(movingRect,ob2))
 {

  textSize(80);
  text("SUPREME-QWERTY IS THE BEST !",200,200)
  

 }

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  drawSprites();
}





