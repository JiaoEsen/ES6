import {
    BaseSwiper
} from './base.js';
const bs = new BaseSwiper('.wrap', {
    nextEl: '.next',
    prevEl: '.prev',
    autoPlay: false,
    delay: 3000,
    loop: true

});