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
var BorealeIntroduction;
var Office;
//var Blackletter;
//var BlackletterOutline;
//var Ancient;
var Bold;

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
  BorealeIntroduction = loadImage('Assets/BorealeIntroduction.JPG');
  Office = loadImage('Assets/Office.JPG');
  //Blackletter = loadFont('Assets/Blackletter.TTF');
//  BlackletterOutline = loadFont('Assets/BlackletterOutline.TTF');
  //Ancient = loadFont('Assets/Ancient.TTF');
  Bold = loadFont('Assets/theboldfont.ttf');
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
      image(BorealeIntroduction, 400, 400, 800, 800);
      //fill('black');
    //  textFont(BlackletterOutline, 22);
    //  text("Commander Boreale, today the enemy is at our door! Kill them in the name of the Emperor!", 400, 125);
      fill('yellow');
      textFont(Bold, 16);
      text("Commander Boreale, today the enemy is at our door! Kill them in the name of the Emperor!", 400, 100);
    //  fill('black');
    //  textFont(BlackletterOutline,22);
    //  text("Left Mouse Click to Start", 130, 75);
    fill('yellow');
    textFont(  Bold, 35);
    text("The Vindication of Indrick Boreale", 375, 50);

      fill('yellow');
      textFont(  Bold, 22);
      text("Left Mouse Click to Start", 150, 700);
    //  fill('black');
    //  textFont(BlackletterOutline,22);
    //  text("Use Arrow Keys to Move", 580, 75);
      fill('yellow');
      textFont(  Bold, 22);
      text("Use Arrow Keys to Move", 650, 700);
    //  fill('black');
    //  textFont(BlackletterOutline,22);
    //  text("You have 11 seconds to move and touch all the enemies before you are overwhelmed!", 400,100);
      fill('yellow');
      textFont(  Bold,18);
      text("You have 11 seconds to move and touch all the enemies before you are overwhelmed!",400, 125); //400,725);
      //fill('black');
      //rect(1,700,8000,40);
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
        fill('yellow');
          textFont(Bold,30);
      text("The Emperor Protects!", 425, 50);
    //  fill('black');
    //  textFont(BlackletterOutline,22);
  //  text("The Emperor Protects!", 600, 50);
    fill('yellow');
      textFont(Bold,30);
  text("Left Mouse Click to Start Over", 400, 650);
  //  fill('black');
  //  textFont(BlackletterOutline,22);
    //  text("Left Mouse Click to Start Over", 150, 50);


      break;

    case 3: //lose
      image(Defeat, 400, 400, 800, 800);
    fill(204, 0, 0);
      textFont( Bold,50);
    //  textStyle(BOLD);
      text("You have failed the Emperor...", 400, 50);
    //  fill('black');
      //  textFont(BlackletterOutline,50);
          //textStyle(BOLD);
    //  text("You have failed the Emperor...", 400, 50);
      fill(204, 0, 0);
      textFont( Bold,50);
    //  textStyle(BOLD);
      text("Left Mouse Click to Start Over", 400, 100);
  //  fill('black');
    //  textFont(BlackletterOutline,50);
    //  textStyle(BOLD);
  //    text("Left Mouse Click to Start Over", 450, 100);
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
