import { change } from "./blink.js"

const zappaFreq = 0.25; // likelihood of Zappa time

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('#phish-audio');
    let vol = 0.25;
    let scrl = 7;
    let zappaFlag = false;
    audio.src = "assets/phish.mp3";
    audio.volume = vol;
    let clickCount = 0;
    
    const phishButton = document.querySelector('#phish-button');
    phishButton.classList.add('phish-button');
    const homePage = document.querySelector('#home-page');
    homePage.classList.add('home');
    const banner = document.querySelector("#banner");
    const headshot = document.querySelector("#headshot");
    banner.classList.add('announcement');
    banner.textContent = 'ATTN: Frank Zappa bug is mostly fixed. If you see Zappa, immediately send bug report to gosecurejim72 "at" gmail "dot" com and reinstall browser! Do not get stuck in Zappa dimension.'
    banner.scrollAmount = scrl;
    
    // Function to toggle play/pause and update button text
    const togglePhish = () => {
        if (audio.paused) {  // If audio is paused, play it
            phishButton.textContent = 'STOP PHISHING';
            audio.play();
        }
        else {  // If audio is playing, pause it
            let randn = Math.random();
            if (randn < zappaFreq || zappaFlag == true){
                phishButton.classList.add('zappa-button');
                homePage.classList.add('zappa-dimension');
                banner.classList.add('zappa-lyrics');
                banner.textContent = "Girl, you thought he was a man But he was a muffin He hung around till you found That he didn't know nuthin' Girl, you thought he was a man But he only was a-puffin' No cries is heard in the night As a result of him stuffin' Girl, you thought he was a man But he was a muffin No cries is heard in the night As a result of him stuffin. THERE IS NO ESCAPE FROM THE ZAPPA DIMENSION. THERE IS NO ESCAPE FROM THE ZAPPA DIMENSION. THERE IS NO ESCAPE FROM THE ZAPPA DIMENSION."
                document.removeEventListener('DOMContentLoaded', change);
                if (vol < 1){vol = vol * 2;}
                else {
                    audio.playbackRate = 1 + clickCount/5;
                    banner.scrollAmount = scrl + 3*clickCount;
                }
                audio.volume = vol;
                if (clickCount==0){
                    phishButton.textContent = 'WHOOPS! ZAPPA TIME';
                    audio.src = "assets/zappa.mp3";
                    audio.play();
                }
                else if (clickCount==1){
                    phishButton.textContent = 'CANT STOP THE MUFFIN MAN!';
                }
                else if (clickCount==2){
                    phishButton.textContent = 'RUN FASTER MUFFIN MAN!';
                }
                else if (clickCount==10){
                    phishButton.textContent = 'ESCAPE THE ZAPPAVERSE?';
                }
                else if (clickCount==11){
                    document.addEventListener('DOMContentLoaded', change);
                    window.location.reload();
                }
                else{
                    phishButton.textContent = 'THERE IS NO ESCAPE FROM THE ZAPPAVERSE';
                    banner.textContent = "THERE IS NO ESCAPE FROM THE ZAPPAVERSE. THERE IS NO ESCAPE FROM THE ZAPPAVERSE. THERE IS NO ESCAPE FROM THE ZAPPAVERSE."
                    headshot.src = "assets/zappa-stare.jpeg";
                }
                                clickCount = clickCount + 1;
                zappaFlag = true;
            }
            else{
                audio.pause();
                phishButton.textContent = 'PHISH ME';
            }
        }
    };

    phishButton.addEventListener('click', togglePhish);
});
