var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30, 
    centeredSlides: true, 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    effect: "coverflow", 
    coverflowEffect: {
        rotate: 50, 
        stretch: 0, 
        depth: 100, 
        modifier: 1, 
        slideShadows: false,
        },
    });