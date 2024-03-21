// Слайдеры
const gridGalleries = document.querySelectorAll(".gallery-grid");
if (gridGalleries) {
  [...gridGalleries].forEach((gallery) => {
    let gallerySwiper = new Swiper(gallery, {
      wrapperClass: "gallery__wrapper",
      slideClass: "gallery__item",
      lockClass: "swiper-lock",
      speed: 800,
      pagination: {
        el: gallery.querySelector(".slider-pagination"),
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: gallery.querySelector(".gallery__controls .slider-button-next"),
        prevEl: gallery.querySelector(".gallery__controls .slider-button-prev"),
      },
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
      spaceBetween: 16,
    });
  });
}
const sliderConfig = {
  wrapperClass: "gallery__wrapper",
  slideClass: "gallery__item",
  lockClass: "swiper-lock",
  slidesPerView: 4,
  speed: 800,
};
const sliderRecent = document.querySelector(".gallery-recent");
if (sliderRecent) {
  let recentSwiper = new Swiper(sliderRecent, {
    pagination: {
      el: ".slider-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".gallery__controls .slider-button-next",
      prevEl: ".gallery__controls .slider-button-prev",
    },
    ...sliderConfig,
    breakpoints: {
      300: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 11,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 16,
        slidesPerGroup: 4,
      },
    },
  });
}
const sliderPhotoModel = document.querySelector(".gallery-photomodel");
if (sliderPhotoModel) {
  let photoModelSwiper = new Swiper(sliderPhotoModel, {
    wrapperClass: "gallery__wrapper",
    slideClass: "gallery__item",
    lockClass: "swiper-lock",
    speed: 800,
    pagination: {
      el: ".slider-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".gallery__controls .slider-button-next",
      prevEl: ".gallery__controls .slider-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 5,
      },
    },
  });
}
const listGalleries = document.querySelectorAll(".gallery-list");
if (listGalleries) {
  [...listGalleries].forEach((gallery) => {
    let gallerySwiper = new Swiper(gallery, {
      pagination: {
        el: gallery.querySelector(".slider-pagination"),
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: gallery.querySelector(".gallery__controls .slider-button-next"),
        prevEl: gallery.querySelector(".gallery__controls .slider-button-prev"),
      },
      ...sliderConfig,
      breakpoints: {
        300: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 12,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 12,
          grid: {
            rows: 1,
            fill: "column",
          },
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 16,
          slidesPerGroup: 4,
          grid: {
            rows: 1,
            fill: "column",
          },
        },
      },
    });
  });
}
const listGalleriesBest = document.querySelectorAll(".gallery-list-best");
if (listGalleriesBest) {
  [...listGalleriesBest].forEach((gallery) => {
    let gallerySwiper = new Swiper(gallery, {
      wrapperClass: "gallery__wrapper",
      slideClass: "gallery__item",
      lockClass: "swiper-lock",
      pagination: {
        el: gallery.querySelector(".slider-pagination"),
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: gallery.querySelector(".gallery__controls .slider-button-next"),
        prevEl: gallery.querySelector(".gallery__controls .slider-button-prev"),
      },
      speed: 800,
      breakpoints: {
        300: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          grid: {
            rows: 2,
            fill: "row",
          },
          spaceBetween: 12,
        },
        767.98: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          grid: {
            rows: 1,
            fill: "column",
          },
          spaceBetween: 14,
        },
        1200: {
          grid: {
            rows: 1,
            fill: "column",
          },
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 14,
        },
      },
    });
  });
}
const galleryBig = document.querySelectorAll(".gallery-big");
if (galleryBig) {
  [...galleryBig].forEach((gallery) => {
    let galleryBigSwiper = new Swiper(gallery, {
      wrapperClass: "gallery__wrapper",
      slideClass: "gallery__item",
      lockClass: "swiper-lock",
      pagination: {
        el: ".main-photo__gallery .slider-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".main-photo__gallery .gallery__controls .slider-button-next",
        prevEl: ".main-photo__gallery .gallery__controls .slider-button-prev",
      },
      speed: 800,
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 30,
          slidesPerGroup: 1,
        },
      },
    });
  });
}
const galleryAwards = document.querySelector(".gallery-awards");
if (galleryAwards) {
  let galleryAwardsSwiper = new Swiper(galleryAwards, {
    wrapperClass: "gallery__wrapper",
    slideClass: "gallery__item",
    lockClass: "swiper-lock",
    pagination: {
      el: galleryAwards.nextElementSibling.querySelector(".slider-pagination"),
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: galleryAwards.nextElementSibling.querySelector(
        ".gallery__controls .slider-button-next"
      ),
      prevEl: galleryAwards.nextElementSibling.querySelector(
        ".gallery__controls .slider-button-prev"
      ),
    },
    speed: 800,
    breakpoints: {
      300: {
        slidesPerView: 1.3,
        centeredSlides: true,
        spaceBetween: 17,
        slidesPerGroup: 1,
        initialSlide: 1,
      },
      390: {
        slidesPerView: 1.4,
        spaceBetween: 17,
        slidesPerGroup: 1,
        centeredSlides: true,
        initialSlide: 1,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 17,
        slidesPerGroup: 1,
        centeredSlides: true,
        initialSlide: 1,
      },
      991.98: {
        slidesPerView: 4,
        spaceBetween: 24,
        slidesPerGroup: 2,
        centeredSlides: false,
        initialSlide: 0,
      },
    },
  });
}
const galleryPhotos = document.querySelector(".gallery-photos");
if (galleryPhotos) {
  let galleryPhotosSwiper = new Swiper(galleryPhotos, {
    wrapperClass: "gallery__wrapper",
    slideClass: "gallery__item",
    lockClass: "swiper-lock",
    pagination: {
      el: galleryPhotos.nextElementSibling.querySelector(".slider-pagination"),
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: galleryPhotos.nextElementSibling.querySelector(
        ".gallery__controls .slider-button-next"
      ),
      prevEl: galleryPhotos.nextElementSibling.querySelector(
        ".gallery__controls .slider-button-prev"
      ),
    },
    speed: 800,
    breakpoints: {
      300: {
        slidesPerView: 1.4,
        spaceBetween: 17,
        slidesPerGroup: 1,
        centeredSlides: true,
        initialSlide: 1,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 17,
        slidesPerGroup: 1,
        centeredSlides: true,
        initialSlide: 1,
      },
      991.98: {
        slidesPerView: 4,
        spaceBetween: 24,
        slidesPerGroup: 2,
        centeredSlides: false,
        initialSlide: 0,
      },
    },
  });
}
const galleryPersonal = document.querySelector(".gallery-personal");
if (galleryPersonal) {
  let galleryPersonalSwiper = new Swiper(galleryPersonal, {
    wrapperClass: "gallery__wrapper",
    slideClass: "gallery__item",
    lockClass: "swiper-lock",
    pagination: {
      el: galleryPersonal.nextElementSibling.querySelector(
        ".slider-pagination"
      ),
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: galleryPersonal.nextElementSibling.querySelector(
        ".gallery__controls .slider-button-next"
      ),
      prevEl: galleryPersonal.nextElementSibling.querySelector(
        ".gallery__controls .slider-button-prev"
      ),
    },
    speed: 800,
    breakpoints: {
      300: {
        slidesPerView: "auto",
        spaceBetween: 28,
        slidesPerGroup: 1,
        centeredSlides: true,
        initialSlide: 1,
      },
      767.98: {
        slidesPerView: "auto",
        spaceBetween: 66,
        slidesPerGroup: 3,
        centeredSlides: false,
        initialSlide: 0,
      },
    },
  });
}

