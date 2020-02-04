var Box

function setup() {
  // put setup code here
  createCanvas(800, 800) ;
  Box = loadFont('assets/ABoxFor3.ttf')
}
function draw() {
// put drawing code here
background(100);
fill('red');   // SETS the color
  textFont(Box, 120);  // SETS the font
//  textSize(36);	// SETS the size of the font
  text('HELLO WORLD', 10, 150); // DISPLAYS TEXT WITH THE FONT

  textSize(30);
  text('From the BLUD REHVENS', 10, 250);
}
