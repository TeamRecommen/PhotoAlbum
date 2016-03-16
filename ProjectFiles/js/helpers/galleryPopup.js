var app = app || {};


app.galleryPopup = (function () {

    $('.single-picture').on('click', function () {
        var overlay = $('<div>').addClass('gallery-overlay');
        var closeOverlay = $('<span>').addClass('close-overlay').on('click', function () {
            overlay.hide();
        });
        var closeImage = $('<img>').attr('src', 'img/close_button.png');
        closeOverlay.append(closeImage);
        overlay.append(closeOverlay);
        $('.main-section').append(overlay);
    })

});