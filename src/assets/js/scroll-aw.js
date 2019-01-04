console.log('here');
console.log('in worker');

registerAnimator('scrollani', class {
  animate(currentTime, effect) {
    console.log('doing effect');
    effect.localTime = currentTime;
  }
});