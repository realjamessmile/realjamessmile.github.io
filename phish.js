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

    phishButton.addEventListener('click', togglePhish);

 // Disable clam event listener when clicking the phish button
    phishButton.addEventListener('mousedown', () => {
        document.body.removeEventListener('mousedown', clamCursor);
    });

    // Re-enable clam event listener when clicking outside the phish button
    phishButton.addEventListener('mouseup', () => {
        document.body.addEventListener('mousedown', clamCursor);
    });
};
