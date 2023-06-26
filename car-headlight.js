// Get the car and headlight elements
const car = document.querySelector('.car');
const headlight = document.querySelector('.headlight');
const headlightsContainer = document.querySelector('.headlights');
const track = document.querySelector('.track');

// Variable to track headlight state
let headlightsOn = true;

// Function to toggle the headlights
function toggleHeadlights() {
  headlightsOn = !headlightsOn;
  if (headlightsOn) {
    headlight.classList.add('on');
    track.classList.add('light-on');
  } else {
    headlight.classList.remove('on');
    track.classList.remove('light-on');
  }
}

// Function to handle keyboard input
function handleKeyboardInput(event) {
  if (event.key === 'd' || event.key === 'D') {
    toggleHeadlights();
  }
}

// Listen for keyboard input
document.addEventListener('keydown', handleKeyboardInput);
