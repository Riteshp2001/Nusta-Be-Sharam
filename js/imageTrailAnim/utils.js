// Import ImagesLoaded Pakage
import imagesLoaded from 'imagesloaded';

const body = document.body;
const docEl = document.documentElement;

const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        // The imagesLoaded library is used to ensure all images (including backgrounds) are fully loaded.
        imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
    });
};

const lerp = (a, b, n) => (1 - n) * a + n * b;
const distance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);
const getPointerPos = ev => {
    let posx = 0;
    let posy = 0;

    // If the event is not provided, use the global window event object.
    if (!ev) ev = window.event;

    // Handle touch events
    if (ev.touches) {
        if (ev.touches.length > 0) { // Check if there are any touches available
            posx = ev.touches[0].pageX;
            posy = ev.touches[0].pageY;
        }
    }
    // Handle mouse events
    else if (ev.pageX || ev.pageY) {
        posx = ev.pageX;
        posy = ev.pageY;
    }
    else if (ev.clientX || ev.clientY) {
        posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
        posy = ev.clientY + body.scrollTop + docEl.scrollTop;
    }

    // Return the position.
    return { x: posx, y: posy };
}

const getMouseDistance = (mousePos, lastMousePos) => {
    return distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);
};

const getNewPosition = (position, offset, arr) => {
    // Ensure offset is non-negative and is within the range of the array's length
    const realOffset = Math.abs(offset) % arr.length;

    // Check if subtracting the offset stays within the array's bounds
    if (position - realOffset >= 0) {
        return position - realOffset;
    } else {
        // If not, wrap around to the end of the array and compute the new position
        return arr.length - (realOffset - position);
    }
};

const setClipPath = (clipInnerElements, numRows, numCols) => {
    if (clipInnerElements.length !== numRows * numCols) {
        console.error('Mismatch between provided grid dimensions and number of elements.');
        return;
    }

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const idx = i * numCols + j;

            const top = (100 / numRows) * i + '%';
            const bottom = (100 / numRows) * (i + 1) + '%';
            const left = (100 / numCols) * j + '%';
            const right = (100 / numCols) * (j + 1) + '%';

            const clipPathValue = `polygon(${left} ${top}, ${right} ${top}, ${right} ${bottom}, ${left} ${bottom})`;

            clipInnerElements[idx].style.clipPath = clipPathValue;
        }
    }
}

// Exporting utility functions for use in other modules.
export {
    preloadImages,
    lerp,
    distance,
    getPointerPos,
    getMouseDistance,
    getNewPosition,
    setClipPath
};