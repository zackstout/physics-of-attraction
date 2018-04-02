
// particles:
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.charge = Math.random() > 0.5 ? 1 : 0;
  }

  show() {
    var color = this.charge > 0 ? 'red' : 'blue';
    fill(color);
    noStroke();
    ellipse(this.x, this.y, 5, 5);
  }

  move() {
    // this.x += 1;
  }
}

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
    part.move();
    part.show();
  });
}
