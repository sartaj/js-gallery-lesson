
$('.filter-button').on('click', function(e) {

	var button = $(this).attr('id');

	if ( $(this).hasClass('active')) {

		hideTheseImages(button);
		$(this).removeClass('active');

	} else {

		showTheseImages(button);
		$(this).addClass('active');

	}

});

function hideTheseImages(imageClass) {
	$('.' + imageClass).fadeOut();
}

function showTheseImages(imageClass) {
	$('.' + imageClass).fadeIn();
}
