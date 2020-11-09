// written with help from this youtube video: https://www.youtube.com/watch?v=rx5PLMij_80

var stars = []; //array for our stars
var velocity = 2; //starting velocity (direction to the right)

//instructions text in white
var instructions = new PointText(new Point(50, 40));
instructions.fontSize = 20;
instructions.fillColor = "white";
instructions.content = "Press A or D to move the stars"

//changing velocity text below in fuchsia
var text = new PointText(new Point(50, 75));
text.fontSize = 25;
text.fillColor = "fuchsia";

//go through 4000 times and add a circle to the array at a random color
for (var i = 0; i <= 4000; i++) {
    var circle = new Path.Circle(new Point(window.screen.width, window.screen.height) * Point.random(), Math.random() * 1.5 + 0.5);
    stars.push(circle);

    var chance = Math.random();
    if (chance < 0.01) {
        circle.fillColor = "fuchsia";
    } else if (chance < 0.29) {
        circle.fillColor = "yellow";
    } else if (chance < 0.7) {
        circle.fillColor = "white";
    }
}
assignRate(); //assign initial rate

function assignRate() {
    //change the rate to a random num between 0 and the velocity
    for (var i = 0; i < stars.length; i++) {
        var assignedRate = Math.random() * velocity;
        stars[i].rate = assignedRate;
    }
    //display our assigned rate via text
    text.content = "Star's velocity is: " + velocity.toString();
}

function onKeyDown(event) {
    if (event.key == 'd') {
        //increase velocity (go faster to the right direction)
        velocity += 1;
        assignRate();
    } else if (event.key == 'a') {
        //decrease velocity (go faster to the left direction)
        velocity -= 1;
        assignRate();
    }
}

function onFrame(event) {
    //every frame we will move our stars depending on their assigned rate
    for (var i = 0; i < stars.length; i++) {
        stars[i].translate(stars[i].rate, 0);
        // if we are off screen, move back to start (depending on direction)
        if (stars[i].position.x > window.screen.width) {
            stars[i].position.x = 0;
        } else if (stars[i].position.x < 0) {
            stars[i].position.x = window.screen.width;
        }
    }
}