document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('#box-audio');
    let vol = 0.5;
    audio.src = "assets/box-of-rain.mp3";
    audio.volume = vol;
    audio.play();

    let volume = document.getElementById('volume-slider');
    volume.addEventListener("change", function(e) {
        audio.volume = e.currentTarget.value / 100;
    })
});
