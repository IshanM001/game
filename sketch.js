var player, playerImg, runImg, jumpImg, fallImg, count=0;
var ground;



var block1, block2,  block3,  block4,  block5,  block6,  block7,  block8,  block9,  block10;
var block11, block12,  block13,  block14,  block15,  block16,  block17,  block18,  block19,  block20;
var block21, block22,  block23,  block24,  block25,  block26,  block27,  block28,  block29,  block30;
var block31, block32,  block33,  block34,  block35,  block36,  block37,  block38,  block39,  block40;
var block41, block42,  block43,  block44,  block45,  block46,  block47,  block48,  block49,  block50;
var block51, block52,  block53,  block54,  block55,  block56,  block57,  block58,  block59,  block60;
var block61, block62,  block63,  block64,  block65,  block66;
var blocksGroup;

















function preload(){
playerImg=loadImage("run/run0.png")
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
 ground=createSprite(windowWidth / 2,windowHeight-100, windowWidth, 20 )
 blockGroup = new Group()

 block1 = createSprite(200,5,390,10);
 blockGroup.add(block1)

 block2 = createSprite(200, 395,390,10);

 block3 = createSprite(395, 270,10,260);

 block4 = createSprite(5, 350,10,230);

 block5 = createSprite(395, 35,10,130);

 block6 = createSprite(5, 100,10,200);

 block7 = createSprite(40, 30,10,50);

 block8 = createSprite(150, 30,10,180);

 block9 = createSprite(70, 50,50,10 );

 block10 = createSprite(5, 200,120,10);

 block11 = createSprite(5, 235,180,10);

 block12 = createSprite(5, 135,70,10);

 block13 = createSprite(92, 200,10,80);

 block14 = createSprite(40, 150,10,40);

 block15 = createSprite(122, 160,70,10);

 block16 = createSprite(120, 123,70,10);

 block17 = createSprite(188, 147,10,30);

 block18 = createSprite(203, 164,40,10);

 block19 = createSprite(200, 195,150,10);

 block20 = createSprite(128, 260,10,70);

 block21 = createSprite(90, 290,10,60);

 block22 = createSprite(124, 315,60,10);

 block23 = createSprite(100, 347,30,10);
 block24 = createSprite(115, 367,10,50);

 block25 = createSprite(152, 341,10,60);

 block26 = createSprite(190, 366,80,10);

 block27 = createSprite(230, 351,10,40);

 block28 = createSprite(262, 328,10,80);

 block29 = createSprite(230, 270,10,60);

 block30 = createSprite(260, 240,70,10);

 block31 = createSprite(340, 240,50,10);

 block32 = createSprite(320, 180,10,80);

 block33 = createSprite(354, 145,75,10);

 block34 = createSprite(355, 195,10,50);

 block35 = createSprite(306, 355,10,90);

 block36 = createSprite(217, 65,10,130);

 block37 = createSprite(296, 50,10,70);

 block38 = createSprite(345, 45,60,10);

 block39 = createSprite(268, 80,50,10);

 block40 = createSprite(335, 105,130,10);

 block41 = createSprite(344, 75,10,70);

 block42 = createSprite(307, 285,100,10);

 block43 = createSprite(353, 324,10,80);

 block44= createSprite(165, 290,80,10);

 block45= createSprite(180, 313,10,50);

 block46 = createSprite(40, 300,10,120);

 block47 = createSprite(56, 308,30,10);

 block48 = createSprite(164, 255,10,30);

 block49 = createSprite(174, 267,30,10);

 block50 = createSprite(175, 220,30,10);

 block51 = createSprite(188, 230,10,30);

 block52 = createSprite(54, 91,90,10);

 block53 = createSprite(120, 45,10,70);

 block54 = createSprite(172, 46,50,10);

 block55 = createSprite(195, 91,40,10);

 block56 = createSprite(248, 147,10,20);

 block57 = createSprite(278, 160,70,10);

 block58 = createSprite(276, 120,10,20);

 block59 = createSprite(203, 132,40,10);

 block60 = createSprite(200, 177,10,30);

 block61 = createSprite(256, 220,10,40);

 block62 = createSprite(212, 290,30,10);

 block63 = createSprite(180, 377,10,25);

 block64 = createSprite(1, 217,10,25);

 block65 = createSprite(305, 303,10,25);

 block66 = createSprite(340, 260,10,25);




} 

function draw() {
  background(0);  


  if(keyWentDown("d")){

player.changeAnimation("playerRun", runImg)
player.velocityX=9

  }



  if(keyWentUp("d")){

    player.changeAnimation("player", playerImg)
    if(count%2!=0) {
      player. mirrorX(player. mirrorX() * -1)
      count=count+1
    }
    player.velocityX=0
    
      }



      
  if(keyWentDown("a")){

    player.changeAnimation("playerRun", runImg)
    if(count%2==0) {
      player. mirrorX(player. mirrorX() * -1)
      count=count+1
    }

    player.velocityX=-12
    
      }
    
    
    
      if(keyWentUp("a")){
    
        player.changeAnimation("player", playerImg)
        player.velocityX=0
        
          }


          if(keyWentDown("w")){

         //   player.changeAnimation("playerJump", jumpImg)
      
            player.velocityY=-12
        
            

              }





              if(keyWentUp("w")){

                //   player.changeAnimation("playerJump", jumpImg)
             
                   player.velocityY=0
               
                   
       
                     }

              if(keyWentDown("s")){

                //   player.changeAnimation("playerJump", jumpImg)
             
                   player.velocityY=12
               
                   
       
                     }


                     
              if(keyWentUp("s")){

                //   player.changeAnimation("playerJump", jumpImg)
             
                   player.velocityY=0
               
                   
       
                     }

            

            
            
            
         

  
blockGroup.collide(player)
  drawSprites();
}
