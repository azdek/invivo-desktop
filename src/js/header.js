import $ from "jquery";
import Axios from "axios";

export const openToggler = (className) => {
  const $elem = $(className);

  $elem.click(() => {
    $elem.addClass("open");
  });

  $(document).click((e) => {
    if (!$(e.target).closest($elem).length) {
      $elem.removeClass("open");
    }
  });
};

function menuToggler() {
  const $btn = $(".menu-btn");
  const $header_nav = $(".header_nav");

  $btn.click(() => {
    if ($btn.hasClass("open")) {
      $btn.removeClass("open");
      $header_nav.removeClass("open");
    } else {
      $btn.addClass("open");
      $header_nav.addClass("open");
    }
  });

  // $(document).click((e) => {
  //   console.log($btn.hasClass("open"))
  //   if ($btn.hasClass("open") && !$(e.target).closest($header_nav).length) {
  //     $btn.removeClass("open");
  //     $header_nav.removeClass("open");
  //   }
  // });
}

function listener() {
  handleHeader(0);
  $(window).scroll(handleHeader);
}
function handleHeader() {
  const $header = $(".header");
  const $header__mockup = $(".header__mockup");
  const isHide = $(window).scrollTop() > 0 + $header.height();

  if (isHide) {
    $header.addClass("closed_menu");
    $header__mockup.addClass("closed_menu");
  } else {
    $header.removeClass("closed_menu");
    $header__mockup.removeClass("closed_menu");
  }
}

const searchInput = () => {
  $(".search__magnify").click(() => {
    const $input = $(".search__input input");
    // Axios({
    //   url: "/search_result_data.json",
    //   method: "get",
    // }).then((res) => {
    //   if (res.status === 200) {
    //     const results = res.data.filter((item) =>
    //       item.name.includes($input.val())
    //     );
    //   }
    // });
    renderResultItem([
      {
        name: "Антитела к тиреоглобулину (АТ ТГ)",
        price: 129,
      },
      {
        name: "Антитела к тиреопероксидазе (АТ ТПО, anti-TPO)",
        price: 231,
      },
      {
        name: "Антитела к тиреопероксидазе (в розв.) (МА)",
        price: 271,
      },
      {
        name: "Антитела к рецепторам  ТТГ (АТрТТГ)",
        price: 499,
      },
      {
        name: "Антитела к тиреоглобулину (АТ ТГ)",
        price: 276,
      },
      {
        name: "Антитела к тиреопероксидазе (АТ ТПО, anti-TPO)",
        price: 123,
      },
    ]);
  });
};

function renderResultItem(results = []) {
  const $list = $(".results__list");
  const $search = $(".header__search");

  $list.html("");
  if (results.length > 0) {
    console.log("results", results);
    $search.addClass("open");

    results.forEach(({ name, price }) => {
      $list.append(`
        <div class="results__item flex ai-c">
          <div class="name">${name}</div>
          <div class="price">${price} руб.</div>
          <div class="icon flex ai-c jc-c">
            <img src="img/icons/search-basket.svg" alt="">
          </div>
        </div>
      `);
    });
  } else {
    $search.removeClass("open");
  }
}

const searchResultClose = () => {
  $(".search__clear").click(() => {
    $(".search__input input").val("");
    $(".header__search").removeClass("open");
  });
};

function popupNewsClose() {
  $(".popup-news__close").click(() => {
    $(".popup-news__body").removeClass("open");
  });
}

export default () => {
  searchInput();
  searchResultClose();

  menuToggler();
  listener();

  popupNewsClose();

  openToggler(".city");
  openToggler(".lang");
  openToggler(".basket");

  $(".basket .close__icon").click((e) => {
    e.preventDefault();
    e.stopPropagation();
    $(".basket").removeClass("open");
  });
};
