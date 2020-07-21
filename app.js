const track = document.querySelector(".carousel__track");
const slide = Array.from(track.children);
const ham = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slide[0].getBoundingClientRect().width;

//arrange the slide next to one another
const setSlidePosition = (slide, index) => {
	slide.style.left = slideWidth * index + "px";
};
slide.forEach(setSlidePosition);

// show and hide menu
function showHide() {
	nav.classList.toggle("open-nav");
}

const moveToSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = "translateX(-" + targetSlide.style.left + ")";
	currentSlide.classList.remove("current_Slide");
	targetSlide.classList.add("current_Slide");
};

const updateDots = (currentDot, targetDot) => {
	currentDot.classList.remove("current-slide");
	targetDot.classList.add("current-slide");
};

// const arrowHide = (slide, targetIndex, prevButton, nextButton) => {
// 	if (targetIndex === 0) {
// 		prevButton.classList.add("is-hidden");
// 		nextButton.classList.remove("is-hidden");
// 	} else if (targetIndex === slide.length - 1) {
// 		nextButton.classList.add("is-hidden");
// 		prevButton.classList.remove("is-hidden");
// 	} else {
// 		nextButton.classList.remove("is-hidden");
// 		prevButton.classList.remove("is-hidden");
// 	}
// };

//right button functioning
// nextButton.addEventListener("click", e => {
// 	const currentSlide = track.querySelector(".current_Slide");
// 	const nextSlide = currentSlide.nextElementSibling;
// 	const currentDot = dotsNav.querySelector(".current-slide");
// 	const targetDot = currentDot.nextElementSibling;
// 	const nextIndex = slide.findIndex(slides => slides === nextSlide);

// 	moveToSlide(track, currentSlide, nextSlide);
// 	updateDots(currentDot, targetDot);
// 	arrowHide(slide, nextIndex, prevButton, nextButton);
// });

//left button functioning
// prevButton.addEventListener("click", e => {
// 	const currentSlide = track.querySelector(".current_Slide");
// 	const prevSlide = currentSlide.previousElementSibling;
// 	const currentDot = dotsNav.querySelector(".current-slide");
// 	const targetDot = currentDot.previousElementSibling;
// 	const prevIndex = slide.findIndex(slides => slides === prevSlide);

// 	moveToSlide(track, currentSlide, prevSlide);
// 	updateDots(currentDot, targetDot);
// 	arrowHide(slide, prevIndex, prevButton, nextButton);
// });

//dot navigation functioning
dotsNav.addEventListener("click", e => {
	const targetDot = e.target.closest("button");
	if (!targetDot) return;

	const currentSlide = track.querySelector(".current_Slide");
	const currentDot = dotsNav.querySelector(".current-slide");
	const targetIndex = dots.findIndex(dot => dot === targetDot);
	const targetSlide = slide[targetIndex];

	moveToSlide(track, currentSlide, targetSlide);
	updateDots(currentDot, targetDot);
	showHide();
	// arrowHide(slide, targetIndex, prevButton, nextButton);
});

// another js

ham.addEventListener("click", showHide);
