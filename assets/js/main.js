console.log("Hello World from main.js!");



var currentSlide = -1;

var imageData = [

	{
		filename:"assets/img/feature-1-bg.jpg",
		title:"donut1",
		description:"pink donuts"
	},

	{
		filename:"assets/img/feature-2-bg.jpg",
		title:"donut2",
		description:"5 donuts"
	},
			
];

var $slideshow = document.querySelector("#hero__slideshow");

var makeSlide = function(){

	var $slide = document.createElement("img");
	$slide.setAttribute("src", imageData[currentSlide].filename);
	$slideshow.appendChild($slide);
}	

var removeSlide = function(){
	
	while ($slideshow.children.length) {
		$slideshow.removeChild($slideshow.children[0]);
	}
}


var advancedSlideshow = function(){
	removeSlide();
	currentSlide++;

	if (currentSlide > 2) {
		currentSlide = 0;
	}

	makeSlide();
}

setInterval(advancedSlideshow, 2000);



