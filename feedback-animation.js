// import { DATA_RIPPLE_SIZE } from './constants.js';
import rippleAnimation from './ripple.js';

const attributeChangeObserver = (animationFunction, element, color) => {
    const callback = e => {
        console.log(e);
    }
    const observer = new MutationObserver(callback);
    observer.observe(element, {
        attributes: true
    });
    animationFunction.init(element, color);
    animationFunction.start();
}

const feedbackAnimation = (element) => {
    if (element) {
        switch (element.dataset.itsFeedbackAnimation) {
            case 'ripple':
                const ripple = new rippleAnimation();
                attributeChangeObserver(ripple, element, element.dataset.itsFeedbackColor);
            default:
                return;
        }
    }
}

export default feedbackAnimation;
