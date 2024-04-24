window.onload = function() {
    const audio = document.querySelector('#phish-audio');  // Reference to the audio element
    const phishButton = document.querySelector('#phish-button');  // Reference to the button
    audio.volume = 0.3;
    // Function to toggle play/pause and update button text
    const togglePhish = () => {
        if (audio.paused) {  // If audio is paused, play it
            audio.play();
            phishButton.textContent = 'STOP PHISHING';  // Change button text
        } else {  // If audio is playing, pause it
            audio.pause();
            phishButton.textContent = 'PHISH ME';  // Change button text
        }
    };

    // Set up the event listener to toggle play/pause on button click
    phishButton.addEventListener('click', togglePhish);
};
