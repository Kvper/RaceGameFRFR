var player1, player2;

class Player {
  constructor(x, y, vx, vy, img, up, left, right){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.up = up;
    this.left = left;
    this.right = right;
    this.color = "red";
  }

  draw(){
    fill(this.color)
    rect(this.x, this.y, 50, 50);
  }
}

function setup() {
  createCanvas(500, 350);
  player1 = new Player(10,10,5,5,"","w","a","d");
  player2 = new Player(10,10,5,5,"",37,56,55);
}




var [] = [225, 225, 0, 0];
var [] = [225, 225, 0, 0];

var block1 = { x: 100, y: 100, w: 80, h: 30}
var block2 = { x: 100, y: 100, w: 80, h: 30}

function draw() {
  background(225);

  fill(0);

  if (xpos1 < block1.x + block1.w && xpos1 + 50 > block1.x) {
    if (ypos1 < block1.y + block1.h && ypos1 + 50 > block1.y) {
    }
  }
  if (xpos2 < block2.x + block2.w && xpos2 + 50 > block2.x) {
    if (ypos2 < block2.y + block2.h && ypos2 + 50 > block2.y) {
    }
  }

  player1.draw();
  player2.draw();  
  
  if (xpos1 >= 0 && xpos1 + 50 <= 500) xpos1 += xspeed1;
  if (ypos1 >= 0 && ypos1 + 50 <= 500) ypos1 += yspeed1;

  if (xpos2 >= 0 && xpos2 + 50 <= 500) xpos2 += xspeed2;
  if (ypos2 >= 0 && ypos2 + 50 <= 500) ypos2 += yspeed2;
}

function keyPressed() {
  switch (keyCode) {
    case 37:
      xspeed1 = -2;
      break;
    case 39:
      xspeed1 = 2;
      break;
    case 38:
      yspeed1 = -2;
      break;
    case 40:
      yspeed1 = 2;
      break;
  }
}

function keyReleased() {
  switch (keyCode) {
    case 37:
      xspeed1 = 0;
      break;
    case 39:
      xspeed1 = 0;
      break;
    case 38:
      yspeed1 = 0;
      break;
    case 40:
      yspeed1 = 0;
      break;
  }
}
