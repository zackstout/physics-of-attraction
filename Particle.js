
// particles:
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.v = {x: 0, y: 0};
    this.a = {x: 0, y: 0};
    this.charge = Math.random() > 0.5 ? 1 : 0;
  }

  // kind of surprised it's not flipping color of each ellipse on each frame:
  show() {
    var color = this.charge > 0 ? 'red' : 'blue';
    fill(color);
    noStroke();
    ellipse(this.x, this.y, 5, 5);
  }

  getForce(particle) {
    // get distance between particles:
    var d = dist(particle.x, particle.y, this.x, this.y);
    // console.log(d);
    var force = 1 / Math.pow(d, 2);

    var forceConst = 50;

    // get slope between particles:
    var yDiff = - (this.y - particle.y);
    var xDiff = this.x - particle.x;
    var slope = yDiff / xDiff;
    var arctan = atan(1 / slope);

    var angle;

    // there is surely a cleverer way to do this:
    if (xDiff < 0 && yDiff < 0) {
      angle = 3*PI/2 + arctan;
    } else if (xDiff < 0 && yDiff > 0) {
      angle = PI/2 + arctan;
    } else if (xDiff > 0 && yDiff < 0) {
      angle = 3*PI/2 + arctan;
    } else if (xDiff > 0 && yDiff > 0) {
      angle = PI/2 + arctan;
    }

    this.a.x = forceConst * force * cos(angle);
    this.a.y = forceConst * force * sin(angle);
  }

  move() {
    this.v.x += this.a.x;
    this.v.y += this.a.y;

    this.x += this.v.x;
    this.y += this.v.y;
    // this.x += 1;
  }
}
