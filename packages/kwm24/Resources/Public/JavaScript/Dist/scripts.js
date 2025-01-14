const swiper = new Swiper('.swiper', {

    // Optional parameters
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,


    // Wenn du eine Pagination benötigst
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Falls du eine Scrollbar benötigst
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
