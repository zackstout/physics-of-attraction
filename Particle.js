
// particles:
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.v = {x: 0, y: 0};
    this.a = {x: 0, y: 0};
    this.charge = Math.random() > 0.5 ? 1 : -1;
  }

  // kind of surprised it's not flipping color of each ellipse on each frame:
  show() {
    var color = this.charge > 0 ? 'red' : 'blue';
    fill(color);
    noStroke();
    ellipse(this.x, this.y, 6, 6);
  }

  getForce(particle) {
    // Get distance between particles:
    // don't forget the int here (?): No doesn't seem necessary:
    var d = dist(particle.x, particle.y, this.x, this.y);

    // Interesting, whether this works really hinges on the value of d -- if it's 2, we get chaos. 5 staunches it well enough:
    if (d < 3) {
      this.v.x = 0;
      this.v.y = 0;
      particle.v.x = 0;
      particle.v.y = 0;
      return;
    }

    var direction = this.charge * particle.charge;
    // console.log(direction);

    var force = 1 / Math.pow(d, 2);
    // forceConst = 96;

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

    // if direction=1, repel; if -1, attract:
    this.a.x -= direction * forceConst * force * cos(angle);
    this.a.y -= direction * forceConst * force * sin(angle);

    // if (this.charge == 0) {
    //   this.a.x -= forceConst * force * cos(angle);
    //   this.a.y -= forceConst * force * sin(angle);
    // }
  }

  move() {
    // Basic physics engine:
    this.v.x += this.a.x;
    this.v.y += this.a.y;

    this.x += this.v.x;
    this.y += this.v.y;
  }
}
