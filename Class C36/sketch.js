var database;
var playerCount=0;
var player,form;

function setup(){
    database=firebase.database();
    createCanvas(1000,1000);
    
    form=new Form();
    form.display();
}

function draw(){
    background("grey");
   




    drawSprites();
}

