var myState = 0;
var timer = 0;
var Hound;
var Lich;
var Revenant;
var Crossbowman;
var MonsterFace;
var Dracula;
var EvilLaugh;
var MonsterGrowl;
var x = 0;
var gif_loadImg, gif_createImg;
var gif_loadImg2, gif_createImg2;
var gif_loadImg3, gif_createImg3;
var gif_loadImg4, gif_createImg4;
var gif_loadImg5, gif_createImg5;
var gif_loadImg6, gif_createImg6;

function preload() {

  gif_loadImg = loadImage("Assets/VampireFlying.gif");
  gif_createImg = createImg("Assets/VampireFlying.gif");

  gif_loadImg2 = loadImage("Assets/MonsterFace.gif");
  gif_createImg2 = createImg("Assets/MonsterFace.gif");

  gif_loadImg3 = loadImage("Assets/LeftHand.gif");
  gif_createImg3 = createImg("Assets/LeftHand.gif");

  gif_loadImg4 = loadImage("Assets/RightHand.gif");
  gif_createImg4 = createImg("Assets/RightHand.gif");

  gif_loadImg5 = loadImage("Assets/Soul.gif");
  gif_createImg5 = createImg("Assets/Soul.gif");

  gif_loadImg6 = loadImage("Assets/Soul.gif");
  gif_createImg6 = createImg("Assets/Soul.gif");

  gif_loadImg7 = loadImage("Assets/Soul.gif");
  gif_createImg7 = createImg("Assets/Soul.gif");

  gif_loadImg8 = loadImage("Assets/FastSoul.gif");
  gif_createImg8 = createImg("Assets/FastSoul.gif");

  gif_loadImg9 = loadImage("Assets/FastSoul.gif");
  gif_createImg9 = createImg("Assets/FastSoul.gif");

  gif_loadImg10 = loadImage("Assets/FastSoul.gif");
  gif_createImg10 = createImg("Assets/FastSoul.gif");

  Dracula = loadSound('Assets/Dracula.mp3');
  EvilLaugh = loadSound('Assets/EvilLaugh.mp3');
  MonsterGrowl = loadSound('Assets/MonsterGrowl.mp3');

}

let ele;

