let sign = document.querySelector("#sign");
let gate = document.querySelector("#gate");

sign.addEventListener("mouseenter", function () {
	gate.style.opacity = 1;
});

sign.addEventListener("mouseleave", function () {
	gate.style.opacity = 0;
});

let clickCount = 0;
sign.addEventListener("click", function () {
	clickCount = clickCount + 1;
	if (clickCount % 2 === 0) {
		sign.innerHTML = "";
	} else {
		sign.innerHTML = '<img src="bull.gif">';
	}
});
