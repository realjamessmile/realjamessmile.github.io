  <script>
        window.onload = function() {
            // Reference to the audio element
            const audio = document.querySelector('audio');
            const playBox = document.querySelector('.play-box');
            const playIcon = document.querySelector('.play-icon');

            // Toggle play/pause on click and update the icon
            playBox.addEventListener('click', () => {
                if (audio.paused) {
                    audio.play();
                    playIcon.textContent = 'PHISH ME';
                } else {
                    audio.pause();
                    playIcon.textContent = 'STOP PHISHING';
                }
            });
        };
    </script>
