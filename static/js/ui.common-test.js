$(function() {
	var wSrcoll = $(window).scrollTop();
	var $hass = $('#hass').offset().top - 120;
	var $connector = $('#connector').offset().top - 120;
	var $business = $('#business').offset().top - 120;
	var $company = $('#company').offset().top - 120;
	var $cooperator = $('#cooperator').offset().top - 120;
	var $cooperator2 = $('#cooperator').offset().top + 100;
	
	
	console.log($cooperator)
	console.log($cooperator2)
	
	if(wSrcoll > $hass) {
		$('#header').addClass('on');
	}

	$(window).on('scroll', function() {
		
		wSrcoll = $(window).scrollTop();
		console.log(wSrcoll)
		
		
		if( $(window).scrollTop() < $hass && $(window).scrollTop() > 0 ){
			$('#header').addClass('on');
			$('#gnb li').removeClass('off')
		}
		
		if( $(window).scrollTop() > $hass && $(window).scrollTop() < $connector ){
			$('#header').addClass('on');
			$('#gnb li').addClass('off').eq(0).removeClass('off')
		}
		
		if( $(window).scrollTop() > $connector && $(window).scrollTop() < $business ){
			$('#header').addClass('on');
			$('#gnb li').addClass('off').eq(1).removeClass('off')
		}
		
		if( $(window).scrollTop() > $business && $(window).scrollTop() < $company ){
			$('#header').addClass('on');
			$('#gnb li').addClass('off').eq(2).removeClass('off')
		}
		
		if( $(window).scrollTop() > $company && $(window).scrollTop() < $cooperator ){
			$('#header').addClass('on');
			$('#gnb li').addClass('off').eq(3).removeClass('off')
		}
		
		if( $(window).scrollTop() > $cooperator){
			
			$('#header').addClass('on');
			$('#gnb li').addClass('off').eq(4).removeClass('off')
		}
	});

	$('#gnb a').on('click', function(e){
		e.preventDefault();
		var $top = $(this.hash).position().top;
		$('html, body').animate({scrollTop : $top - 118 }, 150);
	});
	
	$('.logo a').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop : 0 }, 150);
	});

	
	var mainVisual = new Swiper(".main-visual", {
		speed : 300,
		loop: true,
		effect: "fade",
		autoplay: {
			delay : 4000,
			disableOnInteraction : false,
		},
		on: {
			init: function () {
				$('.main-visual .block a').eq(0).addClass('on').siblings('a').removeClass('on');
			},
			slideChange: function () {
				var $index = mainVisual.realIndex;
				$('.main-visual .block a').eq($index).addClass('on').siblings('a').removeClass('on');
			},
		},
	});
	
	$('.main-visual .block a').on('click', function(){
		var $to = $(this).index()
		mainVisual.slideTo($to, 300)
	})
});