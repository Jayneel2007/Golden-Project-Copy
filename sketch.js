var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car
var form, player, game;
var ambulanceGroup

function preload(){
  backgroundImage = loadImage("Track.jpg")

}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-120);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  ambulanceGroup = new Group()
}


function draw(){
  if(gameState === 1){
    clear();
    game.play();
  }
}
