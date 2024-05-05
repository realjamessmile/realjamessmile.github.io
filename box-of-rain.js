document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('#box-audio');
    let vol = 0.5;
    audio.volume = vol;

    const playButton = document.querySelector('#play-button');
    playButton.classList.add('play-button');

    const winScreen = document.querySelector('#win2boot');
    const slider = document.querySelector('#slider');

    // Function to toggle play/pause and update button text
    const togglePlay = () => {
        if (audio.paused){
            audio.play();
            playButton.textContent = 'HUSH NOW, JERRY';
            winScreen.style.display='block';
            slider.style.display='inline';
        }
        else {
            audio.pause();
            playButton.textContent = 'GO ON, JERRY';
        }
    }

    playButton.addEventListener('click', togglePlay);

    let volume = document.getElementById('volume-slider');
    volume.addEventListener("change", function(e) {
        audio.volume = e.currentTarget.value / 100;
    })
});
