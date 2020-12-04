//Create variables here
var dog,dogSad,dogHappy,foodStock,foodS,database;
var fedTime,lastFed,currentTime;
var foodobj;
var feed,addfood;
var garden,washroom;
var gameState;
var readState;
function preload()
{
  dogSad=loadImage("images/Dog.png");
  dogHappy=loadImage("images/Happy.png");
  garden=loadImage("images/Garden.png");
  washroom=loadImage("images/Wash Room.png");
  bedroom=loadImage("images/Bed Room.png");
}

function setup() {
  database=firebase.database();
  createCanvas(400, 500);
  
  foodobj=new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  fedTime=database.ref('fedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
  readState=database.ref('gameState');
  readState.on("value",function(data){
    gameState=data.val();
  });
  dog=createSprite(200,400,150,150);
  dog.addImage(dogSad);
  dog.scale=0.15;
  
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() { 
  currentTime=hour();
  if(currentTime===(lastFed+1)){
    update("playing");
    foodobj.garden();
  } else if(currentTime==(lastFed+2)){
    update("sleeping");
    foodobj.bedroom();
  }else if(currentTime>(lastFed+2) && currentTime<=(lastFed+3)){
    update("Bathing");
    foodobj.washroom();
  }else{
    update("Hungry")
    foodobj.display();
  }

if(gameState!=="Hungry"){
feed.hide();
addFood.hide();
dog.remove();
}else{
  feed.show();
  addFood.show();
  dog.addImage(dogSad);
}

  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();
  foodobj.updateFoodStock(foodS);
}

function feedDog(){
  dog.addImage(dogHappy);

  foodobj.updateFoodStock(foodobj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodobj.getFoodStock(),
    fedTime:hour(),
    gameState:"Hungry"
  })
}
function addFoods(){
  foodS++
  database.ref('/').update({
    Food:foodS
  })
}

function update(state){
  database.ref('/').update({
    gameState:state
  })
}
