var song1;

function touchStarted() {
  getAudioContext().resume();

}
function preload(){
  song1 = loadSound('assets/SPEHSS-MAHREENS.mp4');
}

function setup(){

creatveCanva(720,200);
background(255,0,0);
song1.play();

}

function draw() {


}

function mouseReleased(){
  if (song1.isPlaying()) {
    song1.pause();
  } else {
  }
song1.pause();
}
}
