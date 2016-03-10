var app = app || {};

(function (scope) {


    console.log(scope);

    $('#create-album').on('click', function () {
        console.log('create album');
    });

})(app);

