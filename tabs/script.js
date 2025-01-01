document.addEventListener("DOMContentLoaded", function () {
	// Sample object array
	let obj = [
		{ category: "fruits", product: "apple", details: "A sweet, red fruit." },
		{
			category: "fruits",
			product: "banana",
			details: "A yellow fruit that is high in potassium.",
		},
		{
			category: "vegetables",
			product: "carrot",
			details: "A root vegetable that is typically orange.",
		},
		{
			category: "vegetables",
			product: "potato",
			details: "A starchy tuber that is a staple food.",
		},
		{
			category: "snacks",
			product: "chips",
			details: "Crispy, salty snack made from potatoes.",
		},
		{
			category: "snacks",
			product: "cookies",
			details: "A sweet baked treat, often with chocolate chips.",
		},
	];

	// Function to dynamically create cards based on the object data
	function createCards() {
		const container = document.getElementById("container");

		if (!container) {
			console.error("Container element not found!");
			return;
		}

		// Clear any existing cards
		container.innerHTML = "";

		// Loop through the array and create a card for each item
		obj.forEach((item) => {
			const card = document.createElement("div");
			card.classList.add("card");
			card.setAttribute("data-category", item.category);

			card.innerHTML = `
          <h1 class="heading">${item.product}</h1>
          <p>${item.details}</p>
        `;

			container.appendChild(card);
		});
	}

	// Function to filter content based on category
	function filter(category) {
		const cards = document.querySelectorAll(".card");

		// Hide all cards by default
		cards.forEach((card) => {
			card.style.display = "none";
			card.classList.remove("visible"); // Remove the visible class to reset animation
		});

		// If "all" category is selected, show all cards
		if (category === "all") {
			cards.forEach((card) => {
				card.style.display = "block"; // Make the card visible
				setTimeout(() => {
					card.classList.add("visible"); // Trigger the fade-in and slide-in animation
				}, 10); // Small timeout to trigger the transition
			});
			return;
		}

		// Show only the matching cards
		cards.forEach((card) => {
			if (card.getAttribute("data-category") === category) {
				card.style.display = "block"; // Make the card visible
				setTimeout(() => {
					card.classList.add("visible"); // Trigger the fade-in and slide-in animation
				}, 10); // Small timeout to trigger the transition
			}
		});
	}

	// Create the cards when the page loads
	createCards();

	// Automatically show all cards when the page loads
	filter("all");

	// Expose filter function globally for button clicks
	window.filter = filter;
});
