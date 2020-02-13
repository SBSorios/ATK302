var x = 0;

function setup() {

  createCanvas(400, 400);

}

function draw() {
  // put rawing code here
  background('blue');
  // rect(x,10,10,10);
  fill('red');
  textSize(35);
  text("Parasite!!!", x, 40);
  rect(x, 10, 10, 10);
  x = x + 5;
  if (x > width) {
    x = 0;
  }
}
