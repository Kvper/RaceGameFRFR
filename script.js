
var player1, player2;
var blocks = [];
var blocksLevel1 = [];
var blocksLevel2 = [];
var mmenu, tposx1, tposy, tposx2;
tposx1 = 80;
tposx2 = 350;
tposy = 225;

class Block {
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
  }

  draw() {
    let squareColor = color(this.color);
    squareColor.setAlpha(0);
    noStroke();
    fill(squareColor)
    rect(this.x, this.y, this.w, this.h,)
    
  }

}

function preload() {
 music = loadSound('Tokyodrift.mp3');
}

class Player {
  constructor(x, y, vx, vy, image, up, down, left, right, color) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.up = up;
    this.down = down;
    this.left = left;
    this.right = right;
    this.color = color;
    this.isCollidingg = false;
    this.img = image;
  }

  draw() {    
    fill((255,0,0,0));
    this.isColliding();
    rect(this.x, this.y, 10, 10); 
    image(car1,this.x - 4 , this.y - 0.5, 18, 11);
  }


  isColliding() {
    this.vx = 1.5;
    this.vy = 1.5;
    blocks.forEach(block=>{   
       if (this.x < block.x + block.w && this.x + 10 > block.x) {
          if (this.y < block.y + block.h && this.y + 10 > block.y) {
            //jouw bots code hier
            //fill("red");
            this.vx = 0.25;
            this.vy = 0.25;
          }
       }        
    });     
  }

  keyPressed() {

    if (keyIsDown(this.up)) {
      this.y -= this.vy;
    }

    if (keyIsDown(this.down)) {
      this.y += this.vy;
    }

    if (keyIsDown(this.left)) {      
      this.x -= this.vx;      
    }

    if (keyIsDown(this.right)) {      
      this.x += this.vx;      
    }
  }
}

let car1, car2;



function setup() {
  createCanvas(500, 350);
  player1 = new Player(175, 36, 5, 5, car1, 87, 83, 65, 68, "transparent");
  player2 = new Player(175, 53, 5, 5, car2, 38, 40, 37, 39, "transparent");  
  mmenu = 0;
  block1 = new Block(25, 35, 10, 290, "transparent");
  block2 = new Block(35, 25, 425, 10, "transparent");
  block3 = new Block(460, 35, 10, 260, "transparent");
  block4 = new Block(320, 295, 140, 10, "transparent");
  block5 = new Block(35, 325, 280, 10, "transparent");
  block6 = new Block(75, 72, 205, 212, "transparent");
  block7 = new Block(317.5, 35, 40, 110, "transparent");
  block8 = new Block(390, 70, 30, 185, "transparent");
  block9 = new Block(280, 190, 110, 25, "transparent");
  block10 = new Block(328, 250, 30, 66, "transparent");
  Finishblock28 = new Block(153, 35, 13, 37, "green")
  car1 = loadImage("Images/Car1R.png");
  car2 = loadImage("Images/Car2R.png");
  
  block11 = new Block(20, 30, 10, 290, "transparent");
  block12 = new Block(30, 29, 470, 10, "transparent");
  block13 = new Block(486, 35, 10, 130, "transparent");
  block14 = new Block(406, 163, 125, 10, "transparent");
  block15 = new Block(397, 170, 10, 92, "transparent");
  block16 = new Block(255, 260, 150, 10, "transparent")
  block17 = new Block(260, 130, 33, 170, "transparent")
  block18 = new Block(143, 290, 140, 10, "transparent")
  block19 = new Block(125, 197, 33, 120, "transparent")
  block20 = new Block(20, 297, 130, 10, "transparent")
  block21 = new Block(60, 70, 390, 28, "transparent")
  block22 = new Block(60, 70, 33, 193, "transparent")
  block23 = new Block(60, 70, 168, 92, "transparent")
  block24 = new Block(195, 70, 33, 185, "transparent")
  block25 = new Block(325, 70, 37, 158, "transparent")
  block26 = new Block(325, 70, 128, 60, "transparent")
  Finishblock27 = new Block (30, 204, 30, 12, "green")

  blocksLevel1.push(block1);
  blocksLevel1.push(block2);
  blocksLevel1.push(block3);
  blocksLevel1.push(block4);
  blocksLevel1.push(block5);
  blocksLevel1.push(block6);
  blocksLevel1.push(block7);
  blocksLevel1.push(block8);
  blocksLevel1.push(block9);
  blocksLevel1.push(block10);
  blocksLevel1.push(Finishblock28);

  blocksLevel2.push(block11);
  blocksLevel2.push(block12);
  blocksLevel2.push(block13);
  blocksLevel2.push(block14);
  blocksLevel2.push(block15);
  blocksLevel2.push(block16);
  blocksLevel2.push(block17);
  blocksLevel2.push(block18);
  blocksLevel2.push(block19);
  blocksLevel2.push(block20);
  blocksLevel2.push(block21);
  blocksLevel2.push(block22);
  blocksLevel2.push(block23);
  blocksLevel2.push(block24);
  blocksLevel2.push(block25);
  blocksLevel2.push(block26);
  blocksLevel2.push(Finishblock27);

  
  bg = loadImage('Images/bg.png')
  trackbg = loadImage('Images/trackmenu.png');
  textSize (21);
  track1 = loadImage('Images/track1.png');
  track2 = loadImage('Images/track2.png');

  
  
}



function draw() {
  fill(0);


  // if (xpos < block.x + block.w && xpos + 50 > block.x) {
  //   if (ypos < block.y + block.h && ypos + 50 > block.y) {

  //   }
  // }

  if (mmenu == 0){
    background(bg);
  }
  
  if (mmenu == 1){
    background(trackbg);
    textSize(21);
    stroke('gold');
    strokeWeight(2);
    fill('white');
    text('Track 1',80,225);
    text('Track 2',350,225);
  }
  
  //Track 1 Code
  if (mmenu == 3){
   
    noStroke();
    background(track1);
    player1.draw();
    player1.keyPressed();
    player2.draw();
    player2.keyPressed();

  
    blocks.forEach(b=>{
      b.draw();
    })
    textSize(12);
    stroke('gold');
    strokeWeight(1);
    fill('white');
    text('PRESS ENTER TO GO BACK',325,340);
  }

  //Track 2 Code
  if (mmenu == 4){
    blocks = blocksLevel2;
    noStroke();
    background(track2);
    player1.draw();
    player1.keyPressed();
    player2.draw2();
    player2.keyPressed();
    
    
        blocks.forEach(b=>{
      b.draw();
    })
    textSize(12);
    stroke('gold');
    strokeWeight(1);
    fill('white');
    text('PRESS ENTER TO GO BACK',325,340);
  }
}
  

  
  // if (x >= 0 && x + 50 <= 500) x += vx;
  // if (y >= 0 && y + 50 <= 500) y += vy;

  // if (x >= 0 && x + 50 <= 500) x += vx;
  // if (y >= 0 && y + 50 <= 500) y += vy;



//Gebruik maken van 2 pngs om te voor zorgen dat ie op het gras slomer is. 
// p5.js collision with transparent pixels.

//Menu Functions
function keyPressed(){
   if (keyCode === ENTER){
     music.stop();
     mmenu = 1;
   }
 }

function mouseClicked() {

  if(mmenu == 1){
    if(mouseX < (width / 2)){
      console.log("level 1")
      mmenu = 3;
       blocks = blocksLevel1;
      music.loop();
    }
    else{
      console.log("level 2")
      mmenu = 4;
       blocks = blocksLevel2
      music.loop()
      
       
    }
  
  //console.log(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
  }
}