// language paperscript
// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.min.js

// create the red, rotated square
var rectangle1 = new Rectangle(new Point(200, 200), new Size(300, 300));
var path1 = new Path.Rectangle(rectangle1);
path1.strokeColor = 'red';
path1.rotate(45);

// create the green rectangle -> change to ellipse via Path.Ellipse
var rectangle2 = new Rectangle(new Point(100, 200), new Size(500, 300)); //make green rect 500 pixels wide
var path2 = new Path.Ellipse(rectangle2);
path2.strokeColor = 'green';

// cut the green rectangle from the red square
// style the result
var comboPath = path1.intersect(path2); //change from .subtract to .unite to .intersect
comboPath.style = {
    strokeColor: 'black',
    fillColor: '#ccf',
    strokeWidth: 4,
    dashArray: [10, 4],
    shadowColor: new Color(0, 0, 0, .5),
    shadowBlur: 12,
    shadowOffset: new Point(5, 5),
}

//remove the green ellipse and red diamond
path1.remove();
path2.remove();