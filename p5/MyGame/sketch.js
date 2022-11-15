let people = []; 

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100); 
	noStroke();
	for (let i = 0; i < 100; i = i + 1) {
		let x = random(0, width);
		let y = random(0, height);
		let z = random(0, 100); 
		people[i] = createPeople(x, y, z);
	}
}

function draw() {
	background(255); 
	for (let i = 0; i < 100; i = i + 1) 
	{
		updatePeople1(people[i]);
	}
	fill(50); 
	rect(width/2.23, height/2.05, 200); 
	fill(255); 
	textSize(60); 
	text('Me', width/2.08, height/1.5);
}

function createPeople(x, y, size) {
	let peopleValue = {};
	peopleValue.x = x;
	peopleValue.y = y; 
	peopleValue.size = size; 
	peopleValue.velX = random(-10, 10);
	return peopleValue;
}

function updatePeople1(t) {
	var x1 = t.x; 
	t.x = x1 + t.velX; 
	if (t.x > width || t.x < 0) {
		t.velX *= -1;
	}
	t.size = t.size * 1;	
	fill(105);
	rect(x1, 100, t.size);
	rect(t.x*1.5, 240, t.size*1.5);
}
