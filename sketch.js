let webcame;
let ballSystem = [];
let scale = 50;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  webcame = createCapture(VIDEO);
  webcame.size(width/ scale, height/ scale);
  webcame.hide();
  for (let x = 0; x < 200; x++){
    let rx = random(15, width - 15);
    let ry = random(15, height - 15);
    let rr = random(4, 50);
    ballSystem[x] = new Ball(rx, ry, rr);
  }

}

function draw() {
  webcame.loadPixels();
  for (let x = 0; x < ballSystem.length; x++){
    ballSystem[x].move();
    ballSystem[x].show();
    ballSystem[x].checkEdges();
  }
  }
  
class Ball {
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move(){
    this.x = this.x + random (-8,8);
    this.y = this.y + random (-8,8);
  }

  show() {
    let pX = this.x / scale;
    let pY = this.y / scale;
    let pixelColour = webcame.get(pX, pY);
    //let brightness = (pixelColour[0] + pixelColour[1] + pixelColour[2]) / 3;
    //let adjustedPink = map (brightness, 0, 255, 150, 255);
    //fill(255, adjustedPink, adjustedPink, 120);
    fill(pixelColour[0], pixelColour[1], pixelColour[2], 120);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }

  checkEdges(){
    if(this.x < 15){
      this.x = 15;
    }else if (this.x > width - 15){
        this.x = width - 15;
      }
    if (this.y < 15){
      this.y = 15;
    }else if (this.y > height - 15){
        this.y = height - 15;

      }
    }  
    }
  

