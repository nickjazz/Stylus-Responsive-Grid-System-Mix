$( document ).ready(function() {
   if ($('#home-slider').length > 0) {

        $('.slider-item').first().show();

        $('.banner-item').click(function(e) {

        	e.preventDefault()

        	var selectID = $(this).data('slider');

        	$('#' + selectID ).show().siblings('.slider-item').hide();

        });
   }
});