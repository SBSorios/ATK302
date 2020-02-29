var mic;
var vol;
var y = 0;
var Spess;

function setup() {
  createCanvas(800, 800);
  Spess = loadImage('assets/SPEHSS-MAHREENS.JPG');
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(100);
  image(Spess, 100, y)
  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 3) {
    // do something
    y++;

  }

  fill('red');
  textSize(25);
  text("Click the screen first in the name of TEH EMPRAH " + vol, 20, 400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}

//function draw() {
  // put drawing code here
  //image(Spess, 275, 300, 200, 300);
//}
