$(document).ready(function() {
	$('.icon').click(function() {
		$('.container').toggleClass('active');
	});

	$('.conv-form-wrapper').convform({selectInputStyle: 'disable'})
});
