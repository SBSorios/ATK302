function setup() {

  createCanvas(800, 800);
  background('green');
}

function draw() {
  rect(100, 100, 100, 100);
}

function mouseReleased() {
  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {
    background(random(255));
  }
}
