class Form {
constructor(){


}

display(){
var title=createElement('h2');
title.html("Multiplayer car racing game");
title.position(670,200)

var input=createInput("name");
input.position(700,400);

var button=createButton("play");
button.position(720,450);

var greeting=createElement("h2");
greeting.position(800,600);

button.mousePressed(function(){
  input.hide();
  button.hide();
var name=input.value();
playerCount+=1
player=new Player();
player.update(name);
player.updateCount(playerCount);

greeting.html("Welcome "+name);
    
});



}

}