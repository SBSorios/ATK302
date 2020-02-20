var myState = 0;
var timer = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0:
      background('red');
      text("Tehre is noh time to beh lohst! Batul Brothas!", 100, 100);
      timer = timer + 1;
      if (timer > 200) {
        myState = 1 ;
        timer = 0;
      }
      break;
    case 1:
      background('green');
      text("Spehss Mahrens, todeh the enemeh is at oua doar! We know oua duteh and we will do eet. We fight for our honor as Blud Rehvens,as SPESS MAHRENS, and we fight in the nehme of the Empra!", 100, 100);
      timer = timer + 1;
      if (timer > 200) {
        myState = 2 ;
        timer = 0;
      }
      break;

    case 2:
      background('red');
      text("deep strikes", 100, 100);
      timer = timer + 1;
      if (timer > 200) {
        myState = 3 ;
        timer = 0;
      }
      break;

    case 3:
     background('green');
     text("SPESS SPESS SPESS",100, 100);
      break;
      timer = timer + 1;
      if (timer > 200) {
        myState = 4 ;
        timer = 0;
      }

    case 4:
      background('red');
      text("We are the spehss mahrens! WE ARE THE EMPRA'S FUREH!", 100, 100);
      break;

  }

}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 4) {
      myState = 0;
    }
}
