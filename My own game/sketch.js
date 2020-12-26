
var aircraft,aircraftImage,backgroundImage;
var aircraft2,aircraft2Image;
var missiles,missileImage;
var aircraft3,aircraft4;
function preload()
{
   aircraftImage=loadImage("images/aircraft.png");
   aircraft2Image=loadImage("images/aircraft2.png");
   missileImage=loadImage("images/missile.png");
   backgroundImage=loadImage("images/background.jpg");
}

function setup() {
	createCanvas(displayWidth-20,displayHeight);
  aircraft=createSprite(700,100);
   aircraft.addImage(aircraftImage);
   aircraft.scale=0.5;
   aircraft2=createSprite(50,100);
   aircraft2.addImage(aircraft2Image);
   aircraft2.scale=0.1;
   aircraft3=createSprite(50,200);
   aircraft3.addImage(aircraft2Image);
  aircraft3.scale=0.1;
   aircraft4=createSprite(50,300);
   aircraft4.addImage(aircraft2Image);
   aircraft4.scale=0.1;
	//Create the Bodies Here.



  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown(UP_ARROW)){
    aircraft.y=aircraft.y-5;
  }
  if(keyDown(DOWN_ARROW)){
    aircraft.y=aircraft.y+5;
  }
  if(keyDown(LEFT_ARROW)){
    missile=createSprite(500,250,20,20);
    missile.addImage(missileImage);
    missile.scale=0.5;
    missile.velocityX=-8;
    missile.lifetime=windowWidth-20;
  }
  if(frameCount%50===0){
    missile2=createSprite(100,random(100,400),20,20);
    missile2.addImage(missileImage);
    missile.scale=0.2;
  }
  drawSprites();
 
}



