

/*=============================== Table of Content start =======================================*/
/*
    1.  Vegas / Slider section (Vegas)
    2.  Profession section (Slider)
    3.  Passion section (MixItUp)
    4.  Blog section (OWL Carousel)
    5.  Scrol to Top
    6.  WOW
*/
/*=============================== Table of Content end =======================================*/












/*=============================== 1.  Vegas / Slider section (Vegas) start =======================================*/
$(function(){
    $('#vegas').vegas({
        delay:3000,
        slides:[
            {src:'images/vagas/vagas-1.jpg'},
            {src:'images/vagas/vagas-2.jpg'},
            {src:'images/vagas/vagas-3.jpg'},
        ]
    });
});

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


/*----------------------PopUp Part Start--------------*/
$('.btn-About').on('click', function(){
    $('.About, .btn-About').toggleClass('active');

    return false;
});
/*----------------------PopUp Part End--------------*/

/*=============================== Vegas / Slider section (Vegas) end =======================================*/



















/*=============================== 3.  Passion section (MixItUp) start =======================================*/
var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

var mixer = mixitup(containerEl, {
    selectors: {
        target: '[data-ref~="mixitup-target"]'
    }
});
/*=============================== Passion section (MixItUp) end =======================================*/

















/*=============================== 5.  Scrol to Top start =======================================*/

$(document).ready(function(){

    $(function(){

        $(document).on( 'scroll', function(){

            if ($(window).scrollTop() > 100) {
                $('.scroll-top-wrapper').addClass('show');
            } else {
                $('.scroll-top-wrapper').removeClass('show');
            }
        });

        $('.scroll-top-wrapper').on('click', scrollToTop);
    });

    function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
    }

});
/*=============================== Scrol to Top end =======================================*/











/*=============================== 6.  WOW Start =======================================*/
new WOW().init();
/*=============================== WOW End =======================================*/





