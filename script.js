var player1, player2;
var block = { x: 10, y: 10, w: 8, h: 3 }

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
    fill("red")
    rect(this.x, this.y, 15, 15);
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
  player1 = new Player(175, 36, 5, 5, "img", 87, 83, 65, 68, "red");
  player2 = new Player(175, 53, 5, 5, "img", 38, 40, 37, 39, "blue");
  block1 = new Block(10, 500, 20, 20, "green")
  bg = loadImage('Images/bg1.png')
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
  block1.draw();

  // if (x >= 0 && x + 50 <= 500) x += vx;
  // if (y >= 0 && y + 50 <= 500) y += vy;

  // if (x >= 0 && x + 50 <= 500) x += vx;
  // if (y >= 0 && y + 50 <= 500) y += vy;

}


