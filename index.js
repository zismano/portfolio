let skills = document.querySelectorAll(".skill");

for (let i = 0; i < skills.length; i++) {
	skills[i].addEventListener("mouseenter", () => {
		skills[i].classList.add("hover");
	});
	skills[i].addEventListener("mouseleave", () => {
		skills[i].classList.remove("hover");
	});
}

let sections = document.querySelector("#sections");

sections.addEventListener("click", (e) => {
	console.log(e.target)
	let lis = sections.children;
	for (let i = 0; i < lis.length; i++) {
		if (lis[i].children[0] === e.target) {	// e.target is anchor
			lis[i].setAttribute("id", "selected");
		} else {
	    	lis[i].removeAttribute("id");
		}
	}
})
