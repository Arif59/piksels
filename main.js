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

})