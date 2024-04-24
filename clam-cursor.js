window.onload = function() {
    console.log("Script loaded");  // Confirm the script is running

    const openCursor = 'assets/small-clam.png';
    const closedCursor = 'assets/small-clam-closed.png';
    document.body.style.cursor = `url(${openCursor}), auto`;

    document.body.addEventListener('mousedown', () => {
        console.log("Mouse down");  // Confirm the event is triggered
        document.body.style.cursor = `url(${closedCursor}), auto`;
    });

    document.body.addEventListener('mouseup', () => {
        console.log("Mouse up");  // Confirm the event is triggered
        document.body.style.cursor = `url(${openCursor}), auto`;
    });
};
