(function ($, window, document, undefined) {
    'use strict';

    $(document).ready(function () {
        $('.banner.slick-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1500,
            autoplaySpeed: 4000,
            arrows: false,
            variableWidth: true,
            centerMode: true
        });
        $('.skills .slick-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1500,
            autoplaySpeed: 4000,
            arrows: false,
            centerMode: true
        });
    });

    $('img').on('load resize', function () {
        $('.portfolio .item').each(function () {
            var width = $(this).width()*0.75;
            $(this).height(width);

        });
        $('.portfolio-images').isotope({
            // options
            itemSelector: '.item',
            layoutMode: 'masonry'
        });
    });




        $('.skills-item').circleProgress({
            size: 182,
            emptyFill: 'rgba(255,255,255,0)',
            thickness: 15,
            lineCap: 'round',
            reverse: false,
            startAngle: -Math.PI / 4 * 2,
            fill: {
                color: "rgba(255,255,255,.45)"
            }
        }).on('circle-animation-progress', function (event, progress) {
            var self = $(this);
            self.find('strong').html(parseInt((self.attr('data-value') * 100) * progress) + '<i>%</i>');
        });

    $(document).ready(function () {
        $(".portfolio-images").lightGallery();
    });

    $(window).on('load', function(){
        $('.preloader').fadeOut(800);
        setTimeout(function(){
            $(window).resize();
        }, 10);
    });
    
    $(window).on('load scroll', function(){
        if ($('.sofa').length) {
			$('.sofa').not('.animated').each(function(){
				if($(window).scrollTop() >= $(this).offset().top - $(window).height()*0.8) {
					$(this).addClass('animated fadeInUp');
				}
			});
		}
    });

    $('.mob-but').on('click', function () {
        $(this).toggleClass('active');
        $('header .menu').toggleClass('active');
    });

    $(document).on('click', '.menu a', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 500);
        $('.mob-but').toggleClass('active');
        $('header .menu').toggleClass('active');

    });

})(jQuery, window, document);
