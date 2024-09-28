const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}








let navhome = document.querySelector('.navhome');

navhome.addEventListener("mouseover",function(){

    document.querySelector(".bar1").style.width="33.7px";
    document.querySelector(".bar1").style.border="1.9px solid #c89666";
});
navhome.addEventListener("mouseout",function(){

    document.querySelector(".bar1").style.width="0px";
    setTimeout(function(){
        document.querySelector(".bar1").style.border="1.9px solid #12343b";  
    },360)
   
});

let navmen = document.querySelector('.navmen');

navmen.addEventListener("mouseover",function(){

    document.querySelector(".bar2").style.width="25px";
    document.querySelector(".bar2").style.border="1.9px solid #c89666";
});
navmen.addEventListener("mouseout",function(){

    document.querySelector(".bar2").style.width="0px";
    setTimeout(function(){
        document.querySelector(".bar2").style.border="1.9px solid #12343b";  
    },360)
   
});

let navwomen = document.querySelector('.navwomen');

navwomen.addEventListener("mouseover",function(){

    document.querySelector(".bar3").style.width="43px";
    document.querySelector(".bar3").style.border="1.9px solid #c89666";
});
navwomen.addEventListener("mouseout",function(){

    document.querySelector(".bar3").style.width="0px";          
    setTimeout(function(){
        document.querySelector(".bar3").style.border="1.9px solid #12343b";  
    },360)
   
});

let navbeauty = document.querySelector('.navbeauty');

navbeauty.addEventListener("mouseover",function(){

    document.querySelector(".bar4").style.width="41px";
    document.querySelector(".bar4").style.border="1.9px solid #c89666";
});
navbeauty.addEventListener("mouseout",function(){

    document.querySelector(".bar4").style.width="0px";
    document.querySelector(".bar4").style.color="#c89666";
    setTimeout(function(){
        document.querySelector(".bar4").style.border="1.9px solid #12343b";  
    },360)
   
});

let navsport = document.querySelector('.navsport')
navsport.addEventListener("mouseover",function(){

    document.querySelector(".bar5").style.width="33.7px";
    document.querySelector(".bar5").style.border="1.9px solid black";
});





