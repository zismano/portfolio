let skills = document.querySelectorAll(".skill");

for (let i = 0; i < skills.length; i++) {
	skills[i].addEventListener("mouseenter", () => {
		skills[i].classList.add("hover");
	});
	skills[i].addEventListener("mouseleave", () => {
		skills[i].classList.remove("hover");
	});
}