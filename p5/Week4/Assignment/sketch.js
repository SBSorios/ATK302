/**
 * demonstrates how to load a GIF image using
 * createImg to create an <img> on the page
 * and to use that to update animation
 * (and illustrates how p5's loadImage loads only
 * one frame otherwise).
 */

//var gif_loadImg, gif_createImg;

//function preload() {
//gif_loadImg = loadImage("SPEHSS-MAHREENS.gif");
//gif_createImg = createImg("SPEHSS-MAHREENS.gif");
//}

//function setup() {
//createCanvas(500, 700);
//background(0);
//}

//function draw() {
// loads only first frame
//image(gif_loadImg, 50, 50);

// updates animation frames by using an html
// img element, positioning it over top of
// the canvas.
//gif_createImg.position(50, 350);
//}
//Sounds

//}

//function draw() {
// put drawing code here

//}

//function mouseReleased(){
//SPESS.stop();
//}
//Font
var Box
var SPESS;
var Spess;
var Boreale;
var Diomedes;

function preload() {
  SPESS = loadSound('assets/SPESSMEHREENS.mp4');

}

function setup() {
  // put setup code here
  createCanvas(800, 800) ;
  Spess = loadImage('assets/SPEHSS-MAHREENS.JPG');
  Boreale = loadImage ('assets/Boreale.jpg');
  Diomedes = loadImage ('assets/Diomedes.jpg');
  SPESS.play();
  Box = loadFont('assets/ABoxFor3.ttf');
}

function draw() {
  // put drawing code here
  background(100);
  fill('red'); // SETS the color
  textFont(Box, 120); // SETS the font
  //  textSize(36);	// SETS the size of the font
  text('Batul Bruvas', 10, 150); // DISPLAYS TEXT WITH THE FONT
  textSize(30);
  text('Direct your attention to Force Commander Boreale of the BLUD REHVENS', 10, 250);
  //tint(255, 0, 0);
  image(Spess, 275, 300,200,300);
  image(Boreale, 0, 300,200,300);
  image(Diomedes, 550, 300,200,300);
}

  function mouseReleased() {
  SPESS.stop();
}
