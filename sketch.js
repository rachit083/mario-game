var bgimage,bg

function preload(){
bgimage= loadImage("images/bgnew.jpg")
}

function setup() {
createCanvas(1000, 600);
bg= createSprite(500,300,20,40)
bg.addImage(bgimage)
bg.scale=(0.4)
}

function draw() {
background("black")



drawSprites()
}
