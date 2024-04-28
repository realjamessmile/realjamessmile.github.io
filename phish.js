const zappaFreq = 0.5; // likelihood of Zappa time

document.addEventListener('DOMContentLoaded', function() {
    const phishButton = document.querySelector('#phish-button'); 
    phishButton.classList.add('phish-button');

    const audio = document.querySelector('#phish-audio');
    const randn = Math.random();
    let toggleText = '✋ STOP PHISHING ✋';
    let vol = 0.25;
    let zappaFlag = false;
    if (randn > zappaFreq){
        audio.src = "assets/phish.mp3";
        audio.volume = vol;
    }
    else{
        audio.src = "assets/zappa.mp3";
        audio.volume = vol;
        toggleText = 'WHOOPS! ZAPPA TIME';
        zappaFlag = true;
    }
    
    let clickCount = 0;

    // Function to toggle play/pause and update button text
    const togglePhish = () => {
        if (audio.paused) {  // If audio is paused, play it
            audio.play();
            phishButton.textContent = toggleText;
            if (zappaFlag == true){
                phishButton.classList.add('zappa-button');
            }
        }
        else if (zappaFlag == true){
            if (vol < 1){vol = vol * 2;}
            else {audio.playbackRate = 1 + clickCount/5;}
            audio.volume = vol;
            phishButton.textContent = 'CANT STOP THE MUFFIN MAN!'
            clickCount = clickCount + 1;
        }
        else {  // If audio is playing, pause it
            audio.pause();
            phishButton.textContent = '🎣 PHISH ME 🎣';  
        }
    };

    phishButton.addEventListener('click', togglePhish);
});
