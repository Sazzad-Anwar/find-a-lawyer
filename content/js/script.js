/**
 * Created by Royex Technologies on 7/8/2020.
 */

var $window = $(window),
    $body = $('body'),
    container = $('.body-width'),
    fullWidth = $body.outerWidth(),
    containerWidth = container.outerWidth(),
    containerGutter = (fullWidth-containerWidth)/2 + 15;


/*============================
 utilities
 ============================*/
if($('.container-right--js').length>0){
    $('.container-right--js').css({
        'margin-right':containerGutter
    });
}

$(window).scroll(function () {
    if($(window).scrollTop()>0){
        // $('.header').addClass('sticked');
    }else{
        // $('.header').removeClass('sticked');
    }
});


// var swiper = new Swiper('.slide-inner');
var swiper = new Swiper('.slide-inner', {
    speed: 700,
    spaceBetween: 30,
    // autoplay:true,
    resistanceRatio : 0.65,
    // loop:true,
    watchSlidesProgress:true,
    watchSlidesVisibility:true,
    // effect:'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
        type: 'bullets'
    },
    on: {
        init: function (swiper) {
            // console.log('initiated');
            // $('.slide-content').show();
        },
        slideChange: function(swiper){
            // var slider = $( swiper.slides[ swiper.activeIndex ] );
            // slider.find('.slide-content').show('slow');
        },
        transitionStart: function(swiper){
            // console.log('transition started');
            // $('.slide-content').hide();
        },
        transitionEnd: function (swiper) {
            // $('.slide-content').hide('slow');
        }
    }
});

if($('.screens-slider').length){
    var swiperScreens = new Swiper('.screens-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        watchSlidesProgress:true,
        watchSlidesVisibility:true,
        speed:500,
        navigation: {
            nextEl: '.screens-slider-holder .swiper-button-next',
            prevEl: '.screens-slider-holder .swiper-button-prev'
        },
        breakpoints:{
            570:{
                slidesPerView: 2,
                spaceBetween: 10
            },
            768:{
                slidesPerView: 2,
                spaceBetween: 20
            },
            992:{
                slidesPerView:4,
                spaceBetween:20
            }
        }
    });
}


// accordion
if($('.accordion-container').length>0){

    new Accordion('.accordion-container',{
        closeOthers:false
    });
}

// resources sidebar
$('.show-list').click(function () {
    $(this).closest('.resources-sidebar').find('.sidebar-menu').toggle();
});

// initialiizing wow
//initializing [wow.js]

var wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
);
wow.init();

//initializing [wow.js]

function createBodyLayer(){
    $('body').append("<div class='body-layer-menu'></div>");
}
function removeBodyLayer(){
    setTimeout(function () {
        $('.body-layer-menu').remove();
    },250);

}

function slickNavInit(menu_element){
    $(menu_element).slicknav({
        'duration':0,
        closedSymbol: '&plus;',
        openedSymbol:'&minus;',
        // 'beforeOpen': function () {
        //     createBodyLayer();
        //     $('body').addClass('nav-opened');
        // },
        // 'afterClose':function (){
        //     $('body').removeClass('nav-opened');
        // }
    });
}
slickNavInit($('#navbarNav'));

$('.navbar-toggler').click(function () {
    createBodyLayer();
    $('body').addClass('nav-opened');
    $('#navbarNav').slicknav('toggle');
});
$(document).on('click','.body-layer-menu',function () {
    $('#navbarNav').slicknav('close');
    removeBodyLayer();
    $('body').removeClass('nav-opened');
});

$(function () {
    var htmlWidth = $('body').width();
    var containerWidth = $('.container').width();
    var rightArea = htmlWidth - containerWidth;
    rightArea = rightArea/2;
    if($('.swiper-pagination').length>0){
        // $('.swiper-pagination').css('right',rightArea);
    }

    if($('.field-div').length>0){
        $('.field-div .form-control').focus(function () {
            var self = $(this);
            self.prev().css('top','-10px')
        })

        $('.field-div .form-control').blur(function () {
            var self = $(this);
            if(self.val()==''){
                self.prev().css('top','5px')
            }

        })
    }

    if($('.scroll-down').length>0){
        $('.scroll-down').click(function () {
            var self = $(this),
                scrollDownArea = self.closest('.banner').next().offset().top - 50;
            console.log(scrollDownArea);
            $("html, body").animate({scrollTop: scrollDownArea},1000 );
        });
    }

    if($('.page-content').length>0){
        $('.page-content').css('margin-top',$('.header').height()+"px");
    }

    $('.accordion-btn').click(function () {
        var self = $(this);
        self.closest('.custom-accordion').find('.content-extra').slideToggle('slow');
        self.closest('.custom-accordion').toggleClass('showed');
    });

    $('.form-area .form-control').focus(function () {
        var self = $(this);
        self.prev().css({
            'top':'2px',
            'color':'#202020'
        });
    });

    $('.form-area .form-control').blur(function () {
        var self = $(this);
        if(self.val()==''){
            self.prev().css({
                'top':'15px',
                'color':'#838383'
            });
        }

    });

    // $('.sidebar-menu').slicknav({
    //     'prependTo':'.resources-sidebar-inner',
    //     'duplicate':false
    // });

    $('.slick-item.has-submenu').click(function () {
        var self = $(this);
        self.next().slideToggle('slow');
        self.toggleClass('opened');
        self.next().toggleClass('showed');
    });

    //checkbox
    $('.checkbox-wrapper input[type=checkbox]').each(function () {
        var self = $(this);
        if(self.prop('checked')==true){
            self.closest('.checkbox-wrapper').addClass('checked');
        }else{
            self.closest('.checkbox-wrapper').removeClass('checked');
        }
    });

    $('.checkbox-wrapper input[type=checkbox]').change(function () {
        var self = $(this);
        if(self.prop('checked')==true){
            self.closest('.checkbox-wrapper').addClass('checked');
        }else{
            self.closest('.checkbox-wrapper').removeClass('checked');
        }
    });




});









