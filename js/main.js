$(function() {
    function checkScroll(){
        var startY = $('.navbar').height() * 2;
    
        if($(window).scrollTop() > startY){
            $('.navbar').addClass("scrolled");
        }else{
            $('.navbar').removeClass("scrolled");
        }
    }
    
    if($('.navbar').length > 0){
        $(window).on("scroll load resize", function(){
            checkScroll();
        });
    }

    //scroll spy activation
    $('body').scrollspy({ target: '#main-navbar' });

    //smooth scroll
    $('#main-navbar a, .footer__main--links a').on('click', (e) => {
        if( e.currentTarget.hash !== "" ) {
            e.preventDefault();
            const hash = e.currentTarget.hash;
            scrollMe(hash);           
        }
    });

    //scroll top
    $('.footer__head--goUp').on('click', () => {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    //scroll mechanism
    function scrollMe(hash) {
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 600, () => {
            window.location.hash = hash;
        });
    }
});