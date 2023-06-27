window.addEventListener('load', () => {
  const car = document.querySelector('.car');
  const trackWidth = document.querySelector('.track-container').clientWidth;
  const carWidth = car.clientWidth;
  const distance = trackWidth - carWidth;
  const duration = 3000; // Adjust the duration (in milliseconds) as desired

  let animationId;
  let isMoving = true;
  let currentPosition = 0;

  const startAnimation = () => {
    isMoving = true;

    const startTime = performance.now();
    const moveCar = (timestamp) => {
      const elapsedTime = timestamp - startTime;
      const progress = elapsedTime / duration;
      let newPosition = currentPosition + distance * progress;

      // Check if the car has reached the end of the track
      if (newPosition >= distance) {
        // Calculate the remaining distance
        const remainingDistance = newPosition - distance;

        // Reset the car's position to the beginning of the track
        newPosition = -carWidth + remainingDistance;
        currentPosition = newPosition;
      }

      car.style.left = `${newPosition}px`;

      if (progress < 1 && isMoving) {
        animationId = requestAnimationFrame(moveCar);
      } else {
        currentPosition = newPosition;
      }
    };

    requestAnimationFrame(moveCar);
  };

  const stopAnimation = () => {
    isMoving = false;
    cancelAnimationFrame(animationId);
  };

  document.addEventListener('keydown', (event) => {
    if (event.key === 'c' || event.key === 'C') {
      if (isMoving) {
        stopAnimation();
      } else {
        startAnimation();
      }
    }
  });

  // Start the animation when the page loads
  startAnimation();
});
