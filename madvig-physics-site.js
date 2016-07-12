$(document).ready(function () {
    //$('#header').hide();
    //$('#header').slideDown(1000);
    $('.active-content').hide();
    $('.active-content').fadeIn(1000);
    //$('#footer').hide();
    
    $('.arrow-right').click(function () {
        var currentContent = $('.active-content');
        var nextContent = currentContent.next();
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        
        if (nextContent.length === 0) {
            nextContent = $('.content').first();
            nextDot = $('.dot').first();
        }
        
        currentContent.fadeOut(500).removeClass('active-content');
        nextContent.delay(500).addClass('active-content').fadeIn(500);
        
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });
    
    $('.arrow-left').click(function () {
        var currentContent = $('.active-content');
        var prevContent = currentContent.prev();
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();
        
        if (prevContent.length === 0) {
            prevContent = $('.content').last();
            prevDot = $('.dot').last();
        }
        
        currentContent.fadeOut(500).removeClass('active-content');
        prevContent.delay(500).addClass('active-content').fadeIn(500);
        
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });
});