
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

    part.a.x = 0;
    part.a.y = 0;
    // is there a better way?
    parts.forEach(particle => {
      if (particle != part) {
        part.getForce(particle);
        // shouldn't move until all forces have been summed up.
      }

    });

    part.move();
    part.show();
    // part.move();
    // part.show();
  });
}

