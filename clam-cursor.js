window.onload = function() {
    const openCursor = 'assets/small-clam.png';
    const closedCursor = 'assets/small-clam-closed.png';
    
    // Set the default cursor to the open clam
    document.body.style.cursor = `url(${openCursor}), auto`;

    const changeToClosedClam = (event) => {
        event.preventDefault();  // Prevent default behavior to ensure cursor change
        document.body.style.cursor = `url(${closedCursor}), auto`;
    };

    const changeToOpenClam = () => {
        document.body.style.cursor = `url(${openCursor}), auto`;
    };

    // Apply listeners to body to cover all clicks
    document.body.addEventListener('mousedown', changeToClosedClam);
    document.body.addEventListener('mouseup', changeToOpenClam);
};
