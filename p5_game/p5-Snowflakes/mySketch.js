let snowflakes = []; 
let mouses = []; 

function setup() 
{
	createCanvas(windowWidth, windowHeight); 
	background(50);

	back = loadImage('SimpleArt4.PNG'); 
  snowflake1 = loadImage('Snowflake5.png');
	snowflake2 = loadImage('Snowflake6.png'); 
	mouse = loadImage('Mouse.png'); 
	imageMode(CENTER); 
	
	back.resize(1920, 1000);
	back.alpha = 10; 
	snowflake1.resize(10, 10); 
	snowflake2.resize(0.2); 
	mouse.resize(0.2); 
}

function draw() 
{
	background(50); 
	image(back, windowWidth / 2, windowHeight / 2); 
	
	if (frameCount % 30 === 1) {
		let snow = new Snowflake();
		snowflakes.push(snow);
	}
	
	for (var i = 0; i < snowflakes.length; i++) 
	{
		snowflakes[i].update(); 
		if (snowflakes[i].x > width || snowflakes[i].x < 0) {
			snowflakes[i].velX = snowflakes[i].velX * -1;
		}
	}
	
	for (let i = 0; i < mouses.length; i++) {
		mouses[i].update();
		if (mouses[i].y < -500) {
			mouses.splice(i, 1);
			i = i - 1;
		}
	}
}

function mousePressed() 
{
	if (frameCount % 2 === 0) {
		let mouse = new Mouse(mouseX);
		mouses.push(mouse);
	}
}

class Snowflake {
		constructor() 
	{
			this.x = random(0, windowWidth); 
			this.y = 1; 
			this.diameter = 100; 
			this.velX = random(-1,1); 
			this.velY = random(2,3); 
			this.hit = false;
	}
	
		update() 
	{
			for (let i = 0; i < mouses.length; i++) {
			let d = dist(this.x + this.diameter, this.y + this.diameter, mouses[i].x + mouses[i].diameter, mouses[i].y + mouses[i].diameter);
			if (d < mouses[i].diameter && this.hit == false) 
			{
				this.hit = true;
				mouses.splice(i, 1);
				i = i - 1;
			}
		}
		if (this.hit == false) 
		{
			this.x += this.velX;
			this.y += this.velY;
			image(snowflake1, this.x, this.y - 200); 
			image(snowflake2, this.x * this.velX, this.y - 200); 
		}
	}
}

class Mouse {
	constructor(mouseX) {
		this.x = mouseX;
		this.y = 800;
		this.diameter = 200;
	}

	update() {
		this.y = this.y - 7;
		image(mouse, this.x, this.y);
	}
}