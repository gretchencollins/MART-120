//head
var headX = 250;
var headY = 200;
var headDirection = 1;

//rectangle
var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

//triangle
var trianglePoint1X = 250
var trianglePoint1Y = 500
var trianglePoint2X = 100
var trianglePoint2Y = 380
var trianglePoint3X = 400
var trianglePoint3Y = 380
var triangleDirection = 2

//left eye
var leftEyeX = 210
var leftEyeY = 175
var leftEyeDirection = 5

//right eye
var rightEyeX = 290
var rightEyeY = 175
var rightEyeDirection = 4

var size = 22;
var count = 0;
var sizeDirection = 2;
function setup()
{
    createCanvas(500, 600);
     bodyDirection = floor(random() * 10) + 1;
      headDirection = floor(random() * 10) + 1;
       leftEyeDirection = floor(random() * 10) + 1;
        rightEyeDirection = floor(random() * 10) + 1;
         triangleDirection = floor(random() * 10) + 1;
}

function draw()
{
       background(70,25,100);
   fill(200,200,43)
                textSize(45)
                text('My Portrait', 10,42)


    // head
     fill(65,120,50);
    ellipse(headX,headY,175,200);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }



              //left eye
                   fill(100,10,10)
              ellipse(210,leftEyeY,50,25)
    leftEyeY += leftEyeDirection;
    if(leftEyeY <= 0 || leftEyeY >= 600 )
    {
        leftEyeDirection *= -1;
    }
                
    
                // right eye
                 fill(100,10,10)
                 ellipse(rightEyeX,rightEyeY,50,25)
                 rightEyeX+=rightEyeDirection;
                 rightEyeY+=rightEyeDirection;
                 if(rightEyeX >= 500 || rightEyeX <= 0)
                {
                    rightEyeDirection *= -1;
                }
                if(rightEyeY >= 500 || rightEyeY <= 0)
                {
                    rightEyeDirection *= -1;
                }


    // nose
             strokeWeight(10)
                point(200,220)
                point(300,220)
    //flourish
                line(75,525,145,450)
                line(100,525,165,460)
                line(125,525,185,470)
    // body
                fill(40,50,90)
                rect(210,bodyY,80,90)
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 525 )
    {
        bodyDirection *= -1;
    }
    // decoration
                fill(750,70,10)
                triangle(trianglePoint1X,trianglePoint1Y,trianglePoint2X,trianglePoint2Y,trianglePoint3X,trianglePoint3Y)
                 trianglePoint1X+=triangleDirection;
    if(trianglePoint1X>= 418 || trianglePoint1X<= 82)
    {
        triangleDirection *= -1;
    }
       triangle(trianglePoint1X,trianglePoint1Y,trianglePoint2X,trianglePoint2Y,trianglePoint3X,trianglePoint3Y)
                 trianglePoint2X+=triangleDirection;
    if(trianglePoint2X>= 418 || trianglePoint2X<= 0)
    {
        triangleDirection *= -1;
    }
    
    triangle(trianglePoint1X,trianglePoint1Y,trianglePoint2X,trianglePoint2Y,trianglePoint3X,trianglePoint3Y)
                 trianglePoint3X+=triangleDirection;
  if(trianglePoint3X>= 500 || trianglePoint3X<= 164)
    {
        triangleDirection *= -1;
    }
   

      fill(750,70,10)
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Gretchen Collins",332,590);


}