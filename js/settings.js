( function( $ ) {

	$('.slideshow_content').cycle({
		slides: '.slide',
		fx: 'scrollHorz',
		timeout: 6000,
		prev: ".slideshow_nav .left",
		next: ".slideshow_nav .right"
	});

	$('.services_slider_content').cycle({
		slides: '.services_slide',
		fx: 'carousel',
		timeout: 6000,
		carouselVisible: 4,
		pager: ".services_slider_nav"
	});

	$('.team_slider_content').cycle({
		slides: '.team_slide',
		fx: 'carousel',
		timeout: 6000,
		carouselVisible: 3,
		pager: ".team_slider_nav"
	});

	$('.carousel').cycle({
		slides: '.carousel_slide',
		fx: 'carousel',
		timeout: 6000,
		carouselFluid: true,
		carouselVisible: 5,
		prev: ".carousel_nav .left",
		next: ".carousel_nav .right"
	});

	$('.foto_slider_content').cycle({
		slides: '.foto_slide',
		fx: 'carousel',
		timeout: 5000,
		carouselFluid: true,
		carouselVisible: 1,
		pager: ".foto_slider_nav"
	});

	$('.brands_slide').cycle({
		fx: 'carousel',
		timeout: 7000,
		carouselVisible: 5,
		prev: ".brands_slider_nav .left",
		next: ".brands_slider_nav .right"
	});

	/*-------- scroll to top --------*/

	$(document).ready(function(){   
		// $(window).scroll(function () {
		// 	if ($(this).scrollTop() > 0) {
		// 		$('#scroller').fadeIn();
		// 	} else {
		// 		$('#scroller').fadeOut();
		// 	}
		// });
		$('#scroll_up').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 2000);
			return false;
		});
	});

/*-------- parallax --------*/

	$(window).bind('load', function () {
	  $('.parallax').each(function() {
			$('.parallax').parallax('50%', 0.4, true);
		});
	});

} )( jQuery );