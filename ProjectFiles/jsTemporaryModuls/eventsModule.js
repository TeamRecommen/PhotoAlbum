var app = app || {};

(function (scope) {

    var loginNavMenu = $('#login-nav'),
        loginPopupWindow = $('#login-popup'),
        loginButton = $('#login-btn'),
        createAlbumButton = $('#create-album');


    loginNavMenu.on('click', function () {
        $(this).toggleClass('active-nav');
        loginPopupWindow.fadeToggle();
    });

    createAlbumButton.on('click', function () {
        console.log('create album');
    });

    loginButton.on('click', scope.login);

}(app));