function setup() {
  // put setup code here
  ele = createAudio('Assets/EvilLaugh.mp3');
  ele.autoplay(true);

  createCanvas(800, 800);
  background('black');
  Hound = loadImage('Assets/Hound.png');
  Lich = loadImage('Assets/Lich.png');
  Revenant = loadImage('Assets/Revenant.png');
  Crossbowman = loadImage('Assets/Crossbowman.png');
  MonsterFace = loadImage('Assets/MonsterFace.png');
  STRANGERCREATURE = loadFont('Assets/STRANGERCREATURE.ttf');

  //gif width & height
  gif_createImg.position(-5000, -5000);
  gif_width = gif_createImg.width;
  gif_height = gif_createImg.height;
  print("gif width: " + gif_width);
  print("gif height: " + gif_height);
  gif_createImg.size(gif_width / 2, gif_height / 2);


  gif_createImg2.position(-5000, -5000);
  gif_width = gif_createImg2.width;
  gif_height = gif_createImg2.height;
  print("gif width: " + gif_width);
  print("gif height: " + gif_height);
  gif_createImg2.size(gif_width / 2, gif_height / 2);

  gif_createImg3.position(-5000, -5000);
  gif_width = gif_createImg3.width;
  gif_height = gif_createImg3.height;
  print("gif width: " + gif_width);
  print("gif height: " + gif_height);
  gif_createImg3.size(gif_width / 2, gif_height / 2);

  gif_createImg4.position(-5000, -5000);
  gif_width = gif_createImg4.width;
  gif_height = gif_createImg4.height;
  print("gif width: " + gif_width);
  print("gif height: " + gif_height);
  gif_createImg4.size(gif_width / 2, gif_height / 2);

  gif_createImg5.position(-5000, -5000);
  gif_width = gif_createImg5.width;
  gif_height = gif_createImg5.height;
  print("gif width: " + gif_width);
  print("gif height: " + gif_height);
  gif_createImg5.size(gif_width / 2, gif_height / 2);

  gif_createImg6.position(-5000, -5000);
  gif_width = gif_createImg6.width;
  gif_height = gif_createImg6.height;
  print("gif width: " + gif_width);
  print("gif height: " + gif_height);
  gif_createImg6.size(gif_width / 2, gif_height / 2);

  gif_createImg7.position(-5000, -5000);
  gif_width = gif_createImg7.width;
  gif_height = gif_createImg7.height;
  print("gif width: " + gif_width);
  print("gif height: " + gif_height);
  gif_createImg7.size(gif_width / 2, gif_height / 2);

  gif_createImg8.position(-5000, -5000);
  gif_width = gif_createImg8.width;
  gif_height = gif_createImg8.height;
  print("gif width: " + gif_width);
  print("gif height: " + gif_height);
  gif_createImg8.size(gif_width / 2, gif_height / 2);

  gif_createImg9.position(-5000, -5000);
  gif_width = gif_createImg9.width;
  gif_height = gif_createImg9.height;
  print("gif width: " + gif_width);
  print("gif height: " + gif_height);
  gif_createImg9.size(gif_width / 2, gif_height / 2);

  gif_createImg10.position(-5000, -5000);
  gif_width = gif_createImg10.width;
  gif_height = gif_createImg10.height;
  print("gif width: " + gif_width);
  print("gif height: " + gif_height);
  gif_createImg10.size(gif_width / 2, gif_height / 2);

  // change size



}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0:
      background('black');
      push();
      fill('red');
      textFont(STRANGERCREATURE, 50);
      textSize(30);
      text("Let's start this presentation with a quiz", 80, 100);
      pop();
      break;

    case 1:
      background('black');
      push();
      fill('red')
      textFont(STRANGERCREATURE, 50);
      textSize(30);
      text("Which one of these is not like the other", 80, 100);
      pop();
      image(Hound, 100, 400, 200, 200);
      image(Lich, 100, 150, 200, 200);
      image(Revenant, 400, 150, 200, 200);
      image(Crossbowman, 400, 400, 200, 200);
      TimerText();
      //  push();
      //  translate(665,-103);
      //    rotate(radians(-265))
      //      TimerText();

      //  pop();
      timer = timer + 1;
      if (timer > 500) {
        myState = 2;
        timer = 0;
      }

      break;

    case 2:
      background('black');
      push();
      fill('red');
      textFont(STRANGERCREATURE, 50);
      textSize(30);
      text("It's", 300, 100);

      pop();
      push();
      fill('green');
      textSize(25);
      text("Crossbowman", 375, 100);
      pop();

      push();
      fill('purple');
      textSize(25);
      text("How dare you?!", 150, 150);
      pop();

      push();
      fill('turquoise');
      textSize(25);
      text("I WILL TEAR YOUR SOUL APART!!!", 380, 140);
      pop();

      push();
      fill('Grey');
      textSize(25);
      text("Arf?", 150, 400);
      pop();

      push();
      fill('Green');
      textSize(25);
      text("Blaaaaaaaaaarrrrrggggggghhhhh...!", 375, 380);
      pop();

      image(Hound, 100, 400, 200, 200);
      image(Lich, 100, 150, 200, 200);
      image(Revenant, 400, 150, 200, 200);
      image(Crossbowman, 400, 400, 200, 200);

      break;

    case 3:
      background('black');
      image(Revenant, 275, 400, 200, 300);
      image(Lich, 0, 400, 200, 300);
      image(Hound, 550, 400, 200, 300);

      push();
      fill('Purple');
      textSize(25);
      text("I am the most intelligent out of this lot!", 0, 375);
      pop();

      push();
      fill('turquoise');
      textSize(25);
      text("I LITERALLY HAVE NO FLESH OR BONES!!!", 200, 325);
      pop();
      push();
      fill('Grey');
      textSize(25);
      text("Arf arf!", 550, 400);
      pop();
      break;

    case 4:
      background('black');
      image(Revenant, 275, 400, 200, 300);
      image(Lich, 0, 400, 200, 300);
      image(Hound, 550, 400, 200, 300);

      push();
      fill('Purple');
      textSize(25);
      text("I command you to pick me instead!", 0, 375);
      pop();

      push();
      fill('turquoise');
      textSize(25);
      text("PICK ME OR YOU WILL KNOW MY PAIN!!!", 200, 325);
      pop();
      push();
      fill('Grey');
      textSize(25);
      text("Arf Aaaaarrrrfff!", 550, 400);
      pop();
      break;

    case 5:
      background('black');
      fill('red');
      text("Are my subjects being disorderly", 65, 200);
      textFont(STRANGERCREATURE, 50);
      image(Revenant, 275, 400, 200, 300);
      image(Lich, 0, 400, 200, 300);
      image(Hound, 550, 400, 200, 300);



      break;

    case 6:
      background('black');
      image(Revenant, 275, 500, 200, 300);
      image(Lich, 0, 500, 200, 300);
      image(Hound, 550, 500, 200, 300);
      fill('red');
      text("It is off to oblivion with you lot", 50, 100);
      textFont(STRANGERCREATURE, 50);
      gif_createImg.position(250, 140);


      break;

    case 7:

      background('black');
      fill('red');
      text("Klaatu barada nitko", 175, 100);
      textFont(STRANGERCREATURE, 50);

      gif_createImg5.position(0, 500);
      gif_createImg6.position(250, 500);
      gif_createImg7.position(500, 500);

      break;

    case 8:
      background('black');
      fill('red');
      text("Good thing too because its dinner time", 15, 100);
      textFont(STRANGERCREATURE, 50);

      gif_createImg5.position(0, 500);
      gif_createImg6.position(250, 500);
      gif_createImg7.position(500, 500);


      break;
    case 9:

      background('black');
      fill('red');
      text("The takeaway is don't be a sore loser", 15, 100);
      textFont(STRANGERCREATURE, 50);
      gif_createImg2.position(250, 110);
      gif_createImg3.position(500, 200);
      gif_createImg4.position(0, 200);
      gif_createImg8.position(0, 500);
      gif_createImg9.position(250, 500);
      gif_createImg10.position(500, 500);

      MonsterGrowl.play();
      timer++;
      if (timer > 120) {
        myState = 10;
        timer = 0;
      }


      break;
    case 10:
      background('black');
      fill('red');
      text("The takeaway is don't be a sore loser", 15, 100);
      textFont(STRANGERCREATURE, 50);
      gif_createImg2.position(250, 110);
      gif_createImg3.position(500, 200);
      gif_createImg4.position(0, 200);
      gif_createImg8.position(0, 500);
      gif_createImg9.position(250, 500);
      gif_createImg10.position(500, 500);
      MonsterGrowl.stop();



      //  image(gif_loadImg, 50, 50);

      // updates animation frames by using an html
      // img element, positioning it over top of
      // the canvas.
      //gif_createImg.position(50, 350);

      //image(gif_loadImg, 50, 50);

      // updates animation frames by using an html
      // img element, positioning it over top of
      // the canvas.



  }

}

function mouseReleased() {
  myState = myState + 1;
  //if (myState > 7) {
  //  myState = 0;
  //  }
}

function TimerText() {
  push();
  fill('black');
  rect(x, 700, 540, 50);
  fill('red');
  textSize(25);
  text("Hurry before I reach the other side of the screen", x, 730);

  x = x + 0.520;
  if (x > width) {
    x = 0;
  }

  pop();
}

//  function touchStarted() {
//  getAudioContext().resume();
//}
