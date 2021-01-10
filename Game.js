class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
     
      
      form = new Form()
      form.display();
    }
    car = createSprite(displayWidth/2,displayHeight-200);
    car.velocityY = 1
    

  }

  play(){
    form.hide();
    image(backgroundImage,0,0,displayWidth,displayHeight)
    if(keyWentDown(UP_ARROW)){
      car.velocityY=car.velocityY-1
      car.velocityX = 0
    }
    if(keyWentUp(DOWN_ARROW)&&car.velocityY!=0){
      car.velocityY=car.velocityY+1
      car.velocityX = 0
    }
    if(keyWentDown(LEFT_ARROW)){
      car.velocityX=car.velocityX-0.5
      car.velocityY = 0
    }
    if(keyWentUp(RIGHT_ARROW)){
      car.velocityX=car.velocityX+0.5
      car.velocityY = 0
    }

      //write code here to spawn the ambulances
      if (frameCount % 300 === 0) {
        var ambulance = createSprite(displayWidth/2,displayHeight-50,100,100);
        ambulance.y = Math.round(random(80,120));
        //ambulance.addImage(ambulanceImage);
        ambulance.velocityY = +3;
        text("Move To The Side",)
         //assign lifetime to the variable
        ambulance.lifetime = 200;
        
        //adjust the depth
       
        //add each ambulance to the group
        ambulanceGroup.add(ambulance);
      }
    

    drawSprites();
  }
}
