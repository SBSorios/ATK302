var song1, song2, song3;
var myState = 0;

function preload() {
  song1 = loadSound('assets/donkey.mp3');
  song2 = loadSound('assets/skate.mp3');
  song3 = loadSound('assets/thrill.mp3');


}

function setup() {
  //function setup() {
  //let c = createCanvas(100, 100);
  //background(255, 0, 0);
  //saveCanvas(c, 'myCanvas', 'jpg');

  // put setup code here
  createCanvas(720, 200);
  background(255, 0, 0);

}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0:
      song1.play(); // this is what starts the sound
      myState = 1;
      break;

    case 1:
      break;

    case 2:
      song2.play();
      myState = 3;
      break;

    case 3:
      break;

    case 4:
      song3.play();
      myState = 5;
      break;

    case 5:

      break;

  }
}

function mouseReleased() {
myState = myState + 1;

  if (myState > 5) {
    myState = 0;
  }
  song1.pause();
  song2.pause();
  song3.pause();
}
