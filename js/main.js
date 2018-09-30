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
        console.log('navbar jest zdefiniowany')
        $(window).on("scroll load resize", function(){
            console.log('navbar sie slizga');
            checkScroll();
        });
    }
});