const btn = document.getElementById("btn");
const card = document.getElementById("card");
const cancel_btn = document.querySelector(".cancel_btn");

btn.addEventListener("click", () => {
	card.style.display = "block";
});
cancel_btn.addEventListener("click", () => {
	card.style.display = "none";
});
