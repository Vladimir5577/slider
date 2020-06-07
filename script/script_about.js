// document.write("Hello World");

/*#### Slider ###################################*/

var slides = document.querySelectorAll(".slide");
var prev_btn = document.querySelector(".prev_btn");
var next_btn = document.querySelector(".next_btn");

slides.forEach(function (move, index) {
	move.style.left = `${index * 100}%`;
});

var counter = 0;
carousel();
prev_btn.addEventListener("click", function () {
	counter--;
	prev_btn.style.color = "red";
	carousel();
});

next_btn.addEventListener("click", function () {
	counter++;
	next_btn.style.color = "green";
	carousel();
});

function carousel() {

	if (counter > 0) {
		prev_btn.style.display = "block";
	} else {
		prev_btn.style.display = "none";
	}

	if (counter < slides.length - 1) {
		next_btn.style.display = "block";
	} else {
		next_btn.style.display = "none";
	}

	slides.forEach(function (move_slide) {
		move_slide.style.transform = "translateX(-" + counter * 100 + "%)";
	});
}

/*### Tab ###################################*/

var tab_container = document.querySelector(".tab_container");
var tab_btn = document.querySelectorAll(".tab_btn");
var tab_about = document.querySelectorAll(".tab_about");

tab_container.addEventListener("click", function (event) {
	const id = event.target.dataset.id;
	console.log(id);

	if (id) {
		// remove active from other button
		tab_btn.forEach(function (btn) {
			btn.classList.remove("active");
			event.target.classList.add("active");
		});

		// hide other articles 

		tab_about.forEach(function (tab) {
			tab.classList.remove("active");
		});
		
		const tab_show = document.getElementById(id);
		tab_show.classList.add("active");
	}
});

/*### Title ###################################*/

var title = document.getElementById("title");

title.addEventListener("mouseover", function () {
	title.innerHTML = "Whatever you want";
});

title.addEventListener("mouseout", function () {
	title.innerHTML = "Really Proffessional";
});