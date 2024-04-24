window.onload = function() {
    const openCursor = 'assets/small-clam.png';
    const closedCursor = 'assets/small-clam-closed.png';
    
    // Set initial cursor to the open clam
    document.body.style.cursor = `url(${openCursor}), auto`;

    // Change cursor to closed clam on mousedown
    document.body.addEventListener('mousedown', () => {
        document.body.style.cursor = `url(${closedCursor}), auto`;
    });

    // Change cursor back to open clam on mouseup
    document.body.addEventListener('mouseup', () => {
        document.body.style.cursor = `url(${openCursor}), auto`;
    });
};
