import { DATA_ELEMENT } from './constants.js';

const elements = document.querySelectorAll(`[${DATA_ELEMENT}]`);

const animateElementRipple = (element, color) => {
    element.onmousedown = e => {
        let mouseUp = false;
        const mouseUpListener = document.onmouseup = () => {
            mouseUp = true;
            element.removeEventListener('mouseup', mouseUpListener);
        }

        const x = e.pageX - element.offsetLeft;
        const y = e.pageY - element.offsetTop;
        const w = element.offsetWidth * 1.2;

        const ripple = document.createElement('span');

        ripple.className = 'ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.setProperty('--scale', w);

        if (element.dataset.itsFeedbackColor) {
            ripple.style.setProperty('--color', color);
        }

        element.prepend(ripple);

        setTimeout(() => {
            if (mouseUp) {
                ripple.parentNode.removeChild(ripple);
            } else {
                const mouseUpListener = document.onmouseup = () => {
                    ripple && ripple.parentNode.removeChild(ripple);
                    element.removeEventListener('mouseup', mouseUpListener);
                }
            }
        }, 300);
    }
}

if (elements) {
    elements.forEach(element => {
        switch (element.dataset.itsFeedbackAnimation) {
            case 'ripple':
                animateElementRipple(element, element.dataset.itsFeedbackColor);
            default:
                return;
        }
    });
}

