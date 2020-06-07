import polyfills from './polyfills';
import detectTouch from './detectTouch';
import videosSlider from './videosSlider';
import burgerMenu from './burgerMenu';
import readAlsoSlider from './readAlsoSlider';
import customSelects from './customSelect';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    burgerMenu();
    videosSlider();
    readAlsoSlider();
    customSelects();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
