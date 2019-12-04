import { DATA_RIPPLE_SIZE } from './constants.js';

class Ripple {
    constructor() {
        this.nativeElement = null;
        this.elementColor = null;
        this.mainFunctionReference = null;
    }

    init(element, color) {
        this.nativeElement = element;
        this.elementColor = color;
    }

    start() {
        this.mainFunctionReference = this.createRippleLayer.bind(this);
        this.nativeElement.addEventListener('mousedown', this.mainFunctionReference);
    }

    stop() {
        this.nativeElement.removeEventListener('mousedown', this.mainFunctionReference);
    }

    createRippleLayer(e) {
        // Check if pressing the primary button
        if (e.button === 0) {

            let mouseUp = false;
            const mouseUpListener = document.onmouseup = () => {
                mouseUp = true;
                this.nativeElement.removeEventListener('mouseup', mouseUpListener);
            }

            const tempBoundingRect = this.nativeElement.getBoundingClientRect();
            const x = e.pageX - tempBoundingRect.left;
            const y = e.pageY - tempBoundingRect.top;

            // const x = e.pageX - element.offsetLeft;
            // const y = e.pageY - element.offsetTop;
            const w = this.nativeElement.offsetWidth * DATA_RIPPLE_SIZE;

            const ripple = document.createElement('span');

            ripple.className = 'ripple';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.setProperty('--scale', w);

            if (this.nativeElement.dataset.itsFeedbackColor) {
                console.log(this.nativeElement.dataset.itsFeedbackColor);
                ripple.style.setProperty('--color', this.elementColor);
            }

            this.nativeElement.prepend(ripple);

            setTimeout(() => {
                if (mouseUp) {
                    ripple.parentNode.removeChild(ripple);
                } else {
                    const mouseUpListener = document.onmouseup = () => {
                        if (ripple) {
                            ripple && ripple.parentNode.removeChild(ripple);
                        }
                        this.nativeElement.removeEventListener('mouseup', mouseUpListener);
                    }
                }
            }, 300);
        }
    }
}

// const rippleInstance = new Ripple();
// Object.freeze(rippleInstance);
export default Ripple;
