var bg;
var iss, issImg;
var hasdocked = "no";
var spacecraft, down, up, right, left;
var PosX, PosY


function preload(){
  bg = loadImage("spacebg.jpg");
  issImg = loadImage("iss.png");
  down = loadImage("spacecraft1.png");
  up = loadImage("spacecraft2.png");
  right = loadImage("spacecraft3.png");
  left = loadImage("spacecraft4.png");
  
}

function setup() {
  createCanvas(1000,800);
  iss = createSprite(400, 250, 50, 50);
  iss.addImage(issImg);

  spacecraft = createSprite(random(100,800),random(500,800),25,25);
  spacecraft.scale = 0.3;
  spacecraft.addImage(down);
  
}



function draw() {
  background(bg);  
  drawSprites();
  fill("white");
  textSize(25)
  text("Space To Stop", 600,80);
  console.log(spacecraft.x,spacecraft.y);
  keyPressed();
  docked();
  textDock();
  console.log(hasdocked)


  
  


}

function keyPressed(){
  if(keyCode === 40){
    spacecraft.y = spacecraft.y+5
    spacecraft.addImage(down)
  }
  if(keyCode === 38){
    spacecraft.y = spacecraft.y-5
    spacecraft.addImage(up)
  }
  if(keyCode === 39){
    spacecraft.x = spacecraft.x+5
    spacecraft.addImage(right)
  }
  if(keyCode === 37){
    spacecraft.x = spacecraft.x-5
    spacecraft.addImage(left)
  }
  if(keyCode === 32){
    
    spacecraft.addImage(down)
  }
}

function docked(){
 if(spacecraft.x < 370 && spacecraft.x >300 && spacecraft.y < 400 && spacecraft.y >330){
    hasdocked = "yes";
    
   }else{
     hasdocked = "no";
  }
}


function textDock(){
  if(hasdocked === "no"){
    text("Not Docked",600,400);
  }else{
    text("Docking Succesful",600,400);
    
  }
}