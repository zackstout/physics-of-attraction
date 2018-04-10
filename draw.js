
var parts = [];

// why can't we use mouseDragged?? // Hmm now we can! ... Works like half the time??
function mouseDragged() {
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
    // zero out acceleration:
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

