class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Crashing Simulation");
    title.position(displayWidth/2-5, 0);

    this.input.position(displayWidth/2-30, displayHeight/2-20);
    this.button.position(displayWidth/2+30, displayHeight/2+30);

    this.button.mousePressed(()=>{
      gameState=1;
      game.update(1)
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();

      player.update();
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2, displayHeight/2);
    });

  }
}
