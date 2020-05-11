var pacman, pacmanImage;
var fr = 10;
var G1, G2, G3, G4, K1, K2, K3, K4;
var keyCount = 0;
var sc = 40;
var gameState = 1;

var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10;
var mazeImage;
var fm;

function preload(){
    G1image = loadImage("bghost.png")
	RpacmanImage = loadAnimation("pacman.png","pacmanclosed.png");
    UpacmanImage = loadAnimation("pacmanup.png","pacmanclosedup.png");
    LpacmanImage = loadAnimation("pacmanleft.png","pacmanclosed-left.png");
    gameOverimg = loadImage("gameOver.png")
    G2img = loadImage("rghost.png")
    G3img = loadImage("yghost.png")
    G4img = loadImage("pghost.png")
    timg = loadImage("chest.png")
    Kimg = loadImage("Key.png")
    YWimg = loadImage("WW.png")
    chestimg = loadImage("treeoflife.png")
}

function setup(){
    var canvas = createCanvas(600, 600);
    frameRate(60);


     wall1 = new Wall(60,360,120,7);  
     wall2 = new Wall(60,240,120,7);  
     wall3 = new Wall(60,160,120,7); 
     wall4 = new Wall(120,200,7,88);  
     wall5 = new Wall(60,440,120,7);    
     wall6 = new Wall(120,400,7,88)
     wall7 = new Wall(300,0,600,7);
     wall8 = new Wall(0,80,7,160);
     wall9 = new Wall(3.5*sc,13*sc,5*sc,7);
     wall10 = new Wall(200, 11.5*sc, 7, 3*sc);
     wall11 = new Box(80, 80, 80, 80);
     wall12 = new Wall(12*sc, 10*sc, 7, 2*sc);
     wall13 = new Wall(13.5*sc, 11*sc, 127, 7);
     wall14 = new Wall(13.5*sc, 9*sc, 127, 7);
     wall15 = new Wall(13.5*sc, 6*sc, 127, 7);
     wall16 = new Wall(12*sc, 5*sc, 7, 2*sc);
     wall17 = new Wall(13.5*sc, 4*sc, 127, 7);
     wall18 = new Box(13*sc, 2*sc, 80, 80)
     wall19 = new Wall(10*sc, 6*sc, 7, 4*sc);
     wall20 = new Wall(5*sc, 6*sc, 7, 4*sc);
     wall21 = new Wall(6*sc, 8*sc, 2*sc, 7);
     wall22 = new Wall(9*sc, 8*sc, 2*sc, 7);
     wall23 = new Box(7.5*sc, 3.5*sc, 3*sc, 7*sc);
     wall24 = new Wall(4.5*sc,14*sc,7*sc,7);
     wall25 = new Wall(4.5*sc,14*sc,7*sc,7);
     wall26 = new Wall(10*sc, 11.5*sc, 7, 3*sc);
     wall27 = new Wall(11.5*sc, 13*sc, 5*sc, 7);
     wall28 = new Wall(11.5*sc, 14*sc, 5*sc, 7);
     wall29 = new Wall(4*sc, 4*sc, 7, 6*sc );
     wall30 = new Wall(11*sc, 4*sc, 7, 6*sc );
     wall31 = new Wall(4*sc, 10*sc, 7, 4*sc );
     wall32 = new Wall(11*sc, 10*sc, 7, 4*sc );
     wall33 = new Wall(3*sc, 7*sc, 2*sc, 7);
     wall34 = new Wall(3*sc, 8*sc, 2*sc, 7);
     wall35 = new Wall(12*sc, 8*sc, 2*sc, 7);
     wall36 = new Wall(12*sc, 7*sc, 2*sc, 7);
     wall37 = new Wall(2.5*sc, 12*sc, 3*sc, 7);
     wall38 = new Wall(12*sc, 7*sc, 2*sc, 7);
     wall39 = new Empty(7.5*sc, 3.5*sc, 2.5*sc, 6.5*sc);
     wall40 = new Empty(80, 80, 60, 60);
     wall41 = new Empty(13*sc, 2*sc, 60, 60)
     wall42 = new Wall(0, 13*sc, 7, 4*sc)
     wall43 = new Wall(7.5*sc, 15*sc, 600, 7);

    pacman = createSprite(300, 300, 40, 40);
    pacman.addAnimation("Pac",RpacmanImage);
    pacman.scale = 0.2;

    G1 = createSprite(300, 370, 50, 50);
    G1.addImage(G1image)
    G1.scale = 0.75

    G2 = createSprite(421, 150)
    G2.addImage(G2img)
    G2.scale = 0.40

    G3 = createSprite(420, 540)
    G3.addImage(G3img)
    G3.scale = 0.1

    G4 = createSprite(180, 450)
    G4.addImage(G4img)
    G4.scale = 0.4

    K2 = createSprite(20, 20)
    K2.addImage(Kimg)
    K2.scale = 0.10

    K1 = createSprite(580, 580)
    K1.addImage(Kimg)
    K1.scale = 0.10

    K3 = createSprite(580, 20)
    K3.addImage(Kimg)
    K3.scale = 0.10

    K4 = createSprite(20, 580)
    K4.addImage(Kimg)
    K4.scale = 0.10

    tol = createSprite(300, 470, 50, 50);
    tol.addImage(timg)
    tol.scale = 0.6;

    gameOver = createSprite(300, 370);
    gameOver.addImage(gameOverimg)
    gameOver.scale = 0.5
    gameOver.visible = false;

    YW = createSprite(300, 370);
    YW.addImage(YWimg)
    YW.scale = 0.5
    YW.visible = false;
}

