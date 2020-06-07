import Swiper from 'swiper';

export default function() {
    const videosSliderElements = Array.from(document.querySelectorAll('.js-videos-slider'));

    videosSliderElements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 18,
            watchOverflow: true,
            navigation: {
                nextEl: element.querySelector('.videos__slider-arrow--next'),
                prevEl: element.querySelector('.videos__slider-arrow--prev')
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1025: {
                    slidesPerView: 3,
                    spaceBetween: 70
                }
            }
        });
    });
}
