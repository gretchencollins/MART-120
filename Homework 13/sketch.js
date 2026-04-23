// x and y for my character
// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeed = [];
var shapeYSpeed = [];
var shapeColors = [];
// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;


function setup() {
    createCanvas(850, 850);
    // get a random speed when the it first starts
    for (var i = 0; i < 5; i++) {
        shapeXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) + 1);
        shapeYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) + 1);
        
        shapeColors[i] = color(random(255), random(255), random(255));

        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(150);


    }

    createCharacter(400, 350);
}

function draw() {
    background(580,25,98);
    stroke(0);
    fill(0);

    // call createBorders function
    createBorders(5);

    // exit message
    textSize(16);
    text("EXIT", width -775,height -825)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    // potential enemy
    fill(39,145,11);

    // Shapes
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        
        fill(shapeColors[i]); // use the shape's own color
        ellipse(shapeXs[i], shapeYs[i], diameters[i]);


        // move the shape
        shapeXs[i] += shapeXSpeed[i];
        shapeYs[i] += shapeYSpeed[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }
    // check to see if the character has left the exit
   // check to see if the character has left the exit
    if(characterX < width-760 && characterY < width-825)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    // create the shape based on the mouse click
    fill(20,230,140);
    circle(mouseShapeX, mouseShapeY, 125);
}

function characterMovement() {
    // handle the keys
    if (keyIsDown(w)) {
        characterY -= 5;
    }
    if (keyIsDown(s)) {
        characterY += 5;
    }
    if (keyIsDown(a)) {
        characterX -= 5;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 5;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(23,40,323);
    circle(characterX,characterY,55);
}

function createBorders(thickness) {
    // top border
    rect(70, 0, width, thickness);
    // left border
    rect(0, 0, thickness, height);
    // bottom border
    rect(0, height - thickness, width, thickness);
    // right upper border
    rect(width - thickness, 0, thickness, height - 0);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}