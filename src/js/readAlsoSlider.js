import Swiper from 'swiper';

export default function() {
    const readAlsoSliders = Array.from(document.querySelectorAll('.js-read-also-slider'));

    readAlsoSliders.forEach(slider => {
        const container = slider.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            spaceBetween: 18,
            slidesPerView: 'auto',
            navigation: {
                nextEl: slider.querySelector('.read-also__slider-arrow--next'),
                prevEl: slider.querySelector('.read-also__slider-arrow--prev')
            },
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                // 969: {
                //     spaceBetween: 30,
                //     slidesPerView: 4
                // }
            }
        });
    });
}
