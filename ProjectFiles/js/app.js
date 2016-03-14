var app = app || {};

(function (scope) {
    //console.log(scope);

    // sammy routing
    app.router = Sammy(function() {
        var requester = app.requester.config('kid_Z1d1z2oEJ-', '1796d478bcf54ef8b10abddde51bfc45');
        var selector = $('.main-section');

        var albumViewBag =app.albumViews.load();

        this.get('#/', function() {
            $.get('templates/loginTemplate.html', function(content) {
                $(selector).html(content);
            });
        });

        this.get('#/albums', function() {
            albumViewBag.showAlbums()
        });

        this.get('#/about', function() {
            $.get('templates/aboutTemplate.html', function(content) {
                $(selector).html(content);
            });
        });

        this.get('#/login', function() {
        });
    });

    app.router.run('#/');
})(app);

