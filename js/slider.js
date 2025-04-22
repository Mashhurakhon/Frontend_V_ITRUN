const slider = new Swiper('.swiper', {
    navigation: { /* навигационные кнопки */
        prevEl: '.swiper-button-prev', /* кнопка назад */
        nextEl: '.swiper-button-next' /* кнопка вперед */
    },
    pagination: { /* пагинация (кружочки) */
        el: '.swiper-pagination',
        clickable: true /* переключение по нажатию */
    },
    // scrollbar: { /* полоса прокрутки */
    //     el: ".swiper-scrollbar",
    //     draggable: true
    // },
    loop: true, /* бесконечность */
    slidesPerView: 2,  /* одновременный показ слайдов */
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        }

    },
    autoplay: { /* автослайдер */
        delay: 1500
    },
    effect: 'slide',
    grabCursor: true
    
})