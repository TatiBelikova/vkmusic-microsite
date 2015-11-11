$(document).ready(function(){

 	"use strict";	

 	$(window).load(function() {

 		// Preloader
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');

		

		// Trigger Resize
		$(window).trigger("resize");

	});


	// Video Full Height	    
	$(window).trigger("resize");	
	$(window).resize(function(){
	    
	    container_full_height_init();
	    
	});


	// jQuery Sticky menu
    $(window).scroll(function(){
	    if(window.scrollY > 10){
	        $('.main-nav').addClass("sticky");
	    }else{
	        $('.main-nav').removeClass("sticky");
	    }
	});
	


  




	

	// Wow Animations
	new WOW().init();


	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */

	var submitContact = $('#submit-message'),
		message = $('#msg');

	submitContact.on('click', function(e){
		e.preventDefault();

		var $this = $(this);
		
		$.ajax({
			type: "POST",
			url: 'contact.php',
			dataType: 'json',
			cache: false,
			data: $('#contact-form').serialize(),
			success: function(data) {

				if(data.info !== 'error'){
					$this.parents('form').find('input[type=text],input[type=email],textarea,select').filter(':visible').val('');
					message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				} else {
					message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				}
			}
		});
	});

});



// Container Full Height

function container_full_height_init(){
    (function($){
        $(".container-full-height").height($(window).height());
    })(jQuery);
}