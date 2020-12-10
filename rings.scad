hRadius = 10;
hHeight = 4;
mRadius = 12;
mHeight = 4; 
cRadius = 16;
cHeight = 5;
cThicc = 2;

$fn = 100;

// heart modified from openhome.cc :
module heart_sub_component(radius, height) {
    rotated_angle = 45;
    diameter = radius * 2;

    translate([-radius * cos(rotated_angle), 0, 0]) 
        rotate(-rotated_angle) union() {
            cylinder(r=radius, h=height);
            translate([0, -radius, 0]) 
                cube([diameter, diameter, height]);
        }
}

module heart(radius, height) {
    heart_sub_component(radius, height);
    mirror([1, 0, 0]) heart_sub_component(radius, height);
}

module moon(radius, thicc){
    difference() {
        cylinder(r=radius, h=thicc);
        translate([radius/1.75, 0, 0]) cylinder(r=radius, h=thicc);
    }
}

module ring(radius, height, thicc) {
    difference() {
    cylinder(r=radius, h=cHeight);
    cylinder(r=radius-thicc, h=height);
    }
}

union() {
//rotate([90, 0, 0]) translate([0, 10, 0]) heart(hRadius, hHeight);
rotate([90, 0, 0]) translate([8, 5, 0]) moon(mRadius, mHeight);
translate([0, cRadius/1.2, 0]) ring(cRadius, cHeight, cThicc);
}



