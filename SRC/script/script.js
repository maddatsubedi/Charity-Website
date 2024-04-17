// Selecting DOM elements
let menu = document.querySelector('#menu-icon-js');
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navtc = document.querySelector('#nav-tc-js');

// Toggle navbar menu on menu icon click
menu.onclick = () => {
	// console.log("Hello")
	menuicon.classList.toggle('bx-x');
	navbar.classList.toggle('open');
	navtc.classList.toggle("nav-touch-close-open");
}

// Close navbar menu on navigation touch close button click
navtc.onclick = () => {
	menuicon.classList.toggle('bx-x');
	navbar.classList.remove('open');
	navtc.classList.remove('nav-touch-close-open');
	navtc.classList.remove("nav-tc-z");
	navtc.classList.remove("nav-LR-TC");
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;

	document.getElementById("header").classList.add('scrolled');
	if (currentScrollPos === 0) {
		// console.log("Hello");
		document.getElementById("header").classList.remove('scrolled');
	}
	if (navtc.classList.contains('nav-touch-close-open')) {
		return;
	}
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("header").style.top = "0";
	} else {
		document.getElementById("header").style.top = "-100px";
	}
	prevScrollpos = currentScrollPos;
}

// Image slider functionality
let slideIndex = 0;
const slidesLength = document.getElementsByClassName("slide").length;
const dotsLength = document.getElementsByClassName("dot").length;

// Showing slides if elements exist
if (slidesLength && dotsLength) {
	showSlides(slideIndex);
}

// Function to move to next slide
function nextSlide() {
	showSlides(slideIndex += 1);
}

// Function to move to previous slide
function prevSlide() {
	showSlides(slideIndex -= 1);
}

// Function to move to a specific slide
function currentSlide(n) {
	showSlides(slideIndex = n);
}

// Function to show slides
function showSlides() {
	const slides = document.getElementsByClassName("slide");
	const dots = document.getElementsByClassName("dot");

	if (slideIndex >= slides.length) {
		slideIndex = 0;
	}

	if (slideIndex < 0) {
		slideIndex = slides.length - 1;
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
		slides[i].classList.remove("active");
	}

	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active");
	}

	slides[slideIndex].classList.add('active');
	dots[slideIndex].className += " active";
}

// Auto slide
if (slidesLength && dotsLength) {
	setInterval(() => {
		nextSlide();
	}, 5000);
}