import $ from "jquery";

function init() {
  const myMap = new window.ymaps.Map("map", {
    center: [42.87, 74.59],
    zoom: 12,
  });
}

function listener() {
  const $goTop = $(".go-top");
  const $floatBlock = $(".float__block");

  $(window).scroll(function () {
    const ifDown =
      $(window).scrollTop() + $(window).height() >= $(window).height() * 1.5;
    // const ifFooter =
    //   $(window).scrollTop() + $(window).height() >= $(document).height() - 200;
    if (ifDown) {
      $goTop.css("transform", "translateX(0px)");
      $goTop.css("width", "60px");
    } else {
      $goTop.css("transform", "translateX(1000px)");
      $goTop.css("width", "0px");
    }
    // if (ifFooter) {
    //   $floatBlock.css("bottom", "200px");
    // } else {
    //   $floatBlock.css("bottom", "50px");
    // }
  });
}

export default () => {
  $("select").niceSelect();
  $(".map-popup__close").click(() => {
    $(".map-popup").removeClass("open");
  });

  $(".go-top").click(() => {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  listener();

  window.ymaps.ready(init);
};
