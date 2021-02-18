
var gardenIm, garden;
var cat, cat1, cat2, cat3;
var mouse, mouse1, mouse2, mouse3;
function preload() {
    gardenImg = loadImage("images/garden.png");
    cat1 = loadImage("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png", "images/cat3.png");
    cat3 = loadImage("images/cat4.png");
    mouse1 = loadImage("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
    mouse3 = loadImage("images/mouse4.png");

    //load the images here
}

function setup(){
    createCanvas(900, 700);
    
    garden = createSprite(450, 350, 10, 10);
    garden.addImage(gardenImg);

    cat = createSprite(800, 600, 10, 10);
    cat.addImage(cat1);
    cat.scale = 0.15;

    mouse = createSprite(100, 600, 10, 10);
    mouse.addImage(mouse1);
    mouse.scale = 0.15;

    //text(mouseX + "," + mouseY, 10, 45);

}

function draw() {

    background("black");
    
    keyPressed();

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catLastImage", cat3);
        cat.changeAnimation("catLastImage");
        cat.x = 200;
        cat.y = 600;

        mouse.addAnimation("mouseLastImage", mouse3);
        mouse.changeAnimation("mouseLastImage");
    }
    drawSprites();
    text(mouseX + "," + mouseY, 10, 45);

}


function keyPressed(){

  if(keyWentDown(LEFT_ARROW)){
      cat.velocityX = -5;
      cat.addAnimation("catRunning", cat2);
      cat.changeAnimation("catRunning");

      mouse.addAnimation("mouseTeasing", mouse2);
      mouse.changeAnimation("mouseTeasing");
  }

}
