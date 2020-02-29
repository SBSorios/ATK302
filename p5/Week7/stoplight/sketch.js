var myState = 0;
var timer = 0;
var red = 0;
var yellow = 0;
var green = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  ellipseMode(CENTER);
  background('white');
  noStroke();
}

function draw() {
  // put drawing code here
  rectMode(CENTER); // Set rectMode to CENTER
  fill('yellow'); // Set fill to gray
  rect(395, 81, 150, 350); // Draw gray rect using CENTER mode

  fill('green');
  ellipse(395, 50, 75, 75);

  fill(255, 204, 0);
  ellipse(395, 125, 75, 75);

  fill('red');
  ellipse(395, 200, 75, 75);

  switch (myState) {

    case 0: // red light
fill('black') ;
ellipse(395, 125, 75, 75);
ellipse(395, 50, 75, 75);
fill('red');
ellipse(395, 200, 75, 75);
      timer++;
      if (timer > 300) {
        myState = 1;
        timer = 0;

      }
      break;
    case 1:
    fill('black') ;
    ellipse(395, 200, 75, 75);
    ellipse(395, 125, 75, 75);
    fill('green');
    ellipse(395, 50, 75, 75);
      timer++;
      if (timer > 300) {
        myState = 2;
        timer = 0;

      }
      break;
    case 2:
    fill('black') ;
    ellipse(395, 200, 75, 75);
    ellipse(395, 50, 75, 75);
    fill(255, 204, 0);
    ellipse(395, 125, 75, 75);

      timer++;
      if (timer > 300) {
        myState = 3;
        timer = 0;


      }
      break;
    case 3:
    fill('black') ;
    ellipse(395, 125, 75, 75);
    ellipse(395, 50, 75, 75);
    fill('red');
    ellipse(395, 200, 75, 75);

      timer++;
      if (timer > 300) {
        myState = 0;
        timer = 0;
      }


      function mouseReleased() {
        myState = myState + 1;
        if (myState > 3) {
          myState = 0;
        }
      }
  }
}
