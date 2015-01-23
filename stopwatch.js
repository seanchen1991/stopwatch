var Stopwatch = function(resolution, listener) {
  this.startTime = 0;
  this.stopTime = 0;
  this.totalElapsed = 0; // elapsed number of ms in total
  this.started = false;
  this.listener = (listener !== undefined ? listener : null); // function to receive onTick events
  this.tickResolution = (resolution !== undefined ? resolution : 500); // how long between each tick in milliseconds
  this.tickInterval = null;
  
  this.onehour = 1000 * 60 * 60;
  this.onemin  = 1000 * 60;
  this.onesec  = 1000;
};

Stopwatch.prototype.start = function() {
  var delegate = function(context, method) {
    return function() {
      return method.call(that);
    }
  };
  if (!this.started) {
    this.startTime = new Date().getTime();
    this.stopTime = 0;
    this.started = true;
    this.tickInterval = setInterval(delegate(this, this.onTick), this.tickResolution);
  }
};

Stopwatch.prototype.stop = function() {
  if (this.started) {
    this.stopTime = new Date().getTime();
    this.started = false;
    var elapsed = this.stopTime - this.startTime;
    this.totalElapsed += elapsed;
    if (this.tickInterval !== null)
      clearInterval(this.tickInterval);
  }
  return this.getElapsed();
};

Stopwatch.prototype.reset = function() {
  this.totalElapsed = 0;
  this.startTime = new Date().getTime();
  this.stopTime = this.startTime;
};

Stopwatch.prototype.restart = function() {
  this.stop();
  this.reset();
  this.start();
};

Stopwatch.prototype.getElapsed = function() {
  var elapsed = 0;
  if (this.started)
    elapsed = new Date().getTime() - this.startTime;
  elapsed += this.totalElapsed;
  
  var hours = parseInt(elapsed / this.onehour);
  elapsed %= this.onehour;
  var mins = parseInt(elapsed / this.onemin);
  elapsed %= this.onemin;
  var secs = parseInt(elapsed / this.onesec);
  var ms = elapsed % this.onesec;
  
  return {
    hours: hours,
    minutes: mins,
    seconds: secs,
    milliseconds: ms
  }
};

Stopwatch.prototype.setElapsed = function(hours, mins, secs) {
  this.reset();
  this.totalElapsed = 0;
  this.totalElapsed += hours * this.onehour;
  this.totalElapsed += mins  * this.onemin;
  this.totalElapsed += secs  * this.onesec;
  this.totalElapsed = Math.max(this.totalElapsed, 0);
};

Stopwatch.prototype.toString = function() {
  var zpad = function(n, digits) {
    n = n.toString();
    while (n.length < digits)
      n = '0' + n;
    return n;
  }
  var e = this.getElapsed();
  return zpad(e.hours, 2) + ":" + zpad(e.minutes, 2) + ":" + zpad(e.seconds, 2);
};

Stopwatch.prototype.setListener = function(listener) {
  this.listener = listener;
};

Stopwatch.prototype.onTick = function() {
  if(this.listener !== null) {
    this.listener(this);
  }
};

