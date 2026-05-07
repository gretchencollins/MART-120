function setup()
            {
                createCanvas(500,600);
            }
            function draw()
            {
               // done background
                background(70,25,100);
              // head done
                fill(65,120,50)
                ellipse(250,200,175,200)
               // eyes done
                fill(100,10,10)
                ellipse(290,175,50,25)
              // eyes done
                fill(100,10,10)
                ellipse(210,175,50,25)
              // body done
                fill(40,50,90)
                rect(210,300,80,90)
            // triangle done
                fill(750,70,10)
                triangle(250,500,100,380,400,380)
              // dimples done
                strokeWeight(10)
                point(200,220)
                point(300,220)
            // flourish
                line(75,525,145,450)
                line(100,525,165,460)
                line(125,525,185,470)
           // name   
                textSize(22)
                text('Gretchen Collins', 332,590)
            // title
                fill(200,200,43)
                textSize(45)
                text('My Portrait', 10,42)
            
            }