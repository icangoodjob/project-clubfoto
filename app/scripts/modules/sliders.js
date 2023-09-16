import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs, FreeMode, Grid } from 'swiper/modules';

const gridGalleries = document.querySelectorAll('.gallery-grid');
if (gridGalleries) {
	[...gridGalleries].forEach(gallery => {
		let gallerySwiper = new Swiper(gallery, {
			modules: [Pagination, Navigation, Grid],
			wrapperClass: 'gallery__wrapper',
			slideClass: 'gallery__item',
			lockClass: "swiper-lock",
			speed: 800,
			pagination: {
				el: gallery.querySelector(".slider-pagination"),
				type: 'bullets',
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
				fill: 'row'
			},
			spaceBetween: 16,
		})
	})
}
const sliderConfig = {
	modules: [Pagination, Navigation, Grid],
	wrapperClass: 'gallery__wrapper',
	slideClass: 'gallery__item',
	lockClass: "swiper-lock",
	slidesPerView: 4,
	speed: 800,
}
const sliderRecent = document.querySelector('.gallery-recent');
if (sliderRecent) {
	let recentSwiper = new Swiper(sliderRecent, {
		pagination: {
			el: ".slider-pagination",
			type: 'bullets',
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
		}
	})
}
const sliderPhotoModel = document.querySelector('.gallery-photomodel');
if (sliderPhotoModel) {
	let photoModelSwiper = new Swiper(sliderPhotoModel, {
		modules: [Pagination, Navigation],
		wrapperClass: 'gallery__wrapper',
		slideClass: 'gallery__item',
		lockClass: "swiper-lock",
		speed: 800,
		pagination: {
			el: ".slider-pagination",
			type: 'bullets',
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
		}
	})
}
const listGalleries = document.querySelectorAll('.gallery-list');
if (listGalleries) {
	[...listGalleries].forEach(gallery => {
		let gallerySwiper = new Swiper(gallery, {
			pagination: {
				el: gallery.querySelector(".slider-pagination"),
				type: 'bullets',
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
						fill: 'row'
					},
				},
				1200: {
					slidesPerView: 3,
					slidesPerGroup: 3,
					spaceBetween: 12,
					grid: {
						rows: 1,
						fill: 'column'
					},
				},
				1400: {
					slidesPerView: 4,
					spaceBetween: 16,
					slidesPerGroup: 4,
					grid: {
						rows: 1,
						fill: 'column'
					},
				},
			}
		})
	})
}
const listGalleriesBest = document.querySelectorAll('.gallery-list-best');
if (listGalleriesBest) {
	[...listGalleriesBest].forEach(gallery => {
		let gallerySwiper = new Swiper(gallery, {
			modules: [Pagination, Navigation, Grid],
			wrapperClass: 'gallery__wrapper',
			slideClass: 'gallery__item',
			lockClass: "swiper-lock",
			pagination: {
				el: gallery.querySelector(".slider-pagination"),
				type: 'bullets',
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
						fill: 'row'
					},
					spaceBetween: 12,
				},
				767.98: {
					slidesPerView: 2,
					slidesPerGroup: 1,
					grid: {
						rows: 1,
						fill: 'column'
					},
					spaceBetween: 14,
				},
				1200: {
					grid: {
						rows: 1,
						fill: 'column'
					},
					slidesPerView: 3,
					slidesPerGroup: 3,
					spaceBetween: 14,
				},
			}
		})
	})
}

let root = document.querySelectorAll('.gallery__body')
// Создаем новый observer (наблюдатель)
root.forEach(wrapper => {
	let options = {
		root: wrapper,
	}
	let observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			// получаем свойства, которые доступны в объекте entry
			const { target, isIntersecting } = entry;
			if (isIntersecting) {
				target.classList.remove('hidden')
			} else {
				target.classList.add('hidden')
			}
		});
	}, options);
	// Задаем элемент(-ы) для наблюдения
	let elements = wrapper.querySelectorAll('.gallery__item');
	// Прикрепляем его к «наблюдателю»
	elements.forEach(function (item) {
		observer.observe(item);
	})
})