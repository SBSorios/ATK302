function setup() {
  //// Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);

}

function draw() {
  // put drawing code here

    background(0, 153, 255);
    noStroke();

    fill('brown');
    rect(100, 150, 63, 250);

    fill('green');
    arc(130, 150, 200, 150, PI, TWO_PI);

    fill(255, 153, 51);
    ellipse(500, 144, 72, 72);

    fill(255);
    arc(479, 85, 150, 150, PI, TWO_PI);

    fill(255);
    arc(385, 85, 125, 75, PI, TWO_PI);

    fill(255);
    arc(575, 85, 125, 100, PI, TWO_PI);

    fill(51, 204, 51);
    rect(0, 300, 750, 100);
fill(0) ;
textSize(40) ;
    text(mouseX + "," + mouseY,40,40);
  }
