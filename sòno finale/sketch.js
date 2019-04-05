function preload(){
  // put preload code here
}

var myWidth = 800;
var myHeight = 400;

function setup() {
  // put setup code here
  createCanvas(myWidth, myHeight);
  background(200);
  colorMode(HSB, 255);

  var nCerchiX = 20;
  var nCerchiY = 10;
  var margineX = 300;
  var margineY = 100;
  var nCerchi = nCerchiX*nCerchiY;
  var deltaX = (width-margineX*2)/(nCerchiX-1);
  var deltaY = (height-margineY*2)/(nCerchiY-1);
  var x = margineX;
  var y = margineY;

  if (deltaX>=deltaY) {
    radius = deltaX;
  } else {
    radius = deltaY;
  }

  for (var i=0; i<nCerchi; i++) {
    if (x<=(myWidth-margineX+0.01)) {
      var myHue = (x-margineX)/(myWidth-2*margineX)*255;
      var mySaturation = (y-margineY)/(myHeight-2*margineY)*255;

      fill(myHue, mySaturation, 255);

      ellipse(x, y, radius);
      x+=deltaX;
    } else {
      y+=deltaY;
      x=margineX;
      i--;
    }
  }
}

function draw() {
  // put drawing code here

}
