
var parts = [];

function mousePressed() {
  var part = new Particle(mouseX, mouseY);
  parts.push(part);
  console.log(parts);
}


function setup() {
  createCanvas(600, 600);
  background(220);
}

function draw() {
  background(220);
  parts.forEach(part => {
    // is there a better way?
    parts.forEach(particle => {
      if (particle != part) {
        part.getForce(particle);
        part.move();
      }
      part.show();
    });
    // part.move();
    // part.show();
  });
}
