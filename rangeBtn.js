var inputRange = document.getElementsByClassName('range')[0],
  maxValue = 35, // the higher the smoother when dragging
  speed = 2,
  currValue,
  rafID;

var inputRange2 = document.getElementsByClassName('range')[1],
  maxValue = 35, // the higher the smoother when dragging
  speed = 2,
  currValue,
  rafID;

// set min/max value
inputRange.min = 0;
inputRange.max = maxValue;
inputRange2.min = 0;
inputRange2.max = maxValue;

// listen for unlock
function unlockStartHandler() {
  // clear raf if trying again
  window.cancelAnimationFrame(rafID);

  // set to desired value
  currValue = +this.value;
}

function unlockEndHandler() {
  // store current value
  currValue = +this.value;
}

// handle range animation
function animateHandler() {
  // calculate gradient transition
  var transX = currValue - maxValue;

  // update input range
  inputRange.value = currValue;
  inputRange2.value = currValue;

  //Change slide thumb color on mouse up
  if (currValue < 5) {
    inputRange.classList.remove('ltpurple');
    inputRange2.classList.remove('ltpurple');
  }
  if (currValue < 25) {
    inputRange.classList.remove('purple');
    inputRange2.classList.remove('purple');
  }
  if (currValue < 30) {
    inputRange.classList.remove('pink');
    inputRange2.classList.remove('pink');
  }

  // determine if we need to continue
  if (currValue > -1) {
    window.requestAnimationFrame(animateHandler);
  }

  // decrement value
  currValue = currValue - speed;
}

// bind events
inputRange.addEventListener('mousedown', unlockStartHandler, false);
inputRange.addEventListener('mousestart', unlockStartHandler, false);
inputRange.addEventListener('mouseup', unlockEndHandler, false);
inputRange.addEventListener('touchend', unlockEndHandler, false);

inputRange2.addEventListener('mousedown', unlockStartHandler, false);
inputRange2.addEventListener('mousestart', unlockStartHandler, false);
inputRange2.addEventListener('mouseup', unlockEndHandler, false);
inputRange2.addEventListener('touchend', unlockEndHandler, false);
// move gradient
inputRange.addEventListener('input', function () {
  //Change slide thumb color on way up
  if (this.value > 5) {
    inputRange.classList.add('ltpurple');
  }
  if (this.value > 25) {
    inputRange.classList.add('purple');
  }
  if (this.value > 30) {
    inputRange.classList.add('pink');
  }

  //Change slide thumb color on way down
  if (this.value < 5) {
    inputRange.classList.remove('ltpurple');
  }
  if (this.value < 25) {
    inputRange.classList.remove('purple');
  }
  if (this.value < 30) {
    inputRange.classList.remove('pink');
  }
});
inputRange2.addEventListener('input', function () {
  //Change slide thumb color on way up
  if (this.value > 5) {
    inputRange2.classList.add('ltpurple');
  }
  if (this.value > 25) {
    inputRange2.classList.add('purple');
  }
  if (this.value > 30) {
    inputRange2.classList.add('pink');
  }

  //Change slide thumb color on way down
  if (this.value < 5) {
    inputRange2.classList.remove('ltpurple');
  }
  if (this.value < 25) {
    inputRange2.classList.remove('purple');
  }
  if (this.value < 30) {
    inputRange2.classList.remove('pink');
  }
});
