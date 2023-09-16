/*================== TABS ====================*/
let tabContent = document.querySelectorAll("[data-tab-content]");
let tabsItem = document.querySelectorAll("[data-tab]");

[...tabsItem].forEach(tab => {
	tab.addEventListener("click", () => {
		let currentTab = tab.dataset.tab;
		let currentContent = document.querySelector(`[data-tab-content=${currentTab}]`)
		tabContent.forEach((item) => {
			item.classList.remove("show");
		});
		tabsItem.forEach((item) => {
			item.classList.remove("active");
		});
		currentContent.classList.add("show");
		tab.classList.add("active");
	});
})
document.querySelector('[data-tab]')?.click()