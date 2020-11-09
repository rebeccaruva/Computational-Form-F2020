//rotating red square challenge 12
var rects = [];

var center = new Point(window.screen.width / 3, window.screen.height / 3);

for (var i = 1; i <= 25; i++) {
    var offset = new Point(50 * i / 4, 50 * i / 4);
    var rectangle = new Rectangle(center - offset, new Size(50 * i / 2, 50 * i / 2));
    var path = new Path.Rectangle(rectangle);
    path.strokeColor = 'red';
    path.rotate(7 * i);
    rects.push(path);
}

//combine three shapes challenge 11
//unite 3 shapes together

// // create the green rectangle 1
// var rectangle1 = new Rectangle(new Point(100, 600), new Size(500, 200));
// var path1 = new Path.Rectangle(rectangle1);
// path1.strokeColor = 'green';

// // create the green ellipse
// var rectangle2 = new Rectangle(new Point(225, 375), new Size(250, 250));
// var path2 = new Path.Ellipse(rectangle2);
// path2.strokeColor = 'green';

// // style the result
// var comboPath1 = path1.unite(path2);
// comboPath1.style = {
//     strokeColor: 'black',
//     fillColor: '#ccf',
//     strokeWidth: 4,
//     dashArray: [10, 4],
//     shadowColor: new Color(0, 0, 0, .5),
//     shadowBlur: 12,
//     shadowOffset: new Point(5, 5),
// }

// // create the green rectangle 2
// var rectangle3 = new Rectangle(new Point(100, 200), new Size(500, 200));
// var path3 = new Path.Rectangle(rectangle3);
// path3.strokeColor = 'green';

// var comboPath2 = comboPath1.unite(path3);
// comboPath.style = {
//     strokeColor: 'black',
//     fillColor: '#ccf',
//     strokeWidth: 4,
//     dashArray: [10, 4],
//     shadowColor: new Color(0, 0, 0, .5),
//     shadowBlur: 12,
//     shadowOffset: new Point(5, 5),
// }

// path1.remove();
// path2.remove();
// path3.remove();