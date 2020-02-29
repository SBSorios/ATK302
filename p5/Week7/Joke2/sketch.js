var myState = 0;
var timer = 0;
function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here
  background ('green');

switch(myState){

    case 0:
    text("Why can't you hear the psychiatrist use the bathroom?", 100, 100);
    timer++ ;
    if (timer > 200) {
      myState = 1 ;
      timer = 0;
    }
    break ;

    case 1:
    text("Why?", 100, 100);
    timer++ ;
    if (timer > 200) {
      myState = 2;
      timer = 0;
    }
    break ;

    case 2:
    text("Because the P is silent!", 100, 100);
    if (timer > 200) {
      myState = 1;
      timer = 0;

}

}


function mouseReleased (){
  myState = myState + 1 ;
  if (myState > 2) {
    myState = 0;
  }
}
}
