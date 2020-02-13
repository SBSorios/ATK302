var = x

function setup(){

creatveCanva(800,800);

}

function draw() {
background('black');
push();
translate(x,0);
Avatar();
pop();
x = x + 1;
if (x > width){
  x = -200;
}

}
function Avatar(){

ellipse(100,100,100,100);

}
