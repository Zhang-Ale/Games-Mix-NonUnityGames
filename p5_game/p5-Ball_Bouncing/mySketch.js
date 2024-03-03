let posX;
let posY;
let prevPosX;
let prevPosY;
let w;
let velX;
let velY;
let gravity = 0.2;
let hue;
let randomValue;
let clickTimes;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	rect(0, 0, windowWidth, windowHeight);
	
	posX = random(0, width); 
	posY = 50; 
	prevPosX = posX;
	prevPosY = posY;
	
	w = 100;
	velX = 5;
	velY = 0;
	randomValue = random(0, 255);
	colorMode(HSB);
	noStroke();
	hue = random(0, 255);
	
	clickTimes = 0;
	fill (0);
	noStroke();
	textSize (20);
	text("You have clicked 0 times", 20, 30); 
}

function draw() 
{
	velY = velY + gravity;
	posX = posX + velX;
	posY = posY + velY;
	
	if(posY > height)
	{
		velY = velY * -1;
		posY = height;
	}
	if(posX >= width || posX <= 0)
	{
		velX = velX * -1;
	}
	
	hue = hue + randomValue;
	if(hue >= 255)
	{
		randomValue = -1;
	}
	if(hue <= 0)
	{
		randomValue = 1;
	}
	
	if(clickTimes < 10)
	{
		fill (0);
		noStroke();
		textSize (20);
		text("You have clicked    times", 20, 30); 
	}
	else
	{
		fill (0);
		noStroke();
		textSize (20);
		text("You have clicked      times", 20, 30); 
	}
	
}

function mousePressed()
{
	background(100);
	fill(hue, 150, 200);
	ellipse(posX, posY, w, w);
	stroke(hue, 150, 200);
	line(prevPosX, prevPosY, posX, posY)
	prevPosX = posX;
	prevPosY = posY;
	clickTimes += 1;	
	text(clickTimes, 175, 30);
}