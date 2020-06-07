import { lockScroll, unlockScroll } from './scrollBlocker';


export default function() {
    const burgerBtn = document.querySelector('.js-burger-btn');
    const burgerMenuScrollWrapper = document.querySelector('.js-burger-menu-inner');

    if (burgerBtn && burgerMenuScrollWrapper) {
        let menuOpen = false;

        burgerBtn.addEventListener('click', event => {
            event.preventDefault();

            if (!menuOpen) {
                document.body.classList.add('burger-menu-open');
                lockScroll(burgerMenuScrollWrapper);
                menuOpen = true;
            } else {
                document.body.classList.remove('burger-menu-open');
                unlockScroll();
                menuOpen = false;
            }
        })
    } else {
        console.error('No burger elements');
    }
}