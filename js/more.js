$(document).ready(function(){
var FixMenu = $("#sticky-menu");
    $(window).scroll(function(){
        if($(this).scrollTop()>50){
        	FixMenu.addClass("sticky-menu");
        }
        else{
        	FixMenu.removeClass("sticky-menu");
        }
    })
});
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

	$('#client #row-right .row').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("expandOpen");
		}
	});

	$('#new-update #top-left').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideLeft");
		}
	});

	$('#new-update #top-right').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideRight");
		}
	});

	$('#new-update #bottom-left').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideDown");
		}
	});

	$('#new-update #bottom-right').each(function(){
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
    });

  	$("#carousel-owl").owlCarousel({
  		items:3,
  		itemsTablet: [768,2]
  	});

  	$("#carousel-owl-02").owlCarousel({
  		items:3,
  		itemsTablet: [768,2]
  	});

  	$("#carousel-owl-03").owlCarousel({
  		items:1,
  		autoPlay: 3000,
  		itemsTablet: [768,1],
  		itemsMobile: [479,1]
  	});
  	$("#carousel-owl-04").owlCarousel({
  		items:3,
  		autoPlay: 3000
  	});
  	$("#carousel-owl-05").owlCarousel({
  		items:3,
  		autoPlay: 3000
  	});

  	$('#search-title').click(function(){
    	$('#search').slideToggle("slow");
    });

    $('#scroll-top').click(function(){
        $('body,html').animate({scrollTop:0},400);
	        return false;
	});

	$('#data #lines').counterUp({
		delay: 10, // the delay time in ms
		time: 1000, // the speed time in ms
	});

	$('#Carousel .item a').click(function(e){
        $('html, body').animate({
        	scrollTop: $(this.hash).offset().top -($('#menu-extra').height()+30)}, 1000);
        	e.preventDefault();
    });
});