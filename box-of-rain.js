const zappaFreq = 0.25; // likelihood of Zappa time

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('#box-audio');
    let vol = 0.5;
    audio.src = "assets/box-of-rain.mp3";
    audio.volume = vol;
    audio.play();
    
    // const rainupButton = document.querySelector('#rain-up-button');
    // rainupButton.classList.add('rain-up-button');
    // const raindownButton = document.querySelector('#rain-down-button');
    // raindownButton.classList.add('rain-down-button');

    let volume = document.getElementById('volume-slider');
    volume.addEventListener("change", function(e) {
        audio.volume = e.currentTarget.value / 100;
    })
    
    // // Function to toggle play/pause and update button text
    // const decreaseRain = () => {
    //     if (vol > 0){
    //         vol = vol - 0.1;
    //         audio.volume = vol;
    //     }
    // }
    // const increaseRain = () => {
    //     if (vol < 1){
    //         vol = vol + 0.1;
    //         audio.volume = vol;
    //     }
    // }
    // raindownButton.addEventListener('click', decreaseRain);
    // rainupButton.addEventListener('click', increaseRain);
});
