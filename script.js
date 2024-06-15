var middleswiper = new Swiper(".mymiddleswiper", {
    slidesPerView: 3,
    spaceBetween: 1,
    autoplay:{
      delay:1000,
    },
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      375:{
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      425:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });