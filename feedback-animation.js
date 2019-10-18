import { DATA_ELEMENT } from './constants.js';

const elements = document.querySelectorAll(`[${DATA_ELEMENT}]`);

const animateElementRipple = (element, color) => {
    element.onmousedown = e => {

        const x = e.pageX - element.offsetLeft;
        const y = e.pageY - element.offsetTop;
        const w = element.offsetWidth;
        
        const ripple = document.createElement('span');
        
        ripple.className = 'ripple';
        ripple.style.left = x + 'px';
        ripple.style.top  = y + 'px';
        ripple.style.setProperty('--scale', w);

        if (element.dataset.itsFeedbackColor) {
            ripple.style.setProperty('--color', color);
        }
    
        element.appendChild(ripple);
    
        setTimeout(() => {
          ripple.parentNode.removeChild(ripple);
        }, 500);
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

