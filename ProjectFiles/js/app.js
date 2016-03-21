(function () {
    require.config({
        paths: {
            jquery: 'libs/jquery-2.2.1',
            mustache: 'libs/mustache',
            q: 'libs/q',
            sammy: 'libs/sammy-latest.min',
            album: 'bindingModels/album',
            picture: 'bindingModels/picture',
            albumController: 'controllers/albumController',
            userController: 'controllers/userController',
            pictureController: 'controllers/picturesController',
            galleryPopup: 'helpers/galleryPopup',
            menuChanger: 'helpers/menuChanger',
            requester: 'helpers/requester',
            albumModel: 'models/albumsModel',
            userModel: 'models/userModel',
            pictureModel: 'models/picturesModel',
            userView: 'views/userViews',
            pictureView: 'views/picturesViews',
            albumView: 'views/albumsViews'
        }
    })
})();


require(['albumController', 'pictureController', 'userController', 'menuChanger', 'sammy'],
function(albumController, pictureController, userController, menuChanger, Sammy){
    var router = Sammy(function () {

        this.before(function(){
            menuChanger.showHideLogout();
        });

        this.get('#/', function () {
            if (!sessionStorage['sessionAuth']) {
                userController.loadLoginPage();
            } else {
                albumController.showAlbumsByRating()
            }
            menuChanger.changeActiveMenu('home-nav');
        });

        this.get('#/albums', function () {
            albumController.showAlbums();
            menuChanger.changeActiveMenu('albums-nav');
        });

        this.get('#/about', function () {
            $.get('templates/aboutTemplate.html', function (content) {
                $('.main-section').html(content);
            });
            menuChanger.changeActiveMenu('about-nav');

        });

        this.get('#/albums/:albumId', function () {
            pictureController.showPictures(this.params['albumId']);
        });

        this.get('#/logout', function () {
            userController.logout();
        });

        this.bind('add-album', function (e, data) {
            albumController.addAlbum(data)
        });

        this.bind('login', function (e, data) {
            userController.login(data);
        });

        this.bind('redirectUrl', function (e, data) {
            this.redirect(data.url)
        });

        this.bind('show-album', function (e, data) {
            pictureController.showPictures(data.album);
        });

        this.bind('register', function (e, data) {
            userController.register(data);
        });


        this.bind('add-picture', function (e, data) {
            var liNumber = $('.gallery-grid').children().length;
            pictureController.addPicture(data);

            if (liNumber==1){
                albumController.updateBackgroundPicture(data);
            }
        });

        this.bind('update-pic-rating', function (e, data) {
            pictureController.updatePicture(data);
        });

        this.bind('update-album-rating', function(e, data){
            albumController.updateAlbumRating(data.albumId)
        });
    });

    router.run('#/');
});



