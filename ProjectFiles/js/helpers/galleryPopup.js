var app = app || {};


app.galleryPopup = (function () {

    $('.single-picture').on('click', function () {
        var overlay = $('<div>').addClass('gallery-overlay'),
            closeOverlay = $('<span>')
                .addClass('close-overlay')
                .on('click', function () {
                    overlay.hide();
                }),
            closeImage = $('<img>').attr('src', 'img/close_button.png'),
            imageHolder = $('<div>').addClass('single-image_holder');

        closeOverlay.append(closeImage);
        overlay.append(closeOverlay, imageHolder);
        $('.main-section').append(overlay);
    })

});