import fslightbox from 'fslightbox';

import "./modules/sliders.js";

import "./modules/spollers.js";

import "./modules/dynamic_adapt.js";

import "./modules/choices.js";

import "./modules/tabs.js";

import "./modules/accordeon.js";

document.addEventListener('click', documentActions);
const menuBody = document.querySelector('.menu-mobile');
const tabContent = document.querySelectorAll('.tabs__content');
const categoriesMenu = document.querySelector('.categories-header__menu')
function documentActions(event) {
	let target = event.target;
	// Аккордеон на мобильной версии
	if (target.closest('.content-tab__header')) {
		tabContent.forEach(item => {
			item.classList.remove('active')
		})
		target.parentNode.classList.toggle('active');
	}
	// Открытие меню burger
	if (target.closest('.nav-header__button')) {
		menuBody.classList.toggle('active')
		document.body.classList.toggle('lock');
	}
	if (!target.closest('.menu-mobile') && !target.closest('.nav-header__button')) {
		menuBody.classList.remove('active');
	}
	// Открытие категорий в мобильной версии
	if (target.closest('.categories-header__button')) {
		target.classList.toggle('active')
		categoriesMenu?.classList.toggle('active');
	}
}
document.querySelector('.content-tab__header')?.click();


