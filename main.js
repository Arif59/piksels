$(document).ready(function() {
	$(document).on('click', '.fa-bars', function() {
		$('.dim').toggleClass('shown');
		$('.drawer').toggleClass('visible');
		$('.fa-bars').toggleClass('change');
		$('.fa-times').toggleClass('change');
	})

	$(document).on('click', '.dim', function() {
		$('.dim').toggleClass('shown');
		$('.drawer').toggleClass('visible');
		$('.fa-bars').toggleClass('change');
		$('.fa-times').toggleClass('change');
	})

	$(document).on('click', '.featured', function() {
		$('.new').removeClass('selected');
		$('.popular').removeClass('selected');
		$(this).addClass('selected');
	})

	$(document).on('click', '.popular', function() {
		$('.new').removeClass('selected');
		$('.featured').removeClass('selected');
		$(this).addClass('selected');
	})

	$(document).on('click', '.new', function() {
		$('.featured').removeClass('selected');
		$('.popular').removeClass('selected');
		$(this).addClass('selected');
	})

	$(document).on('click', '.search', function() {
		$('.featured').toggleClass('animated-fade');
		$('.popular').toggleClass('animated-fade');
		$('.new').toggleClass('animated-fade');
		$('.search').toggleClass('move');
		$('.search-bar').toggleClass('shown');
		$('.search-bar').focus();
	})

})

$(window).on('load', function() {
	$('.load-bar').fadeOut(100);
	$('.login-actions').removeClass('animated-left');
	$('header').removeClass('animated-fade');
	$('.tabs-wrap').removeClass('animated-fade');
	$('.tabs-wrap').removeClass('animated-top');
	$('.categories').removeClass('animated-right');
	$('.fa-bars').removeClass('animated-right');
	$('.logo').removeClass('animated-right');
	$('.header-bg').removeClass('animated-fade');
	$('header').removeClass('animated-scale');
	$('.header-bg').removeClass('animated-scale').delay(500).queue(function(){
		$('html').css('overflow-y', 'visible').dequeue();
	});
})
