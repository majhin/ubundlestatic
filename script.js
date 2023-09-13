document.addEventListener("DOMContentLoaded", function () {
	var navbar = document.getElementById("navbar");

	// Select all elements with class "text-white"
	var textWhiteElements = document.querySelectorAll(".text-white");

	window.addEventListener("scroll", function () {
		if (window.scrollY >= 40) {
			navbar.classList.add("bg-white");
			navbar.classList.remove("bg-transparent");
			navbar.classList.remove("mt-4");
			// Loop through and change the text color to black for all elements with class "text-white"
			textWhiteElements.forEach(function (element) {
				element.classList.remove("text-white");
				element.classList.add("text-black");
			});
		} else {
			navbar.classList.add("bg-transparent");
			navbar.classList.add("mt-4");
			navbar.classList.remove("bg-white");

			// Revert the text color to white for all elements with class "text-black"
			textWhiteElements.forEach(function (element) {
				element.classList.remove("text-black");
				element.classList.add("text-white");
			});
		}
	});
});
