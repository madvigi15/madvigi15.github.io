var main = function () {
    $('#header').hide();
    $('#header').slideDown(1500);
    $('.active-content').hide();
    $('.active-content').fadeIn(1500);
    $('#footer').hide();
};

$(document).ready(main);