function ensureFilter() {
	var queryParams = new URLSearchParams(document.location.search);
	var selectedTopic = queryParams.get("topic");
	if (!selectedTopic) return;
	filterContent(selectedTopic, "main section .card", "data-topic", () => {
		setFilterLabel(selectedTopic);
		setHeights();
		scrollTo(".filter", 1);
	});
}

function filterContent(selectedTopic, selector, attribute, callback) {
	// find all element candidates matching the provided selector
	var all = document.querySelectorAll(selector);

	// find the cards that do not match the selected topic
	var filter = Array.from(all).filter(
		(card) => card.getAttribute(attribute) !== selectedTopic,
	);

	// hide all the cards
	filter.forEach((card) => (card.style.display = "none"));

	// execute the callback if provided
	if (callback && typeof callback === "function") {
		callback();
	}
}

function setFilterLabel(selectedTopic) {
	if (!selectedTopic) return;

	var filterTopicLabel = document.getElementById("filterTopic");
	var filterIdleLabel = document.getElementById("filterIdle");
	var filterBusyLabel = document.getElementById("filterBusy");

	// set the content of filterTopic to the selectedTopic string
	filterTopicLabel.innerHTML = selectedTopic;

	// remove the active class from filterIdleLabel
	filterIdleLabel.classList.remove("active");

	// add the active class to the filterBusyLabel
	filterBusyLabel.classList.add("active");
}

function scrollTo(targetElement, offset) {
	// scroll to the target element + or - the provided offset in pixels
	document.querySelector(targetElement).scrollIntoView({
		behavior: "smooth",
		block: "start",
		inline: "nearest",
		offsetTop: offset || 0,
	});
}

function setHeights() {
	// obtain all sections within the aside.
	var asideSections = document.querySelectorAll("aside section");

	// obtain all sections within the main.
	var mainSections = document.querySelectorAll("main section");

	// for each aside section, set its height to the corresponding main section (using index)
	for (var i = 0; i < asideSections.length; i++) {
		var offsetForFilter = i === 0 ? 50 : 0;
		asideSections[i].style.height =
			mainSections[i].offsetHeight + offsetForFilter + "px";
	}
}

// on document ready
document.addEventListener("DOMContentLoaded", function () {
	console.log("loaded trailmap, filtering and setting height");
	window.addEventListener("resize", () => setHeights());
	ensureFilter();
	setHeights();
});