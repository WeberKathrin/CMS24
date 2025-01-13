const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 10000,
    },
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    // Coverflow Effect Parameters
    effect: 'coverflow', // Aktiviert den Coverflow-Effekt
    coverflowEffect: {
        depth: 100, // Tiefe des Effekts (Z-Achse)
        modifier: 1, // Effektmodifikator (Steuert die Intensität des Effekts)
        rotate: 50, // Drehung der Slides in Grad
        scale: 1, // Skalierung der Slides
        slideShadows: true, // Aktiviert die Schatten der Slides
        stretch: 0, // Abstand zwischen den Slides
    },

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
