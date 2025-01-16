const swiper = new Swiper('.swiper', {

    // Optional parameters
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,


    // Pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation pfeile
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
