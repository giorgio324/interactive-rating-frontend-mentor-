const reviewCard = document.querySelector(".review");
const btns = document.querySelectorAll(".rating-btn");
const thankYouCard = document.querySelector(".thank-you");
const thankYouText = document.querySelector(".rating-text p");
const form = document.querySelector(".submit-container");
let id;
btns.forEach((btn) => {
	btn.addEventListener("click", function (e) {
		id = e.target.dataset.id;
		btns.forEach((button) => {
			button.classList.remove("orange-bg");
			button.classList.add("hov");
		});
		e.currentTarget.classList.add("orange-bg");
		e.currentTarget.classList.remove("hov");
	});
});
form.addEventListener("submit", function (e) {
	e.preventDefault();
	if (!id) {
		alert("Please select a score, before submitting");
	}
	if (id) {
		thankYouText.textContent = `you selected ${id} out of 5`;
		thankYouCard.classList.remove("hidden");
		reviewCard.classList.add("hidden");
	}
});
