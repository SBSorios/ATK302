var i = 0;
var backgroundpart1;
var PowerSwordGradient;
var backgroundpart2;

function preload() {

  //backgroundpart1 = loadImage('ExterminatusPart1.jpg');

}

function setup() {
  //// Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(1000, 500);
  PowerSwordGradient = loadImage('PowerSwordGradient.svg');
  backgroundpart1 = loadImage('ExterminatusPart1.jpg');
  backgroundpart2 = loadImage('ExterminatusPart2.jpg');

}

function draw() {
  // put drawing code here
  rect(25, 25, 50, 50);
  if (mouseIsPressed) {
    image(backgroundpart2, 0, 0, width, height);
  } else {
    image(backgroundpart1, 0, 0, width, height);
  }

  push();
  translate(664,-103);
  rotate(radians(95));
  //scale(1.5);

  BackPackBulge();
  pop();

  noStroke();
  fill('black');
  quad(370, 95, 392, 95, 392, 110, 370, 110)

  fill('black');
  quad(345, 155, 360, 165, 360, 175, 345, 170)

  fill('black');
  quad(415, 155, 390, 165, 390, 175, 415, 170)

  fill('black');
  quad(340, 165, 340, 140, 350, 130, 350, 170)

  fill('black');
  quad(420, 165, 420, 140, 410, 130, 410, 170)

  fill('black');
  quad(350, 125, 350, 170, 380, 185, 380, 125)

  fill('black');
  quad(410, 125, 410, 170, 380, 185, 380, 125)
  fill('black');
  quad(350, 125, 350, 170, 380, 185, 380, 125)

  fill('black');
  quad(410, 125, 410, 170, 380, 185, 380, 125)

  fill('black');
  arc(380, 125, 60, 50, PI, TWO_PI);

  fill('grey');
  ellipse(355, 160, 10, 10)

  fill('grey');
  ellipse(405, 160, 10, 10)

  fill('red');
  triangle(365, 120, 380, 132, 365, 130);

  fill('red');
  triangle(400, 120, 385, 132, 400, 130);

  fill('white');
  rect(340, 185, 80, 100)

  fill('white');
  triangle(340, 165, 380, 185, 340, 185)

  fill('white');
  triangle(420, 165, 380, 185, 420, 185)

  fill('black');
  triangle(360, 200, 380, 210, 380, 230)

  fill('black');
  triangle(400, 200, 380, 210, 380, 230)

  fill('black');
  triangle(400, 260, 380, 230, 380, 250)

  fill('black');
  triangle(360, 260, 380, 230, 380, 250)

  fill('black');
  triangle(400, 230, 380, 230, 410, 250)

  fill('black');
  triangle(400, 230, 380, 230, 410, 210)

  fill('black');
  triangle(350, 210, 360, 230, 380, 230)

  fill('black');
  triangle(350, 250, 360, 230, 380, 230)

  fill(0);
  textSize(40);
  text(mouseX.toFixed(0) + "," + mouseY, 40, 40);

  fill('black');
  arc(380, 285, 80, 75, TWO_PI, PI);

  fill('black');
  quad(342, 290, 330, 325, 355, 345, 380, 310)

  fill('black');
  ellipse(336, 344, 50, 50)

  fill('black');
  rect(318, 345, 35, 80)

  fill('black');
  arc(315, 425, 60, 60, PI, TWO_PI);

  fill('black');
  rect(280, 425, 77, 10)

  fill('black');
  rect(375, 300, 40, 60)

  fill('black');
  ellipse(395, 360, 55, 55)

  fill('black');
  rect(375, 360, 40, 75)

  fill('black');
  arc(395, 435, 28, 75, HALF_PI, PI);
  arc(395, 435, 28, 75, 0, HALF_PI);

  fill(153, 0, 0);
  rect(330, 130, 10, 90)

  fill(153, 0, 0);
  rect(250, 220, 90, 10)

  fill('black');
  arc(330, 220, 160, 180, 3.14, 4.72);

  fill(153, 0, 0);
  rect(420, 130, 10, 90)

  fill(153, 0, 0);
  rect(420, 220, 90, 10)

  fill('black');
  arc(429, 220, 160, 180, 4.72, 0);

  fill('black');
  rect(445, 230, 40, 30)

  fill('black');
  quad(484, 252, 489, 313, 451, 315, 444.9, 255)

  fill('black');
  quad(451, 310, 450, 300, 440, 304, 442, 314)

  fill('black');
  quad(440, 304, 436, 306, 436, 316, 443.8, 318)

  fill('black');
  ellipse(440, 316, 8, 12)

  fill('black');
  quad(453.8, 329.5, 460, 336, 452, 344, 446, 336)

  fill('black');
  quad(446, 336, 442, 337, 443, 342, 452, 344)

  fill('black');
  ellipse(444, 338, 10, 8)

  fill('black');
  quad(464.8, 335, 473.5, 335, 468, 348, 460, 345)

  fill('black');
  quad(460.5, 345, 457, 348, 462, 351, 468, 348)

  fill('black');
  ellipse(459, 348, 12, 7)

  fill('black');
  quad(476, 334, 482.5, 334, 481, 350, 472, 350)

  fill('black');
  quad(472, 350, 481.1, 350, 473.5, 355.75, 467, 352.75)

  fill('black');
  ellipse(471, 353.25, 10, 6)

  fill('black');
  quad(485, 334, 490, 347, 497, 341, 488, 330)

  fill('black');
  quad(490, 345, 490, 350, 496.6, 350.6, 497, 341)

  fill('black');
  ellipse(493, 350, 7, 10)

  fill('black');
  quad(451, 313, 454, 337, 489, 335, 489, 311)

  fill('black');
  rect(275, 230, 40, 30)

  fill('black');
  quad(275, 241, 315, 260, 274, 315, 247, 285)

  fill('black');
  quad(215, 308, 245, 335, 274, 315, 247, 285)

  fill(204, 51, 0)
  quad(252, 330, 253.1, 331.3, 260, 326.5, 259, 325.3)

  fill(204, 51, 0)
  quad(227, 299.5, 236, 293, 218, 269, 208, 277)

  fill(102, 51, 0)
  quad(209.7, 279, 219, 270.3, 221, 273, 212, 281.5)

  fill(102, 51, 0)
  quad(214, 284, 217.4, 288, 223.2, 276, 226.2, 280)

  fill(102, 51, 0)
  quad(220, 291, 228.6, 283.2, 230.7, 286, 222, 293.5)

  fill(255, 204, 0)
  quad(249.2, 334, 250.5, 336, 266.6, 325, 264.7, 323.3)

  fill(255, 204, 0)
  triangle(250.3, 335.9, 266.5, 325, 265, 338)

  fill(255, 204, 0)
  triangle(189, 292, 205.5, 264, 237, 254)

  fill(255, 204, 0)
  quad(212, 272, 202, 270, 199, 255, 212, 262)

  fill(153, 0, 0)
  ellipse(205, 263, 6, 6)

  fill('black');
  quad(202, 270, 191, 267, 190, 260, 198, 250.5)

  fill('black');
  quad(212, 262.1, 195, 252.7, 205, 248, 212, 250)

  fill('black');
  quad(190, 259.9, 81.5, 122, 98, 110, 205, 247.9)

  fill('black');
  triangle(98, 110, 81.5, 122, 70, 88)
  RedCross();
  push();
  translate(665,-103);
  rotate(radians(-265))
      RedCross();

pop();

  if (mouseIsPressed) {
    // this is the pressed state/
    push();
    rotate(radians(52));
    translate(15, 0)
    noStroke();
    PowerSwordGradient.resize(220, 150);
    image(PowerSwordGradient, 95, -75);
    pop();

  } else {
    // non-presse state

  }

}