function draw(){
    background(0);
    
    if(gameState == 1){

        G1.velocityX = 15
        G3.velocityX = -15
        G2.velocityY = 15
        G4.velocityY = -15

    if(pacman.collide(K1)){
        keyCount += 1;
        K1.destroy(); 
    }

    if(pacman.collide(K2)){
        keyCount += 1;
        K2.destroy(); 
    }

    if(pacman.collide(K3)){
        keyCount += 1;
        K3.destroy(); 
    }

    if(pacman.collide(K3)){
        keyCount += 1;
        K3.destroy(); 
    }

    if(pacman.collide(K4)){
        keyCount += 1;
        K4.destroy(); 
    }

    if(keyCount == 4 && pacman.isTouching(tol)){
        gameState = 2
    }



   if (keyCode === LEFT_ARROW) {
    setDir(-10, 0);
    pacman.addAnimation("Pac",LpacmanImage)
    } 

    if (keyCode === RIGHT_ARROW) {
    setDir(10, 0);
     pacman.addAnimation("Pac",RpacmanImage);
    } 

    if (keyCode === UP_ARROW) {
    setDir(0, -10);
    pacman.addAnimation("Pac",UpacmanImage);
    } 

    if (keyCode === DOWN_ARROW) {
        setDir(0, 10);
    } 

    if(pacman.isTouching(G1)){
        gameState = 0
    }

    if(pacman.isTouching(G2)){
        gameState = 0
    }

    if(pacman.isTouching(G3)){
        gameState = 0
    }

    if(pacman.isTouching(G4)){
        gameState = 0;
     }
}
 
    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();
    wall5.display();
    wall6.display();
    wall7.display();
    wall8.display();
    wall9.display();
    wall10.display();
    wall11.display();
    wall12.display();
    wall13.display();
    wall14.display();
    wall15.display();
    wall16.display();
    wall17.display();
    wall18.display();
    wall19.display();
    wall20.display();
    wall21.display();
    wall22.display();
    wall23.display();
    wall24.display();
    wall25.display();
    wall26.display();
    wall27.display();
    wall28.display();
    wall29.display();
    wall30.display();
    wall31.display();
    wall32.display();
    wall33.display();
    wall34.display();
    wall35.display();
    wall36.display();
    wall37.display();
    wall38.display();
    wall39.display();
    wall40.display();
    wall41.display();
    wall42.display();
    wall43.display();

    pacman.collide(wall1.sprite);
    pacman.collide(wall2.sprite);
    pacman.collide(wall3.sprite);
    pacman.collide(wall4.sprite);
    pacman.collide(wall5.sprite);
    pacman.collide(wall6.sprite);
    pacman.collide(wall7.sprite);
    pacman.collide(wall8.sprite);
    pacman.collide(wall9.sprite);
    pacman.collide(wall10.sprite);
    pacman.collide(wall11.sprite);
    pacman.collide(wall12.sprite);
    pacman.collide(wall13.sprite);
    pacman.collide(wall14.sprite);
    pacman.collide(wall15.sprite);
    pacman.collide(wall16.sprite);
    pacman.collide(wall17.sprite);
    pacman.collide(wall18.sprite);
    pacman.collide(wall19.sprite);
    pacman.collide(wall20.sprite);
    pacman.collide(wall21.sprite);
    pacman.collide(wall22.sprite);
    pacman.collide(wall23.sprite);
    pacman.collide(wall24.sprite);
    pacman.collide(wall25.sprite);
    pacman.collide(wall26.sprite);
    pacman.collide(wall27.sprite);
    pacman.collide(wall28.sprite);
    pacman.collide(wall29.sprite);
    pacman.collide(wall30.sprite);
    pacman.collide(wall31.sprite);
    pacman.collide(wall32.sprite);
    pacman.collide(wall33.sprite);
    pacman.collide(wall34.sprite);
    pacman.collide(wall35.sprite);
    pacman.collide(wall36.sprite);
    pacman.collide(wall37.sprite);
    pacman.collide(wall38.sprite);
    pacman.collide(wall39.sprite);
    pacman.collide(wall40.sprite);
    pacman.collide(wall41.sprite);
    pacman.collide(wall42.sprite);
    pacman.collide(wall43.sprite);

    if(G1.x > 380){
        G1.x = 200;
    }
 
     if(G2.y > 450){
        G2.y = 150;
    }

    if(G3.x < 200){
        G3.x = 380;
    }

    if(G4.y < 150){
        G4.y = 450;
    }



    if(pacman.x > 600){
      pacman.x = 0
    }

    if(pacman.x < 0){
      pacman.x = 600
    }

    if(gameState == 0){

        gameOver.visible = true;
        tol.addImage(chestimg)
        
        G1.velocityX = 0
        G3.velocityX = 0
        G2.velocityY = 0
        G4.velocityY = 0

    }

    if(gameState == 2){

        tol.addImage(chestimg)
        tol.scale = 0.2
        YW.visible = true;
        G1.velocityX = 0
        G3.velocityX = 0
        G2.velocityY = 0
        G4.velocityY = 0

    }

    drawSprites();
}

function setDir(x, y){
	pacman.x = pacman.x + x;
	pacman.y = pacman.y + y;
}

function keyPressed() {


}

