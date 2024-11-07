//variables
let kirb = [];

//images
function preload() {
  kirb[0] = loadImage("assets/FireKirby.png");
  kirb[1] = loadImage("assets/WaterKirby.png");
  kirb[2] = loadImage("assets/LeafKirby.png")
  kirb[3] = loadImage("assets/PoisonKirby.png")
  kirb[4] = loadImage("assets/StoneKirby.png")
  kirb[5] = loadImage("assets/IceKirby.png")
  
  song = loadSound("assets/KirbyRightBack.mp3")
}


function setup() {
  let canvas = createCanvas(600, 500);
  background('#f0a3e5');
  canvas.parent('sketchHolder');
  
  //buttons
  let button1 = createButton('FireKirby')
  button1.parent('buttonHolder')
  button1.mousePressed(fireKirb)
  
  let button2 = createButton('WaterKirby')
  button2.parent('buttonHolder')
  button2.mousePressed(waterKirb)
  
  let button3 = createButton('LeafKirby')
  button3.parent('buttonHolder')
  button3.mousePressed(leafKirb)
  
  let button4 = createButton('Random')
  button4.parent('buttonHolder')
  button4.mousePressed('randomImage')
  
  let button5 = createButton('Clear')
  button5.parent('buttonHolder')
  button5.mousePressed(clearCanvas)
  
  let button6 = createButton('Music')
  button5.parent('buttonHolder')
  button5.mousePressed()
  
  
  
}

function draw() {
}

function fireKirb() {
  image(kirb[0], random(width), random(height), 100, 100)
}

function waterKirb() {
  image(kirb[1], random(width), random(height), 100, 100)
}

function leafKirb() {
  image(kirb[2], random(width), random(height), 100, 100)
}

function randomImage() {
  let randomImages = int(random(kirb.length));
  image(kirb[randomImages], random(width), random(height), 100, 100);
}

function clearCanvas() {
  background(random(255), random(255), random(255))
}

function mousePressed() {
  if (mouseX > 0 && mouseY > 0) {
      image(kirb[3], mouseX, mouseY, 100, 100)
  }
}

function playSong() {
  song.play
}