// Слайдеры в большой карточке товара
let sliderType = window.innerWidth < 991.98 ? "mobile" : "desktop";

const cardMainSlider = document.querySelector(".product-slider__body");
const cardThumbsSlider = document.querySelector(".thumbs-slider__body");
const cardThumbschildren = cardThumbsSlider?.children[0].children.length;
const cardMainChildren = cardMainSlider?.children[0].children.length;
let cardNavSwiper;
let cardMainSwiper;
//   if (cardThumbsSlider && cardThumbschildren <= 5) {
//     cardThumbsSlider.nextElementSibling.remove();
//   }
//   if (cardMainSlider && cardMainChildren <= 1) {
//     cardMainSlider.querySelector(".main-slider__controls").remove();
//   }
if (cardMainSlider) {
  const sliderPagination = cardMainSlider.querySelector(
    ".product-slider__pagination"
  );
  cardNavSwiper = new Swiper(cardThumbsSlider, {
    slidesPerView: 5,
    spaceBetween: 12,
    slideClass: "thumbs-slider__item",
    wrapperClass: "thumbs-slider__wrapper",
    speed: 600,
  });
  cardMainSwiper = new Swiper(cardMainSlider, {
    slidesPerView: 1,
    grabCursor: false,
    slideClass: "product-slider__item",
    wrapperClass: "product-slider__wrapper",
    speed: 600,
    spaceBetween: 10,
    effect: "fade",
    thumbs: {
      swiper: cardNavSwiper,
    },
    pagination: {
      el: sliderPagination,
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "</span>";
      },
    },
  });
}
// Проверяем, есть ли в объекте слайдера метод destroy, и если есть - вызываем его.
// if (cardMainSwiper.destroy && typeof cardMainSwiper.destroy === 'function') {
//  cardMainSwiper.destroy(); // Возможно,если в круглые скобки передать true то будет лучше.
// }

const similarSlider = document.querySelector(".slider-similar__body");
if (similarSlider) {
  let similarSwiper = new Swiper(similarSlider, {
    slidesPerView: 3,
    spaceBetween: 38,
    speed: 600,
  });
}

let root = document.querySelectorAll(".gallery__body");
// Создаем новый observer (наблюдатель)
root.forEach((wrapper) => {
  let options = {
    root: wrapper,
  };
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // получаем свойства, которые доступны в объекте entry
      const { target, isIntersecting } = entry;
      if (isIntersecting) {
        target.classList.remove("hidden");
      } else {
        target.classList.add("hidden");
      }
    });
  }, options);
  // Задаем элемент(-ы) для наблюдения
  let elements = wrapper.querySelectorAll(".gallery__item");
  // Прикрепляем его к «наблюдателю»
  elements.forEach(function (item) {
    observer.observe(item);
  });
});

