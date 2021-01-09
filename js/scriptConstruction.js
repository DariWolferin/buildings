new Swiper('.main-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	grabCursor: true,

	autoplay: true,

	effect: 'fade',
	fadeEffect: {
	   crossFade: true
	},

	loop: true,

});

new Swiper('.gallery-projects_swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	grabCursor: true,

	autoplay: true,

	updateOnWindowResize: true,

	setWrapperSize: true,

	autoHeight: true,

	loop: true,

	scrollbar: {
    el: '.swiper-gallery-scrollbar',
    draggable: true,
    snapOnRelease: false,
  },

});

(() => {
      window.onload = () => {
        let header__burger = document.querySelector('.header__burger');
        let header__menu = document.querySelector('.header__menu');
        let body = document.querySelector('body');
        header__burger.addEventListener('click', (e)=> {
          header__burger.classList.toggle('active');
          header__menu.classList.toggle('active');
          body.classList.toggle('lock');
        })
      }
    })();