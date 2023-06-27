document.addEventListener('keydown', function(event) {
  if (event.key === 'd' || event.key === 'D') {
    toggleHeadlights();
  }
});

var headlightsOn = false;
var headlights = document.querySelectorAll('.cuboid-1.cub-1 .tp .photon-shader');
function toggleHeadlights() {
    console.log('photonShader: ', headlights);
    for (var i = 0; i < headlights.length; i++) {
      var headlight = headlights[i];

      if (headlightsOn) {
        headlight.style.backgroundColor = '';
      } else {
        headlight.style.backgroundColor = 'rgb(255, 255, 0)';
      }
    }
    headlightsOn = !headlightsOn;
  }