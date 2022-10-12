import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

const swiper = new Swiper('.swiper.js-sliderInit', {
  modules: [Navigation, Scrollbar],
  slidesPerView: 'auto',
  grabCursor: true,
  loop: true,
  spaceBetween: 17,
  scrollbar: {
    el: '.capability .swiper-scrollbar',
    draggable: true,
  },
  navigation: {
    nextEl: '.capability .swiper-button-next',
    prevEl: '.capability .swiper-button-prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 30,
    }
  }
});