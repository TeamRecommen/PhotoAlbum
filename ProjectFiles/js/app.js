var app = app || {};

(function (scope) {
    //console.log(scope);

    // sammy routing
    app.router = Sammy(function() {
        var selector = $('.main-section');

        this.get('#/', function() {
            $.get('templates/homeTemplate.html', function(content) {
                $(selector).html(content);
            });
        });

        this.get('#/albums', function() {
            $.get('templates/albumsTemplate.html', function(content) {
                $(selector).html(content);
            });
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

