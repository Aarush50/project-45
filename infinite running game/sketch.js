var canvas, backgroundImage;
bikes=[];
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var biker1,biker2,biker3,biker4;
var biker1_img,biker2_img,biker3_img,biker4_img;
var track,ground;
function   preload(){
   biker1_img=loadImage("biker1 image.jpg");
   biker2_img=loadImage("biker 2image.jpg");
   biker3_img=loadImage("biker 3 image.jpg");
   biker4_img=loadImage("biker 4 image.png");
   grond=loadImage("ground.png");
   track=loadImage("backgroung image.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
