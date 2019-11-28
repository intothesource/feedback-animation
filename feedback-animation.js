import { DATA_RIPPLE_SIZE } from './constants.js';

const animateElementRipple = (element, color) => {
    element.addEventListener('mousedown', e => {
        // Check if pressing the primary button
        if (e.button === 0) {

            let mouseUp = false;
            const mouseUpListener = document.onmouseup = () => {
                mouseUp = true;
                element.removeEventListener('mouseup', mouseUpListener);
            }

            const tempBoundingRect = element.getBoundingClientRect();
            const x = e.pageX - tempBoundingRect.left;
            const y = e.pageY - tempBoundingRect.top;

            // const x = e.pageX - element.offsetLeft;
            // const y = e.pageY - element.offsetTop;
            const w = element.offsetWidth * DATA_RIPPLE_SIZE;

            const ripple = document.createElement('span');

            ripple.className = 'ripple';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.setProperty('--scale', w);

            if (element.dataset.itsFeedbackColor) {
                console.log(element.dataset.itsFeedbackColor);
                ripple.style.setProperty('--color', color);
            }

            element.prepend(ripple);

            setTimeout(() => {
                if (mouseUp) {
                    ripple.parentNode.removeChild(ripple);
                } else {
                    const mouseUpListener = document.onmouseup = () => {
                        if (ripple) {
                            ripple && ripple.parentNode.removeChild(ripple);
                        }
                        element.removeEventListener('mouseup', mouseUpListener);
                    }
                }
            }, 300);
        }
    });
}

const attributeChangeObserver = (animationFunction, element, color) => {
    const observer = new MutationObserver();
    observer.observe(element, {
        attributes: true
    });

    
}

const feedbackAnimation = (element) => {
    if (element) {
        switch (element.dataset.itsFeedbackAnimation) {
            case 'ripple':
                attributeChangeObserver(animateElementRipple, element, element.dataset.itsFeedbackColor);
            default:
                return;
        }
    }
}

export default feedbackAnimation;
