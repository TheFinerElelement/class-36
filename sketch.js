var canvas, database;
var playerCount, gameState=0;
var form, game,player;


function setup(){
  
  canvas=createCanvas(500,500);
  database = firebase.database();
  console.log(database);
  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
  background("white");
 
    
  
}

