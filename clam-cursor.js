window.onload = function() {
    const openCursor = 'assets/small-clam.png';
    const closedCursor = 'assets/small-clam-closed.png';

    document.body.style.cursor = `url(${openCursor}), auto`;  // Default to open clam

    // Change to closed clam on mousedown
    document.body.addEventListener('mousedown', () => {
        document.body.style.cursor = `url(${closedCursor}), auto`;
    });

    // Change back to open clam on mouseup
    document.body.addEventListener('mouseup', () => {
        document.body.style.cursor = `url(${openCursor}), auto`;
    });
};
