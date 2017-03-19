var tree = [];
var leaves = [];
var count =0;

function setup() {
 	createCanvas(600,600);
 	
 	var a = createVector(width/2, height);
	var b = createVector(width/2, height - 100);
	var root = new Branch(a, b);
	
	tree[0] = root;
	
}

function mousePressed() { //træet udvikler sig for hver branch med denne kode
	for (var i = tree.length-1; i>=0; i--) {
		if (!tree[i].finished) {
			tree.push(tree[i].branchA());
			tree.push(tree[i].branchB());
	}
		tree[i].finished = true;
	}
	count++; //bladene sættes på med denne kode
	
	if (count===6) {
		for (var i = 0; i<tree.length; i++) {
		if (!tree[i].finished) {
			var leaf = tree[i].end.copy();
			leaves.push(leaf);
			}
		}
	}
	
}

// Herfra sættes bladene på, hvor de skulle forekomme i lyserød for
//for enden af hver branch efter 6

 
function draw() {
	background (0);
	
	
	for (var i=0; i<tree.length; i++){
		tree[i].show();
		//tree[i].jitter();
}
	
	for (var i=0; i<leaves.lenght; i++){
	fill(255,0,100,100);
	noStroke();
	ellipse(leaves[i].x, leaves[i].y, 8,8);
	leaves[i].y += random(0,2);
	}
	
	
}
