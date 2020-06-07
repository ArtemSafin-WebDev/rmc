import Choices from 'choices.js';

export default function() {
    const customSelectElements = Array.from(document.querySelectorAll('.js-custom-select'));


    customSelectElements.forEach(element => {
        const input = element.querySelector('select');

        new Choices(input, {
            searchEnabled: false,
            shouldSort: false,
            itemSelectText: ''
        })
    })
}