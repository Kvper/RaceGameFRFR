var player1, player2;
var blocks = [];

class Block {
  constructor(x, y, w, h, colour) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
  }

  draw() {
    fill("green")
    rect(this.x, this.y, this.w, this.h)
    
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
  }

  draw() {    
    fill(this.color);
    this.isColliding();
    rect(this.x, this.y, 15, 15);    
  }

  isColliding(){
    blocks.forEach(block=>{   
       if (this.x < block.x + block.w && this.x + 15 > block.x) {
          if (this.y < block.y + block.h && this.y + 15 > block.y) {
            //jouw bots code hier
            fill("red");
          }
        }
    });  
  }

  keyPressed() {

    if (keyIsDown(this.up)) {
      this.y -= 1.5;
    }

    if (keyIsDown(this.down)) {
      this.y += 1.5;
    }

    if (keyIsDown(this.left)) {
      this.x -= 1.5;
    }

    if (keyIsDown(this.right)) {
      this.x += 1.5;
    }
  }
}



function setup() {
  createCanvas(500, 350);
  player1 = new Player(175, 36, 5, 5, "img", 87, 83, 65, 68, "green");
  player2 = new Player(175, 53, 5, 5, "img", 38, 40, 37, 39, "blue");  
  
  block1 = new Block(25, 35, 10, 290, "green");
  block2 = new Block(35, 25, 425, 10, "green");
  block3 = new Block(460, 35, 10, 260, "green");
  block4 = new Block(320, 295, 140, 10, "green");
  block5 = new Block(35, 325, 280, 10, "green");

  blocks.push(block1);
  blocks.push(block2)
  blocks.push(block3)
  blocks.push(block4)
  blocks.push(block5)
  
    bg = loadImage('Images/Bg1FrFr.png')
}

function draw() {
  background(bg);
  fill(0);


  // if (xpos < block.x + block.w && xpos + 50 > block.x) {
  //   if (ypos < block.y + block.h && ypos + 50 > block.y) {

  //   }
  // }

  player1.draw();
  player1.keyPressed();
  player2.draw();
  player2.keyPressed();
  
  blocks.forEach(b=>{
    b.draw();
  })
  
  
  // if (x >= 0 && x + 50 <= 500) x += vx;
  // if (y >= 0 && y + 50 <= 500) y += vy;

  // if (x >= 0 && x + 50 <= 500) x += vx;
  // if (y >= 0 && y + 50 <= 500) y += vy;

}

//Gebruik maken van 2 pngs om te voor zorgen dat ie op het gras slomer is. 
// p5.js collision with transparent pixels.

