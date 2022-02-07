var player1, player2;
var block = { x: 10, y: 10, w: 8, h: 3 }

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
    rect(this.x, this.y, 40, 40);
  }

  keyPressed() {

    if (keyIsDown(this.up)) {
      this.y -= 4;
    }

    if (keyIsDown(this.down)) {
      this.y += 4;
    }

    if (keyIsDown(this.left)) {
      this.x -= 4;
    }

    if (keyIsDown(this.right)) {
      this.x += 4;
    }
  }
}

function setup() {
  createCanvas(500, 350);
  player1 = new Player(200, 200, 5, 5, "img", 87, 83, 65, 68, "red");
  player2 = new Player(200, 200, 5, 5, "img", 38, 40, 37, 39, "blue");
}

function draw() {

  background(225);
  fill(0);


  // if (xpos < block.x + block.w && xpos + 50 > block.x) {
  //   if (ypos < block.y + block.h && ypos + 50 > block.y) {

  //   }
  // }

  player1.draw();
  player1.keyPressed();
  player2.draw();
  player2.keyPressed();

  // if (x >= 0 && x + 50 <= 500) x += vx;
  // if (y >= 0 && y + 50 <= 500) y += vy;

  // if (x >= 0 && x + 50 <= 500) x += vx;
  // if (y >= 0 && y + 50 <= 500) y += vy;

}


