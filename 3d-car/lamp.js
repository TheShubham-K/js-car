// Get all street lamps
    const streetLamps = document.querySelectorAll('.street-lamp');
    const myBody = document.querySelectorAll('.container');

    // Function to turn on the lamps
    function turnOnLamps() {
      streetLamps.forEach(lamp => {
        lamp.classList.add('lamp-on');
      });
    }

    // Function to turn off the lamps
    function turnOffLamps() {
      streetLamps.forEach(lamp => {
        lamp.classList.remove('lamp-on');
      });
    }

    // Call the function to turn on the lamps when the page loads
    window.addEventListener('load', () => {
      turnOnLamps();
    });

    // Function to handle keyboard input
    function handleKeyboardInput(event) {
      if (event.key === 'l' || event.key === 'L') {
        // Toggle the lamps on/off
        streetLamps.forEach(lamp => {
          lamp.classList.toggle('lamp-on');
        });
      }
    }

    // Listen for keyboard input
    document.addEventListener('keydown', handleKeyboardInput);