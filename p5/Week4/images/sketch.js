var BunnyTerminator;

function setup() {
  // put setup code here
  createCanvas(800, 800) ;
  BunnyTerminator = loadImage("assets/BunnyTerminator.jpg");
image(BunnyTerminator,0,0);
tint(255,0,0);
image(BunnyTerminator,20,20);
}
function draw() {
// put drawing code here
image(BunnyTerminator, 20,100);
}
