
// particles:
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.v = {x: 0, y: 0};
    this.a = {x: 0, y: 0};
    this.charge = Math.random() > 0.5 ? 1 : 0;
  }

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

    var forceConst = 1000;

    // get slope between particles:
    var yDiff = this.y - particle.y;
    var xDiff = this.x - particle.x;
    var slope = yDiff / xDiff;
    var arctan = atan(slope);
    // console.log(slope);

    // console.log(arctan);

    this.a.x = forceConst * force * cos(slope);
    this.a.y = forceConst * force * sin(slope);

    // console.log(this.a.x, this.a.y);
  }

  move() {
    this.v.x += this.a.x;
    this.v.y += this.a.y;

    this.x += this.v.x;
    this.y += this.v.y;
    // this.x += 1;
  }
}
