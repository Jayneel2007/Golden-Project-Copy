class Player {
  constructor(){
    this.distance = 0;
    this.name = null;
  }

  update(){
    database.ref("player").set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('player');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
