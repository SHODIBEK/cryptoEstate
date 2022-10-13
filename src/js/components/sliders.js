import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

const swiper = new Swiper('.swiper.js-sliderInit', {
  modules: [Navigation, Scrollbar],
  slidesPerView: 'auto',
  grabCursor: true,
  // loop: true,
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

const receiveSwiper = new Swiper('.receive .swiper', {
  modules: [Navigation, Scrollbar],
  slidesPerView: '1.2',
  grabCursor: true,
  // loop: true,
  spaceBetween: 17,
  scrollbar: {
    el: '.receive .swiper-scrollbar',
    draggable: true,
  },
  navigation: {
    nextEl: '.receive .swiper-button-next',
    prevEl: '.receive .swiper-button-prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 30,
      slidesPerView: '3.5',
    }
  }
});

const propertySwiper = new Swiper('.property .swiper', {
  modules: [Navigation, Scrollbar],
  slidesPerView: '1.2',
  grabCursor: true,
  // loop: true,
  spaceBetween: 17,
  scrollbar: {
    el: '.property .swiper-scrollbar',
    draggable: true,
  },
  navigation: {
    nextEl: '.property .swiper-button-next',
    prevEl: '.property .swiper-button-prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 30,
      slidesPerView: '3.5',
    }
  }
});