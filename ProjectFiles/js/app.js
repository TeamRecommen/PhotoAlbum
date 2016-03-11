var app = app || {};

(function (scope) {


    console.log(scope);

    $('#create-album').on('click', function () {
        console.log('create album');
    });


    $('#login-nav').on('click', function () {
        $('#login-popup').fadeToggle();
    });

})(app);

