function setup() {
  createCanvas(800, 400);
  roger = createSprite(100, 200, 50, 50);
  
  //background_img=createSprite(200,200,30,30)

  roger.addAnimation("rogerl", rogerleft)
  roger.addAnimation("rogerr", rogerright)
  ground = createSprite(400, 350, 1000, 10)
}
function preload() {
  bullet2 = loadImage("images/bullet3.png")
  enemy_img=loadAnimation("images/e1.png","images/e2.png","images/e3.png","images/e4.png","images/e5.png","images/e6.png")
  obstacle1 = loadImage("images/car001.png")
  background_img = loadImage("images/background.png")
  rogerleft = loadAnimation("images/left1.png", "images/left2.png", "images/left3.png", "images/left4.png", "images/left5.png", "images/left6.png")
  rogerright = loadAnimation("images/right1.png", "images/right2.png", "images/right3.png", "images/right4.png", "images/right5.png", "images/right6.png")
}
function draw() {
  background(background_img)
  spawn_obstacles();
  enemy_sprite();

  if (keyWentDown("s")) {
    bullet();

  }
  if (keyDown(LEFT_ARROW)) {
    roger.x = roger.x - 4
    roger.changeAnimation("rogerl")
  }
  if (keyDown(RIGHT_ARROW)) {
    roger.x = roger.x + 4
    roger.changeAnimation("rogerr")
  }
  if (keyDown(UP_ARROW)) {
    roger.velocityY = -3
  }
  roger.velocityY = roger.velocityY + 1
  roger.collide(ground)
  drawSprites();
}

function bullet() {

  bullet1 = createSprite(roger.x + 60, roger.y - 28, 30, 30)
  bullet1.addImage("bullet", bullet2)
  bullet1.velocityX = 4
  bullet1.scale = 0.2;
  bullet1.lifetime = width / 2

}
function spawn_obstacles() {

  //write code here to spawn the Obstacles
  if (frameCount % 500 === 0) {
    var obstacle = createSprite(width, height - 100, 40, 10);

    obstacle.addImage(obstacle1);
    obstacle.scale = 0.5;
    obstacle.velocityX = -3;
  }
}
function enemy_sprite(){
  if(frameCount % 50 === 0){
    enemy=createSprite(width,height-135,40,40)
    enemy.velocityX=-4
    enemy.addAnimation("enemy_img",enemy_img)
    enemy.scale=1
  }
  
}