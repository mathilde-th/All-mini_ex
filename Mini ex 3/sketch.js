var pacman = 5;

function setup() {
createCanvas(800,600);

}

function draw() {
background(255);
frameRate(8);
fill(255, 204, 0);
ellipse(200, 300, 65, 65);
push()
translate(175,252);
fill(255);
noStroke();
triangle(26, 53, 59, 22, 75, 90);
pop()

fill(0);
ellipse(209, 285, 5, 5);
line(200,303,225,281);
line(200,303,224,321);


fill(200, 0, 200);
ellipse(220, 300, 8, 8);
fill(200, 0, 200);
ellipse(320, 300, 8, 8);
fill(200, 0, 200);
ellipse(420, 300, 8, 8);


pacman = pacman+1;
if (pacman==6){

frameRate(4);
background(255);
fill(255, 204, 0);
ellipse(200, 300, 65, 65);
fill(0);
ellipse(209, 285, 5, 5);
line(200,303,231,304);


fill(200,0,200);
ellipse(270, 300, 8, 8);
fill(200, 0, 200);
ellipse(370, 300, 8, 8);
fill(200, 0, 200);
ellipse(470, 300, 8, 8);

if (pacman=20){
pacman=0;
}
}



}
