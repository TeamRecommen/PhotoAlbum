var app = app || {};

(function (scope) {

    // sammy routing
    app.router = Sammy(function () {
        var requester = app.requester.config('kid_Z1d1z2oEJ-', '1796d478bcf54ef8b10abddde51bfc45');
        var selector = $('.main-section');

        var albumViewBag = app.albumViews.load();

        this.get('#/', function () {
            if (!sessionStorage['sessionAuth']) {
                $.get('templates/loginTemplate.html', function (content) {
                    $(selector).html(content);
                });
            } else {
                $.get('templates/homeTemplate.html', function (content) {
                    $(selector).html(content);
                    $('.logout-nav').show();
                });
            }
            scope.changeActiveMenu('home-nav');
        });

        this.get('#/albums', function () {
            albumViewBag.showAlbums();
            scope.changeActiveMenu('albums-nav');
        });

        this.get('#/about', function () {
            $.get('templates/aboutTemplate.html', function (content) {
                $(selector).html(content);
            });
            scope.changeActiveMenu('about-nav');
        });

        //TODO: should be post with param session token
        this.get('#/logout', function () {
            console.log('logout')
        })
    });

    app.router.run('#/');
})(app);

