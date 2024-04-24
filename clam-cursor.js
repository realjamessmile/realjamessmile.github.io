window.onload = function() {
    const openCursor = 'assets/small-clam.png';
    const closedCursor = 'assets/small-clam-closed.png';

    // Set the default cursor to open clam
    document.body.style.cursor = `url(${openCursor}), auto`;

    // Event listeners for the entire document body
    document.body.addEventListener('mousedown', (event) => {
        console.log("Mouse down detected");  // Check if this triggers
        document.body.style.cursor = `url(${closedCursor}), auto`;  // Closed clam
    });

    document.body.addEventListener('mouseup', (event) => {
        console.log("Mouse up detected");  // Check if this triggers
        document.body.style.cursor = `url(${openCursor}), auto`;  // Open clam
    });
};
