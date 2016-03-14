var app = app || {};

(function (scope) {

    scope.changeActiveMenu = function (newActive) {
        var currentActive = $('.active-nav').toggleClass('active-nav');
        $('.' + newActive).toggleClass('active-nav');
    }

})(app);