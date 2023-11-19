import fslightbox from 'fslightbox';
import SimpleBar from 'simplebar';

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

const accordeon = document.querySelectorAll('.accordeon');
[...accordeon].forEach(el => {
	const accordionContent = el.querySelectorAll(".accordeon__item");
	accordionContent.forEach((item, index) => {
		let header = item.querySelector(".accordeon-title");
		let description = item.querySelector(".accordeon-content");
		header.addEventListener("click", () =>{
			item.classList.toggle("open");
			if(item.classList.contains("open")){
				description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
			}else{
				description.style.height = "0px";
			}
			// removeOpenAccordeon(index);
		})
		document.addEventListener('DOMContentLoaded', () => {
			if(item.classList.contains("open")){
				description.style.height = `${description.scrollHeight}px`
			}
		})
		function removeOpenAccordeon(index1){
			accordionContent.forEach((item2, index2) => {
				if(index1 != index2){
					item2.classList.remove("open");
					let des = item2.querySelector(".accordeon-content");
					des.style.height = "0px";
				}
			})
		}
	})
})

function setLineWidth() {
	const itemSections = document.querySelectorAll('.item-section');
	if (itemSections.length) {
		[...itemSections].forEach(section => {
			let element = section.querySelector('.item-section__title span');
			if (element) {
				let currentWidth = element.getBoundingClientRect().width;
				element.style.setProperty('--line-width', `${currentWidth}px`);
			}
		})
	}
}
setLineWidth();
window.addEventListener('resize', () => {
	setLineWidth();
})
function initSimpleBar() {
	Array.prototype.forEach.call(
		document.querySelectorAll('[data-simplebar]'),
		(el) => new SimpleBar(el)
	  );
}
initSimpleBar();