var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var c1 , c2 , c3 , c4 , track;
 
function preload(){
  c1=laodImage("images/car1.png");
  c2=laodImage("images/car2.png");
  c3=laodImage("images/car3.png");
  c4=laodImage("images/car4.png");
  track=laodImage("images/track.jpg");
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
}
