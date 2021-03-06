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
	let lis = sections.children;
	for (let i = 0; i < lis.length; i++) {
		if (lis[i].children[0] === e.target) {	// e.target is anchor
			lis[i].setAttribute("id", "selected");
  		    var target = $(e.target.getAttribute('href'));
	        e.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1500);			
		} else {
	    	lis[i].removeAttribute("id");
		}
	}
});

let contacts = document.querySelectorAll(".contact-icons a");

for (let i = 0; i < contacts.length; i++) {
	contacts[i].addEventListener("mouseenter", () => {
		contacts[i].classList.add("hover");
	});
	contacts[i].addEventListener("mouseleave", () => {
		contacts[i].classList.remove("hover");
	})
}




