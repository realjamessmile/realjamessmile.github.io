document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('#box-audio');
    let vol = 0.5;
    audio.volume = vol;

    const playButton = document.querySelector('#play-button');
    playButton.classList.add('play-button');

    // Function to toggle play/pause and update button text
    const togglePlay = () => {
        if (audio.paused){
            audio.play();
            playButton.textContent = 'GO ON, JERRY';
        }
        else {
            audio.pause();
            playButton.textContent = 'HUSH NOW, JERRY';
        }
    }

    playButton.addEventListener('click', togglePlay);

    let volume = document.getElementById('volume-slider');
    volume.addEventListener("change", function(e) {
        audio.volume = e.currentTarget.value / 100;
    })
});
