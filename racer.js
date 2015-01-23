var Racer = function() {
  this.time = "00:00:00";
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

var Race = function(array) {  // array of all racer objects
  this.racers = array;
};

Race.prototype.start = function() {
  var length = this.racers.length;
  for (var i = 0; i < length; i++) {   // doesn't actually start all the racers at the same time, but I'm not sure how to actually achieve that
    this.racers[i].start();
  }
};

Race.prototype.getWinner = function() {
  var fastest = this.racers[0];   // set the first racer in our array as the default winner 
  var length = this.racers.length;
  for (var i = 1; i < length; i++) {
    if (this.racers[i].time < fastest.time) {   // since our times are strings, we should be able to perform string comparisons upon them
      fastest = this.racers[i];
    }
  }
  return fastest;
};
