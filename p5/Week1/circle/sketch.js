var c;
function setup() {
  // put setup code here
  createCanvas(500, 500);
  c = createCanvas(100, 100);
}

function draw() {
  // put drawing code here
  saveCanvas(c, 'myCanvas', 'jpg');
  }
  ellipse(mouseX, mouseY, 100, 100) ;
}
