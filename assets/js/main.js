console.log("Hello World from main.js!");

var $hero = document.querySelector('.hero');
var bgImage = 2;

function changeImage() {
	if (bgImage == 3 ) {
		bgImage = 1;
	}

	$hero.style.opacity = 0.7;
	$hero.style.backgroundImage = "url(assets/img/feature-" + bgImage + "-bg.jpg)";
	console.log($hero.style.backgroundImage)
	$hero.style.opacity = 1;
	bgImage++;
}

setInterval(changeImage, 4000);



