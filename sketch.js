var bg,dog,maze;
var gamestate,canvas;

function preload(){
    bg=loadImage("../images/bluish greenish bg.jpg")
    dog=loadImage("../images/chihuahua-clipart-halloween-1.png")
}
function setup()
{
 canvas = createCanvas(1600,800)
 wall1=createSprite(100,200,60,10)
 wall2=createSprite(100,200,60.20)
}
function draw(){
    background(0);
    drawSprites();

}