const boxes = document.querySelectorAll(".author-box");
if (boxes) {
	[...boxes].forEach((item) => {
		boxOpen(item)
	});
	[...boxes].forEach((item, index) => {
		let button = item.querySelector(".author-box__button");
		button.addEventListener("click", (event) => {
			item.classList.toggle("open");
			boxOpen(item)
			// removeOpen(index);
		})
	})
}
function boxOpen(item) {
	let buttonText = item.querySelector('.author-box__button-text')
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
	})
}