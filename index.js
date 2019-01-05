$(".arrow").click(function() {
    $('html,body').animate({
	    scrollTop: $(".primary-content").offset().top},
	    'slow');
})