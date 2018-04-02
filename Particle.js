
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
    // Get distance between particles:
    var d = int(dist(particle.x, particle.y, this.x, this.y));
    if (d < 5) {
      this.v.x = 0;
      this.v.y = 0;
      particle.v.x = 0;
      particle.v.y = 0;
      return;
    }

    var force = 1 / Math.pow(d, 2);
    var forceConst = 8;

    // Get slope between particles:
    var yDiff = - (this.y - particle.y);
    var xDiff = this.x - particle.x;
    var slope = yDiff / xDiff;
    // actually we care about ratio of x to y:
    var arctan = atan(1 / slope);

    var angle;

    // There is surely a cleverer way to do this:
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
    // Basic physics engine:
    this.v.x += this.a.x;
    this.v.y += this.a.y;

    this.x += this.v.x;
    this.y += this.v.y;
  }
}
