var bt;
//var binde;

function preload() {
	bt = loadStrings("assets/bt.dk.txt");
}

//function preload() {
	//binde = loadStrings("assets/binde.txt");
//}

function setup() {
	createCanvas(800,600);
}


function draw() {
	background(0);
	fill(255,100,0);
	textSize(18);
	text(bt[8], 225,225);
	text(bt[4], 225,300);
	text("og", 225, 265);
	//text(binde[2], 225, 265);	
}


function mousePressed() {
	shuffle(bt,true);
	//shuffle(binde,true);
	
}
