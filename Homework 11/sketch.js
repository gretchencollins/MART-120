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
var shapeXSpeed;
var shapeYSpeed;

// x and y for a shape
var shape2X = 30;
var shape2Y = 50;
var shape2XSpeed;
var shape2YSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(850, 850);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    createCharacter(200,350);
}

function draw()
{
    background(580,25,98);
    stroke(0);
    fill(0);
    
    // call createBorders function
    createBorders(5);

    // exit message
    textSize(20);
    text("EXIT", width -775,height -825)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    // potential enemy
    fill(39,145,114);
    // draw the shape
    circle(shapeX, shapeY, 90);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 2);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + -5);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }



    // potential enemy
    fill(183,45,114);
    // draw the shape
    circle(shape2X, shape2Y, 70);

     // get a random speed when the it first starts
     shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + -8);
     shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + -5);

    // move the shape
    shape2X += shape2XSpeed;
    shape2Y += shape2YSpeed;
    // check to see if the shape has gone out of bounds
    if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0)
    {
        shape2Y = height;
    }

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

function characterMovement()
{
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY += 5;   
    }
    if(keyIsDown(a))
    {
        characterX -= 5;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 5;   
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
    //character
    
   // circle(characterX,characterY,25);
}

function drawCharacter()
{
    fill(23,40,323);
    circle(characterX,characterY,55);
}
function createBorders(thickness)
{
    // top border
    rect(70,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height -0);
} 

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }

  }
  */