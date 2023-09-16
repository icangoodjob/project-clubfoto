// Плагин для создания селектов
import Choices from "choices.js";

// Общая конфигурация для всех селектов
export const choiceConfig = {
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

const selectChoices = document.querySelectorAll('.select-choices');
[...selectChoices].forEach((select) => {
	let choices = new Choices(select, choiceConfig)
})