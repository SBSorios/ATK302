var cars = [] ;

function setup() {
  // put setup code here
  createCanvas(800, 800);

for (var i = 0; i < 20 ; i++) {
  cars.push(new Car());

}
}

function draw() {
  // put drawing code here
  background('lightblue');

for (var i = 0; i < cars.length; i++) {
  cars[i].display();
  cars[i].drive();
}
}

//our Car class!!!
function Car(){
// attributes
this.pos = createVector(random(width), random(height));
this.vel = createVector(random(-5,5), random(-5,5));
this.r = random(255);
this.g = random(255);
this.b = random(255);

// methods
this.display = function (){
  fill (this.r, this.g, this.b);
  rect(this.pos.x, this.pos.y, 100,100);
}

this.drive = function() {
  this.pos.add(this.vel);
  if(this.pos.x > width) this.posx = 0;
  if(this.pos.x < 0) this.pos.x = width ;
  if(this.pos.y > height) this.pos.y = 0 ;
  if(this.pos.y < 0) this.pos.y = height;
}
}
