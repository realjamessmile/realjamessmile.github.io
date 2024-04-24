document.addEventListener('DOMContentLoaded', function() {
    const openCursor = 'assets/small-clam.png';
    const closedCursor = 'assets/small-clam-closed.png';

    // Set the default cursor to open clam
    document.body.style.cursor = `url(${openCursor}), auto`;

    // Event listeners for the entire document body
    document.body.addEventListener('mousedown', () => {
        document.body.style.cursor = `url(${closedCursor}), auto`;  // Closed clam
    });

    document.body.addEventListener('mouseup', () => {
        document.body.style.cursor = `url(${openCursor}), auto`;  // Open clam
    });
});