function mousePressed() {
  console.log(mouseX + "," + mouseY);

}

function RedCross(){
    push();

    //translate(200, 0);

    fill(153, 0, 0);
    triangle(293, 140, 282, 155, 308, 137)

    fill(153, 0, 0);
    triangle(282, 155, 312, 155, 293, 168)

    fill(153, 0, 0);
    triangle(275, 170, 300, 190, 293, 168)

    fill(153, 0, 0);
    triangle(270, 200, 258, 181, 275, 170)

    fill(153, 0, 0);
    rect(275, 155, 18, 15)

    fill(153, 0, 0);
    triangle(293, 140, 275, 155, 282, 155)

    fill(153, 0, 0);
    triangle(275, 155, 293, 140, 283, 146)

    fill(153, 0, 0);
    triangle(258, 181, 275, 170, 275, 155)

    fill(153, 0, 0);
    triangle(258, 181, 265, 166, 275, 155)
    pop();
  }
  function BackPackBulge(){
    fill('grey');
    quad(-330,191,-320,238,-315,233,-315,180)
    quad(-315,180,-315,233,-285,233,-285,180)
    rect(-310,175,10,10)

    quad(-250,180,-255,233,-250,240,-240,191)
    quad(-250,180,-250,233,-315,233,-315,180)
    rect(-268,175,10,10)

    push();
    fill('black');
    quad(-331,205,-322,245,-319.8,240,-327,204.5)
    quad(-245,205,-250,240,-246,242,-241,205.2)
    pop();

    push();
    fill('grey');
    rotate(radians(-95));
    arc(-325, 232, 120, 80, 3, 4.50);
    pop();
  }
  function BackpackHalfSlit(){
    push();
    fill('black');
    quad(-331,205,-322,245,-319.8,240,-327,204.5)
    quad(-245,205,-250,240,-246,242,-241,205.2)
    pop();
  }
  function BackpackHalfBulb(){
    push();
    fill('grey');
    rotate(radians(-95));
    arc(-325, 232, 120, 80, 3, 4.50);
    pop();
  }