// Селекты
// Общая конфигурация для всех селектов
const choiceConfig = {
  noResultsText: "Ничего не найдено",
  searchChoices: false,
  searchEnabled: false,
  itemSelectText: "",
  searchPlaceholderValue: "Поиск",
  placeholder: false,
  allowHTML: true,
  removeItemButton: false,
  searchResultLimit: 8,
};

const selectChoices = document.querySelectorAll(".select-choices");
[...selectChoices].forEach((select) => {
  let choices = new Choices(select, choiceConfig);
});

/*================== TABS ====================*/
let tabContentBlock = document.querySelectorAll("[data-tab-content]");
let tabsItem = document.querySelectorAll("[data-tab]");

[...tabsItem].forEach((tab) => {
  tab.addEventListener("click", () => {
    let currentTab = tab.dataset.tab;
    let currentContent = document.querySelector(
      `[data-tab-content=${currentTab}]`
    );
    tabContentBlock.forEach((item) => {
      item.classList.remove("show");
    });
    tabsItem.forEach((item) => {
      item.classList.remove("active");
    });
    currentContent.classList.add("show");
    tab.classList.add("active");
  });
});
document.querySelector("[data-tab]")?.click();

// Accordeon на странице автора
const boxes = document.querySelectorAll(".author-box");
if (boxes) {
  [...boxes].forEach((item) => {
    boxOpen(item);
  });
  [...boxes].forEach((item, index) => {
    let button = item.querySelector(".author-box__button");
    button.addEventListener("click", (event) => {
      item.classList.toggle("open");
      boxOpen(item);
    });
  });
}
function boxOpen(item) {
  let buttonText = item.querySelector(".author-box__button-text");
  let description = item.querySelector(".author-box__body");
  if (item.classList.contains("open")) {
    // description.style.height = `${description.scrollHeight}px`;
    buttonText.textContent = "Свернуть";
  } else {
    // description.style.height = "0px";
    buttonText.textContent = "Развернуть";
  }
}
function removeOpen(index1) {
  box.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");
      let des = item2.querySelector(".author-box__body");
      let btnText = item2.querySelector(".author-box__button-text");
      btnText.textContent = "Развернуть";
      // des.style.height = "0px";
    }
  });
}

document.addEventListener("click", documentActions);
const menuBody = document.querySelector(".menu-mobile");
const tabContent = document.querySelectorAll(".tabs__content");
const categoriesMenu = document.querySelector(".categories-header__menu");
function documentActions(event) {
  let target = event.target;
  // Аккордеон на мобильной версии
  if (target.closest(".content-tab__header")) {
    tabContent.forEach((item) => {
      item.classList.remove("active");
    });
    target.parentNode.classList.toggle("active");
  }
  // Открытие меню burger
  if (target.closest(".nav-header__button")) {
    menuBody.classList.toggle("active");
    document.body.classList.toggle("lock");
  }
  if (
    !target.closest(".menu-mobile") &&
    !target.closest(".nav-header__button")
  ) {
    menuBody.classList.remove("active");
  }
  // Открытие категорий в мобильной версии
  if (target.closest(".categories-header__button")) {
    target.classList.toggle("active");
    categoriesMenu?.classList.toggle("active");
  }
}
document.querySelector(".content-tab__header")?.click();

// Аккордеон на странице вопросы-ответы
const accordeon = document.querySelectorAll(".accordeon");
[...accordeon].forEach((el) => {
  const accordionContent = el.querySelectorAll(".accordeon__item");
  accordionContent.forEach((item, index) => {
    let header = item.querySelector(".accordeon-title");
    let description = item.querySelector(".accordeon-content");
    header.addEventListener("click", () => {
      item.classList.toggle("open");
      if (item.classList.contains("open")) {
        description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
      } else {
        description.style.height = "0px";
      }
      // removeOpenAccordeon(index);
    });
    document.addEventListener("DOMContentLoaded", () => {
      if (item.classList.contains("open")) {
        description.style.height = `${description.scrollHeight}px`;
      }
    });
    function removeOpenAccordeon(index1) {
      accordionContent.forEach((item2, index2) => {
        if (index1 != index2) {
          item2.classList.remove("open");
          let des = item2.querySelector(".accordeon-content");
          des.style.height = "0px";
        }
      });
    }
  });
});

function setLineWidth() {
  const itemSections = document.querySelectorAll(".item-section");
  if (itemSections.length) {
    [...itemSections].forEach((section) => {
      let element = section.querySelector(".item-section__title span");
      if (element) {
        let currentWidth = element.getBoundingClientRect().width;
        element.style.setProperty("--line-width", `${currentWidth}px`);
      }
    });
  }
}
setLineWidth();
window.addEventListener("resize", () => {
  setLineWidth();
});

// Инициализация кастомного скроллбара
function initSimpleBar() {
  Array.prototype.forEach.call(
    document.querySelectorAll("[data-simplebar]"),
    (el) => new SimpleBar(el)
  );
}
initSimpleBar();
