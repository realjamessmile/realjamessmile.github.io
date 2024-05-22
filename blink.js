const avgBlinkPeriod = 16; // average time between blinks (seconds)

let images = ['assets/headshotjsmile.JPG', 'assets/headshotjsmile-blink.jpg'];

let index = 0;
let randn = Math.random();
let interval = avgBlinkPeriod *10000*3/2*(1+randn);
const imgElement = document.querySelector('#headshot');

export function change() {
    imgElement.src = images[index];
    if (index == 1) {
      index = 0;
      interval = 100;
    } else {
      index++;
      interval = avgBlinkPeriod *1000*2/3*(1+randn);
    }
  
    setTimeout(change, interval);
  }
  
document.addEventListener('DOMContentLoaded',change);