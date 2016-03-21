define([], function(){
    return (function () {
        return {
            changeActiveMenu: function (newActive) {
                var currentActive = $('.active-nav').toggleClass('active-nav');
                $('.' + newActive).toggleClass('active-nav');
            },
            showHideLogout: function () {
                if (sessionStorage['sessionAuth']) {
                    $('.logout-nav').show();
                } else {
                    $('.logout-nav').hide();
                }
            }
        };
    })();
});