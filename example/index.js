import feedbackAnimation from '../feedback-animation.js';
const elements = document.querySelectorAll('[data-its-feedback-animation]');
elements.forEach(element => {
    feedbackAnimation(element);
});
