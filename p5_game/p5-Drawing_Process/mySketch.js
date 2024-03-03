let mySlider; 
let myButton;
let myFont;
let sketch = [];
var current_img = 0;
let Sketch6; 
let work;
let theText;
let dada = false;
let loadingImage; 

function preload()
{
	myFont = loadFont("https://openprocessing-usercontent.s3.amazonaws.com/files/user339346/visual1683364/h3c527bccb2e5113ee59693b7ca1afd5e/SF%20Movie%20Poster%20Bold.ttf");	  
	for (var i = 0; i < 6; i++) 
	{ 
    sketch[i] = loadImage('Sketch' + i + '.PNG');
	}
	Sketch6 = loadImage("Sketch6.png");
	work = loadImage("WorkInProgress.png");
}

function setup() 
{ 
	createCanvas(windowWidth, windowHeight); 
	background(66, 129, 245);
	current_image = 0;
	
	//Slider
	mySlider = createSlider(0, 150, 0, 2); //createSlider(min, max, [value], [step]); 
	mySlider.position(760, 125); 
	mySlider.style('width', '200px'); 
	
	//button
	myButton = createButton('Click to see the next sketch'); 
	myButton.size(100, 100);
	myButton.position(760, 190); 
	
	//image size
	sketch[current_image].resize(350, 0);
	work.resize(520, 0);
	Sketch6.resize(560, 0);
	
	//text font
	textFont(myFont);
	theText = "My sketch 1";
} 

function draw() 
{  
	background(66, 129, 245);
	//change the button size changed using the slider
	let buttonSize = mySlider.value(); 
	myButton.size(buttonSize, buttonSize);
	
	//button conditions
	if(dada == false)
	{
		myButton.mousePressed(pressedTheButton); 
		loadingImage = sketch[current_image]; 
		if(current_image < 2)
		{
			sketch[current_image].resize(350, 0);
		}
		if(current_image >= 2)
		{
			sketch[current_image].resize(440, 0);
		}	
	}
	else
	{

		myButton.mousePressed(daDa);
	}
	
	//text
	textSize(100);
	fill(255); 
	text(theText, 130, 110); //Question: Why the current_image is not showing???
	
	//image
	image(loadingImage, 100, 150);
} 

function pressedTheButton()
{ 
	current_image = current_image + 1;
	
	if(current_image > 5)
	{
		theText = "Now let me add few small changes"; 
		loadingImage = work; 
		dada = true; 
  }
	else
	{
		let thisImage = current_image+1; 
		theText = "My sketch " + thisImage;
		dada = false; 
	}
} 

function daDa()
{
	theText = "Da da"; 
	loadingImage = Sketch6; 
}
