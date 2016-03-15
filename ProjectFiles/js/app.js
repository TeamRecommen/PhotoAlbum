var app = app || {};

(function (scope) {

    // sammy routing
    scope.router = Sammy(function () {
        var requester = scope.requester.config('kid_Z1d1z2oEJ-', '1796d478bcf54ef8b10abddde51bfc45');
        var selector = $('.main-section'),

            albumsModel = scope.albumsModel.load(requester),
            usersModel = scope.userModel.load(requester),

            albumViewBag = scope.albumViews.load(),
            userViewBag = scope.userViews.load(),


            albumController = scope.albumController.load(albumsModel, albumViewBag),
            userController = scope.userController.load(usersModel, userViewBag);

        this.get('#/', function () {
            if (!sessionStorage['sessionAuth']) {
                userController.loadLoginPage(selector);
            } else {
                $.get('templates/homeTemplate.html', function (content) {
                    selector.html(content);
                });
            }
            scope.changeActiveMenu('home-nav');
            scope.showHideLogout();
        });

        this.get('#/albums', function () {
            albumController.showAlbums();
            scope.changeActiveMenu('albums-nav');
        });

        this.get('#/about', function () {
            $.get('templates/aboutTemplate.html', function (content) {
                selector.html(content);
            });
            scope.changeActiveMenu('about-nav');
            scope.showHideLogout();

        });

        this.get('#/logout', function () {
            userController.logout();
            scope.showHideLogout();
        });

        this.bind('add-album', function (e, data) {
            albumController.addAlbum(data)
        });

        this.bind('login', function (e, data) {
            userController.login(data);
        });

        this.bind('redirectUrl', function (e, data) {
            this.redirect(data.url)
        })
    });

    scope.router.run('#/');
})(app);



