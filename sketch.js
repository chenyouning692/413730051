let angle = 0;
let scaleFactor = 1;
let scaleDirection = 1;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(80);
  frameRate(30);
}

function draw() {
  background(255);
  noFill();
  stroke(173, 216, 230, 150);

  push();
  translate(width / 2, height / 2);
  scale(sin(angle) * 1, cos(angle) * 1);
  fill(0, 0, 255);
  noStroke();
  text('TKUET', 0, 0);

  pop();

  // 更新角度
  angle += 0.05;
}
