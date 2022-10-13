var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;
var frameCount=0,score=0;
const SEC=60;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
//Mover fondo
garden=createSprite(200,200);
garden.addImage(gardenImg);


//crear sprite rabbit 
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

// obs
createApples();
createOrange();
createRed();
}

function draw() {
  background(0);
  frameCount++;
  
  //mover el sprite rabbit en el eje X con el mouse
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  // spawn obs
  let MIN=1,MAX=3;
  if(frameCount%(SEC*2)==0)
  {
    let rObs=Math.floor(Math.random()*(1+MAX-MIN)+MIN);
    switch(rObs)
    {
      case 1:
        createApples();
        break;
      case 2:
        createOrange();
        break;
      case 3:
        createRed();
        break;
    }
  }

  // coll obs
  if(rabbit.isTouching(apple))
  {
    apple.destroy();
    score++;
  }
  else if(rabbit.isTouching(orangeL))
  {
    orangeL.destroy();
    score++;
  }
  else if(rabbit.isTouching(redL))
  {
    redL.destroy();
    score++;
  }
  
  console.log(score);

  drawSprites();
   
  
// var select_sprites = Math(random(1,3));

// var select_sprites = Math.random(random(1,3));

// var select_sprites = Math.round(1,3);

// var select_sprites = Math.round(random(1,3));

  
  // if (frameCount % 50 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }
  // }

  // if (frameCount / 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 = 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }



}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
