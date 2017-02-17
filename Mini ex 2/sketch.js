var img;
function preload() {
  img = loadImage("assts/Error.png");
}

function setup(){
  createCanvas(800, 600, WEBGL);
}

function draw(){
  background(250);
  texture(img);
  rotateX(frameCount * 0.04);
  rotateY(frameCount * 0.04);
  box(200, 200, 200);
}
