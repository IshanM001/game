var player, playerImg, runImg, jumpImg, fallImg;

function preload(){
playerImg=loadImage("img/walk.png")
runImg=loadAnimation("run/run0.png", "run/run1.png" , "run/run2.png" , "run/run3.png" , "run/run4.png" , "run/run5.png")
jumpImg=loadAnimation("run/jump0.png", "run/jump1.png" , "run/jump2.png" , "run/jump3.png" )
fallImg=loadAnimation( "run/fall0.png" , "run/fall1.png")
}



function setup() {
  createCanvas(displayWidth,displayHeight);
 player= createSprite(400, 200, 50, 50);
 player.addImage(playerImg)
 player.addAnimation("player" , playerImg);
 player.addAnimation("playerRun", runImg)
 player.addAnimation("playerJump", jumpImg)
 player.addAnimation("playerFall", fallImg)
 player.scale=5
} 

function draw() {
  background(0);  


  if(keyWentDown("d")){

player.changeAnimation("playerRun", runImg)
player.velocityX=9

  }



  if(keyWentUp("d")){

    player.changeAnimation("player", playerImg)
 
    player.velocityX=0
    
      }



      
  if(keyWentDown("a")){

    player.changeAnimation("playerRun", runImg)
    player. mirrorX(player. mirrorX() * -1)
    player.velocityX=-9
    
      }
    
    
    
      if(keyWentUp("a")){
    
        player.changeAnimation("player", playerImg)
        player.velocityX=0
        
          }


          if(keyDown("w")){

            player.changeAnimation("playerJump", jumpImg)
      
            player.velocityY=-9
            
              }
            
            
            
         

  

  drawSprites();
}