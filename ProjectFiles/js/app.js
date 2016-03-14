var app = app || {};

(function (scope) {
    //console.log(scope);

    // sammy routing
    app.router = Sammy(function() {
        var requester = app.requester.config('kid_Z1d1z2oEJ-', '1796d478bcf54ef8b10abddde51bfc45'),
            selector = $('.main-section'),

            albumsModel = app.albumsModel.load(),

            albumViewBag =app.albumViews.load();



        this.get('#/', function() {
            $.get('templates/homeTemplate.html', function(content) {
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

