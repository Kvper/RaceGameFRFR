var player1, player2;
var blocks = [];
var mmenu, tposx1, tposy, tposx2;
tposx1 = 80;
tposx2 = 350;
tposy = 225;

class Block {
  constructor(x, y, w, h, colour) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
  }

  draw() {
    let squareColor = color(100, 50, 100);
    squareColor.setAlpha(0);
    noStroke();
    fill(squareColor)
    rect(this.x, this.y, this.w, this.h,)
    
  }

}

class Player {
  constructor(x, y, vx, vy, img, up, down, left, right, color) {
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
  }

  draw() {    
    fill(this.color);
    this.isColliding();
    rect(this.x, this.y, 10, 10);    
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

function setup() {
  createCanvas(500, 350);
  player1 = new Player(175, 36, 5, 5, "img", 87, 83, 65, 68, "green");
  player2 = new Player(175, 53, 5, 5, "img", 38, 40, 37, 39, "blue");  
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

  blocks.push(block1);
  blocks.push(block2);
  blocks.push(block3);
  blocks.push(block4);
  blocks.push(block5);
  blocks.push(block6);
  blocks.push(block7);
  blocks.push(block8);
  blocks.push(block9);
  blocks.push(block10);
  
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
    stroke('gold');
    strokeWeight(2);
    fill('white');
    text('Track 1',80,225);
    text('Track 2',350,225);
  }
  if (mmenu == 3){
    background(track1);
    player1.draw();
  player1.keyPressed();
  player2.draw();
  player2.keyPressed();

  
  blocks.forEach(b=>{
    b.draw();
    
  })}
  
  if (mmenu == 4){
    background(track2);
  }
  

  
  
  // if (x >= 0 && x + 50 <= 500) x += vx;
  // if (y >= 0 && y + 50 <= 500) y += vy;

  // if (x >= 0 && x + 50 <= 500) x += vx;
  // if (y >= 0 && y + 50 <= 500) y += vy;

}

//Gebruik maken van 2 pngs om te voor zorgen dat ie op het gras slomer is. 
// p5.js collision with transparent pixels.

//Menu Functions
function keyPressed(){
   if (keyCode === ENTER){
     mmenu = 1;
   }
 }

function mouseClicked() {

  if(mouseX < (width / 2)){
    console.log("level 1")
    mmenu = 3;
  }
  else{
    console.log("level 2")
    mmenu = 4;
  }
  //console.log(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}