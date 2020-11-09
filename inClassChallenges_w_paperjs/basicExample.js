// language paperscript
// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.min.js

// var center = new Point(250, 250);

//changes 03 and 04:
//make it 50 lines with random start and end points
for (var i = 0; i < 50; i++) {
    //draw the path at a random start and end point
    var path = new Path.Line(new Point(window.screen.width, window.screen.height) * Point.random(), new Point(window.screen.width, window.screen.height) * Point.random());
    path.strokeColor = Color.random(); //change to random color
    path.strokeWidth = Math.random() * 20; //random width between 0 and 20
    path.strokeCap = 'round';
}


//changes 01 and 02:
// var path = new Path();
// path.strokeColor = 'blue'; //red change to blue
// path.strokeWidth = 8; //make line 8 pixels wide
// path.strokeCap = 'round';
// path.moveTo(center + [-100, -100]);
// path.lineTo(center + [100, 100]);

// path = new Path(); // what happens if you revove this?
// path.strokeColor = "blue";
// path.strokeWidth = 8; //make line 8 pixels wide
// path.strokeCap = 'round';
// path.moveTo(center + [100, -100]);
// path.lineTo(center + [-100, 100]);
// // path.strokeColor = 'green'; //if move, get the line showing up