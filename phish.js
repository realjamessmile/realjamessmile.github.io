const zappaFreq = 0.5; // likelihood of Zappa time

document.addEventListener('DOMContentLoaded', function() {
    const phishButton = document.querySelector('#phish-button');
    phishButton.classList.add('phish-button');
    const homePage = document.querySelector('#home-page');
    homePage.classList.add('home');

    const audio = document.querySelector('#phish-audio');
    let vol = 0.25;
    let zappaFlag = false;

    audio.src = "assets/phish.mp3";
    audio.volume = vol;
    let clickCount = 0;

    // Function to toggle play/pause and update button text
    const togglePhish = () => {
        if (audio.paused) {  // If audio is paused, play it
            phishButton.textContent = '✋ STOP PHISHING ✋';
            audio.play();
        }
        else {  // If audio is playing, pause it
            let randn = Math.random();
            if (randn < zappaFreq || zappaFlag == true){
                phishButton.classList.add('zappa-button');
                homePage.classList.add('zappa-dimension');
                if (vol < 1){vol = vol * 2;}
                else {audio.playbackRate = 1 + clickCount/5;}
                audio.volume = vol;
                if (clickCount==0){
                    phishButton.textContent = 'WHOOPS! ZAPPA TIME';
                    audio.src = "assets/zappa.mp3";
                    audio.play();
                }
                else if (clickCount==1){
                    phishButton.textContent = 'CANT STOP THE MUFFIN MAN!';
                }
                else {
                    phishButton.textContent = 'RUN FASTER MUFFIN MAN!';
                }
                clickCount = clickCount + 1;
                zappaFlag = true;
            }
            else{
                audio.pause();
                phishButton.textContent = '🎣 PHISH ME 🎣';
            }
        }
    };

    phishButton.addEventListener('click', togglePhish);
});
