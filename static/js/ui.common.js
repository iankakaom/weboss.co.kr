$(function() {
	var wSrcoll = $(window).scrollTop();
	var $hass = $('#hass').offset().top - 118;
	
	if(wSrcoll > $hass) {
		$('#header').addClass('on');
	}

	$(window).on('scroll', function() {
		if( $(window).scrollTop() > $hass ){
			$('#header').addClass('on');
		}
		else {
			$('#header').removeClass('on');
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
	
	$('.main-visual .block a').on('click', function(e){
		e.preventDefault();
		var $to = $(this).index();
		mainVisual.slideToLoop($to, 300);
		
		console.log($to)
	})
});