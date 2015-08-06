$(window).scroll(function() {
	$('#say-hello h1').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideDown");
		}
	});
	$('#bottom-product img').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("fadeIn");
		}
	});
	$('#top-product img').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideUp");
		}
	});
	$('#our-services .pe').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideExpandUp");
		}
	});
	$('#theme-features .box #left').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideRight");
		}
	});
	$('#theme-features #right .top').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideDown");
		}
	});
});
$(document).ready(function(){
  	$('#map').click(function(){
    	$('#map-info').slideToggle("slow");
    })
  	$("#carousel-owl").owlCarousel({
  		items:3
  	});
  	$("#carousel-owl-02").owlCarousel({
  		items:3
  	});
  	$('#search-title').click(function(){
    	$('#search').slideToggle("slow");
    })
    $('#scroll-top').click(function(){
        $('body,html').animate({scrollTop:0},400);
	        return false;
	})
});