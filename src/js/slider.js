import $ from "jquery";
import Swiper from "swiper";

function initBannerSlider() {
  const slider = new Swiper(".swiper-container-banner", {
    loop: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    speed: 400,
    spaceBetween: 100,
    autoplay: {
      delay: 5000,
    },
    containerModifierClass: "banner",
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
  });

  $(`.swiper-container-banner .slider-prev`).click(() => {
    slider.slidePrev();
  });
  $(`.swiper-container-banner .slider-next`).click(() => {
    slider.slideNext();
  });
}

function initPopularSlider() {
  const slider = new Swiper(".swiper-container-popular", {
    loop: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    speed: 400,
    spaceBetween: 25,
    slidesPerView: 3,
    autoplay: {
      delay: 5000,
    },
    containerModifierClass: "swiper-container-popular",
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
  });

  $(`.swiper-container-popular .slider-prev`).click(() => {
    slider.slidePrev();
  });
  $(`.swiper-container-popular .slider-next`).click(() => {
    slider.slideNext();
  });
}

export default () => {
  initBannerSlider();
  initPopularSlider();
};
