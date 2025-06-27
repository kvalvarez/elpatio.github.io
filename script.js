document.addEventListener("DOMContentLoaded", function () {
    const fadeElement = document.querySelector('.fade-in-element');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const elementPosition = fadeElement.offsetTop;

        if (scrollPosition + window.innerHeight > elementPosition) {
            fadeElement.style.opacity = '1';
        }
    });
});


// container


var qualityServiceElement = document.getElementById('container1');

if (qualityServiceElement) {
    qualityServiceElement.addEventListener('click', function() {
        qualityServiceElement.style.backgroundColor = '#f3eeea'; // Change to your desired color
    });
}
//  about section






// Section-Title

function animateValue(elementId, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var element = document.getElementById(elementId);

    function updateValue() {
        element.innerHTML = current;
        current += increment;
        if ((increment > 0 && current <= end) || (increment < 0 && current >= end)) {
            setTimeout(updateValue, stepTime);
        }
    }

    updateValue();
}

//////// Animate ///////


function animateValue(id, start, end, duration, isPercent = false) {
  const obj = document.getElementById(id);
  let startTimestamp = null;

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    obj.textContent = isPercent ? `${value}%` : value;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", function () {
  animateValue('animatedValue2', 0, 100, 2000, true); 
});

