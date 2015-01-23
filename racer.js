var Racer = function() {
  this.time = 00:00:00;
  this.stopwatch = new Stopwatch();
};

Racer.prototype.start = function() {
  this.stopwatch.start();
};

Racer.prototype.stop = function() {
  this.stopwatch.stop();
  this.time = this.stopwatch.toString();
  this.stopwatch.reset();
  return this.time;
};
