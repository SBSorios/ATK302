var cars = [];
var frogPos;
var myState = -1;
var maxCars = 10;
var maxTimer = 11 * 60;
var timer = maxTimer
var Boreale;
var Khornate;
var SPESS;
var Borealum;
var Failure;
var Victory;
var Defeat;
var Stronghold;
var BorealeIntro;
var Office;
var Blackletter;

function preload() {
  Stronghold = loadSound('Assets/Stronghold.mp3');
  SPESS = loadSound('Assets/SPESSMEHREENS.mp4');
  Borealum = loadSound('Assets/Borealum.mp3');
  Failure = loadSound('Assets/Failure.mp3');

}


function setup() {
  // put setup code here
  createCanvas(800, 800);
  Boreale = loadImage('Assets/Boreale.png');
  Khornate = loadImage('Assets/Khornate.JPG');
  Victory = loadImage('Assets/Victory.JPG');
  Defeat = loadImage('Assets/Defeat.JPG');
  BorealeIntro = loadImage('Assets/BorealeIntro.jpg');
  Office = loadImage('Assets/Office.jpg');
  Blackletter = loadFont('Assets/Blackletter.ttf');
  imageMode(CENTER);

  //SPESS.play();
  // spawn cars
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());

  }

  frogPos = createVector(400, height - 100);
  textAlign(CENTER);
}

function draw() {
  // put drawing code here
  switch (myState) {
    case -1:
      Stronghold.loop();
      myState = 0 ;
      break;

    case 0: //menu
      image(BorealeIntro, 400, 400, 800, 800);
      fill('white');
      textFont(Blackletter, 22);
      text("Commander Boreale, todeh the enemeh is at oua doar! Kill them in teh nehme of teh Emprah!", 400, 80);
      fill('Blue');
      text("Left Mouse Click to Start, Use Arrow Keys to Move", 400, 700);
      break;

    case 1: //game state
      image(Office, 400, 400, 800, 800);
      game();
      timer = timer - 1;
      if (timer <= 0) {
        timer = maxTimer;
        myState = 3;
          SPESS.stop();
          Failure.play();
      }
      break;

    case 2: //win state
      //background('yellow');
      image(Victory, 400, 400, 800, 800);
      fill('white');
      text("Teh Emprah Protects!", 400, 400);

      break;

    case 3: //lose
      image(Defeat, 400, 400, 800, 800);
      fill('red');
      text("You have fehld teh Emprah...", 400, 100);

      break;
  }
}

function mouseReleased() {
  switch (myState) {
    case 0:
    Stronghold.stop();
    SPESS.play();
      myState = 1;
      break;

    case 2: // they won!
      //reset timer
      timer = maxTimer;
      // respawn cars
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());

      }
      Borealum.stop();
      Stronghold.loop();
      myState = 0;
      break;

    case 3: // they lost!
      //reset timer
      timer = maxTimer;
      //respawn cars
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());

      }
      Failure.stop();
      Stronghold.loop();
      myState = 0;
      break;

  }
}

function game() {

  //background('lightblue');

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
      SPESS.stop();
        Borealum.play();
    myState = 2;
  }
  // frog
  //fill('green');
  //ellipse(frogPos.x,frogPos.y,50,50);
  image(Boreale, frogPos.x, frogPos.y, 100, 100);
  CheckForKeys();
}

function CheckForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}
//our Car class!!!
function Car() {
  // attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  // methods
  this.display = function() {
    image(Khornate, this.pos.x, this.pos.y, 100, 100);
    //fill (this.r, this.g, this.b);
    //rect(this.pos.x, this.pos.y, 30,30);
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
