function Timer() {
  this.seconds = 0;

  setInterval(function () {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}

new Timer();
// NaN, because `this` inside the regular function points to `window` (or `undefined` in strict mode), not the Timer instance.

function FixedTimer() {
  this.seconds = 0;

  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}

new FixedTimer();
// Works correctly because the arrow function inherits `this` from FixedTimer.

function test() {
  console.log(this);
}

test();
