let backValue = 100;
let canvasColor = 0; 
let lightColor = 50;
let rectColor = 40;
let lineStroke = 30;
let circleOne = 10;
let circleTwo = 20;
let circleThree = 30;
let myText = '';
let pressedOnce = false;

function setup() 
{
	ReDrawStartBackground();
	//text
	textSize(30);
	stroke(1);
	textAlign(CENTER, TOP);		
	fill(255);
	myText = "Click any mouse button to start.";
	text(myText, 480, 75);
}

function ReDrawStartBackground()
{
	//canvas
	createCanvas(960, 540);
	background(backValue);
	fill(canvasColor);
	rect(0, 0, 960, 540);
	//triangle
	fill(lightColor); 
	strokeWeight(0);
	triangle(410, 268, 550, 268, 480, 400);
	//Light bulb
	ellipse(480, 250, 150, 150);
	//rectangle
	fill (rectColor);
	rect (450, 350, 60, 60, 10);
	//lines	
	stroke(lineStroke);
	strokeWeight(1);
	line (460, 365, 500, 365);
	line (465, 380, 495, 380);
	line (460, 395, 500, 395);	
}

function mouseClicked()
{
	if (pressedOnce == false )
	{
		ReDrawStartBackground();		
		stroke(1);
		textAlign(CENTER, TOP);		
		fill(255);
		myText = "Let's play a small visual game.";
		text(myText, 480, 75);
		pressedOnce = true;
	}
	else
	{
		ReDrawStartBackground();		
		stroke(1);
		textAlign(CENTER, TOP);		
		fill(255);
		myText = "Look at the canvas closely. You can press ENTER to start.";
		text(myText, 480, 75);
	}
}

function draw() 
{	
	let bool = false;
	if(keyIsPressed && keyCode === ENTER)
	{
		bool = true;
	}
	
	if(bool)
	{
		background(backValue--);
		fill(canvasColor++);
		rect(0, 0, 960, 540);
		//circle1 
		strokeWeight(0);
		fill(circleOne++); 
		ellipse(480, 270, 850, 850);
		//circle2
		fill(circleTwo++); 
		ellipse(480, 270, 600, 600);
		//circle3
		fill(circleThree++); 
		ellipse(480, 270, 350, 350);
		//triangle
		fill(lightColor); 
		triangle(410, 268, 550, 268, 480, 400);
		//Light bulb
		ellipse(480, 250, 150, 150);
		//rectangle
		fill (rectColor);
		rect (450, 350, 60, 60, 10);
		//lines	
		stroke(lineStroke);
		strokeWeight(1);
		line (460, 365, 500, 365);
		line (465, 380, 495, 380);
		line (460, 395, 500, 395);
	}
	
	if(canvasColor >= 255)
	{
		textAlign(CENTER, TOP);		
		fill(0);
		myText = 'Did the light bulb change its color?';
		text(myText, 480, 75);
	}
}

/*function mousePressed() 
{
	stroke(255);
	strokeWeight(3);
	line(mouseX, mouseY, pmouseX, pmouseY);
}*/