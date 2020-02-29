var myState = 0;

function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here
  background ('red');

switch(myState){

    case 0:
    text("Diarrhea is hereditary", 100, 100);
    break ;

    case 1:
    text("How is that possible?", 100, 100);
    break ;

    case 2:
    text("It runs in our jeans", 100, 100);


}

}


function mouseReleased (){
  myState = myState + 1 ;
  if (myState > 2) {
    myState = 0;
  }
}
