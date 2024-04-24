window.onload = function() {
    const audio = document.querySelector('#phish-audio');
    const phishButton = document.querySelector('#phish-button');
    audio.volume = 0.3;

    // Function to toggle play/pause and update button text
    const togglePhish = () => {
        if (audio.paused) {  // If audio is paused, play it
            audio.play();
            phishButton.textContent = '✋ STOP PHISHING ✋';
        } else {  // If audio is playing, pause it
            audio.pause();
            phishButton.textContent = '🎣 PHISH ME 🎣';
        }
    };

    phishButton.addEventListener('click', () => {
        togglePhish();
        // Remove clam event listener when phish button is clicked
        document.body.removeEventListener('mousedown', clamMouseDownHandler);
        document.body.removeEventListener('mouseup', clamMouseUpHandler);
    });

    // Clam cursor click animation
    const openCursor = 'assets/small-clam.png';
    const closedCursor = 'assets/small-clam-closed.png';

    // Event handlers for clam cursor animation
    const clamMouseDownHandler = () => {
        document.body.style.cursor = `url(${closedCursor}), auto`;
    };

    const clamMouseUpHandler = () => {
        document.body.style.cursor = `url(${openCursor}), auto`;
    };

    // Add event listeners for clam cursor animation
    document.body.addEventListener('mousedown', clamMouseDownHandler);
    document.body.addEventListener('mouseup', clamMouseUpHandler);
};
