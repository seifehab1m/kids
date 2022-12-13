/// <reference path="../typings/globals/jquery/index.d.ts" />

let zoom = document.getElementsByClassName('zoom');
let imageSelected = document.getElementsByClassName('imageSelected');
let close = document.getElementsByClassName('close');
let confirmPayment = document.getElementsByClassName('confirmPayment');
let iconSearch = document.getElementsByClassName('bg-icon-search');
let searchbar = document.getElementsByClassName('searchbar');
let subVal = document.getElementsByClassName('subVal');
let addVal = document.getElementsByClassName('addVal');
let counterValue = document.getElementsByClassName('counterValue');
let value, index;
let toggleBar = "close"


iconSearch[0]?.addEventListener("click", function () {
  if (toggleBar == "close") {
    searchbar[0].style.cssText = "display:flex"
    toggleBar = "open"
  }
  else {
    searchbar[0].style.cssText = "display:none"
    toggleBar = "close"
  }
})

zoom[0]?.addEventListener("click", function () {
  imageSelected[0].style.cssText = "display:flex !important"
})



close[0]?.addEventListener("click", function () {
  imageSelected[0].style.cssText = "display:none !important"
})


confirmPayment[0]?.addEventListener("click", function () {
  imageSelected[0].style.cssText = "display:flex !important"

})

for (i = 0; i < addVal.length; i++) {

  addVal[i]?.addEventListener("click", function (e) {

   index = getIndex(e,addVal);
   value = counterValue[index].innerHTML;
   value = parseInt(value)
   value += 1;
   counterValue[index].innerHTML = value + ""

  })
}

for (i = 0; i < addVal.length; i++) {

  subVal[i]?.addEventListener("click", function (e) {

   index = getIndex(e,subVal);
   value = counterValue[index].innerHTML;
   value = parseInt(value)
   if(value!=1)
   {
    value -= 1;
   }
   counterValue[index].innerHTML = value + ""
  })
}
function getIndex(e,array) {

  console.log(addVal);
  return Array.from(array).indexOf(e.target);
}


// swiper in parent says section
var swiper = new Swiper(".parentSlides", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    520: {
      slidesPerView: 2
    },
    900:
    {
      slidesPerView: 3
    }
  }
});


var swiper = new Swiper(".staffSlides", {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    600: {
      slidesPerView: 2
    },
    900: {
      slidesPerView: 3
    },
    1366: {
      slidesPerView: 4
    },
  }
});


var rangeOne = document.querySelector('input[name="rangeOne"]'),
		rangeTwo = document.querySelector('input[name="rangeTwo"]'),
		outputOne = document.querySelector('.outputOne'),
		outputTwo = document.querySelector('.outputTwo'),
		inclRange = document.querySelector('.incl-range'),
		updateView = function () {
			if (this.getAttribute('name') === 'rangeOne') {
				outputOne.innerHTML = this.value;
				outputOne.style.left = this.value / this.getAttribute('max') * 100 + '%';
			} else {
				outputTwo.style.left = this.value / this.getAttribute('max') * 100 + '%';
				outputTwo.innerHTML = this.value
			}
			if (parseInt(rangeOne.value) > parseInt(rangeTwo.value)) {
				inclRange.style.width = (rangeOne.value - rangeTwo.value) / this.getAttribute('max') * 100 + '%';
				inclRange.style.left = rangeTwo.value / this.getAttribute('max') * 100 + '%';
			} else {
				inclRange.style.width = (rangeTwo.value - rangeOne.value) / this.getAttribute('max') * 100 + '%';
				inclRange.style.left = rangeOne.value / this.getAttribute('max') * 100 + '%';
			}
		};

	document.addEventListener('DOMContentLoaded', function () {
		updateView.call(rangeOne);
		updateView.call(rangeTwo);
		$('input[type="range"]').on('mouseup', function() {
			this.blur();
		}).on('mousedown input', function () {
			updateView.call(this);
		});
	});