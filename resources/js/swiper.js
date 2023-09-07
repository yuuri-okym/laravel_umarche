// // import Swiper styles
// import 'swiper/css';
// // import Swiper JS
// import Swiper from 'swiper';
// SwiperのCSSファイルを直接インポート
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper/swiper-bundle.min.js';


import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });