var x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // put drawing code here
  background('blue');
  ellipse(x, 100, 50, 50) ;

x++ ;

if (x > width) {

  x = 0 ;

}
  //ellipse(x, 100, 100, 100);
  //x++;
  // x = x + 5


  if (!(mouseIsPressed)) {
      x += 5;
  }
}
