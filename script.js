$(document).ready(function(){
    var scrollLink = $('.nav-link');

    //smooth srolling
    scrollLink.click(function(e){
        e.PrevenDefault();
        $('body.html').animate({
            scrollTop: $(this.hash.offset().top)
        }, 1000)
    });
    //active link switching
    $(window).scroll(function(){
        var scrollbarLocation = $(this).scrollTop();

        ScrollLink.each(function(){
            var sectionOffset = $(this.hash).offset().top + 50;
            
            if(sectionOffset <= scrollbarLocation){
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }

        })
    })
});