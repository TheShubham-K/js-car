var toggle = true;
var wheelToggle = true;
var wipeToggle = true;
document.addEventListener('keydown', function(event) {
  if (event.key === 'c' || event.key === 'C') {
    toggleKeyAnimateFrame();
    toggleKeyAnimateWheel();
    toggleKeyAnimateWipe();
  }
});

//document.addEventListener('keydown', function(event) {
//  if (event.key === 'w' || event.key === 'W') {
//
//  }
//});

function toggleKeyAnimateFrame() {
  var keyframesRule = findAnimateRotate();
  if (keyframesRule && toggle) {
    keyframesRule.deleteRule('100%');
    toggle = false;
  } else if (!toggle) {
    keyframesRule.appendRule('100% { transform: rotateY(-360deg); }');
    toggle = true;
  }

  console.log('Toggle Keyframes: ' + toggle);
}

function findAnimateRotate() {
  var styleSheet = Array.from(document.styleSheets).find(function(sheet) {
    return sheet.ownerNode.id === 'animationRotate';
  });

  // Loop through the CSS rules
  for (var i = 0; i < styleSheet.cssRules.length; i++) {
    var rule = styleSheet.cssRules[i];

    // Check if the rule is a keyframes rule
    if (rule.type === CSSRule.KEYFRAMES_RULE) {
      return rule;
    }
  }

  return null;
}


function toggleKeyAnimateWheel() {
  var keyframesRule = findAnimateWheel();
  if (keyframesRule && wheelToggle) {
    keyframesRule.deleteRule('from');
    keyframesRule.deleteRule('to');
    wheelToggle = false;
  } else if (!wheelToggle) {
    keyframesRule.appendRule('from { transform: rotateY(0deg); }');
    keyframesRule.appendRule('to { transform: rotateY(360deg); }');
    wheelToggle = true;
  }

  console.log('Toggle Animate Wheel: ' + wheelToggle);
}

function findAnimateWheel() {
  var styleSheet = Array.from(document.styleSheets).find(function(sheet) {
    return sheet.ownerNode.id === 'animationWheel';
  });

  // Loop through the CSS rules
  for (var i = 0; i < styleSheet.cssRules.length; i++) {
    var rule = styleSheet.cssRules[i];

    // Check if the rule is a keyframes rule and matches the animation name
    if (rule.type === CSSRule.KEYFRAMES_RULE && rule.name === 'wheel') {
      return rule;
    }
  }

  return null;
}

function toggleKeyAnimateWipe() {
  var keyframesRule = findAnimateWipe();
  if (keyframesRule && wipeToggle) {
    keyframesRule.deleteRule('from');
    keyframesRule.deleteRule('to');
    wipeToggle = false;
  } else if (!wipeToggle) {
    keyframesRule.appendRule('from { transform: rotateZ(70deg); }');
    keyframesRule.appendRule('to { transform: rotateZ(-70deg); }');
    wipeToggle = true;
  }

  console.log('Toggle Animate Wipe: ' + wipeToggle);
}

function findAnimateWipe() {
  var styleSheet = Array.from(document.styleSheets).find(function(sheet) {
    return sheet.ownerNode.id === 'animationWipe';
  });

  // Loop through the CSS rules
  for (var i = 0; i < styleSheet.cssRules.length; i++) {
    var rule = styleSheet.cssRules[i];

    // Check if the rule is a keyframes rule and matches the animation name
    if (rule.type === CSSRule.KEYFRAMES_RULE && rule.name === 'wipe') {
      return rule;
    }
  }

  return null;
}