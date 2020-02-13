var SPESS;

function preload() {
  SPESS = loadSound('assets/SPESSMEHREENS.mp4');
}
function setup() {
  //function setup() {
//let c = createCanvas(100, 100);
//background(255, 0, 0);
//saveCanvas(c, 'myCanvas', 'jpg');

  // put setup code here
  createCanvas(720, 200) ;
  background(255,0,0);
  SPESS.play();
}
function draw() {
// put drawing code here

}

function mouseReleased(){
  SPESS.stop();
}
