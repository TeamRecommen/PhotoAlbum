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
        var imageSrc = $(this).find('img').attr('src');
        var imagePreview = $('<img>').attr('src', imageSrc).addClass('image-preview');

        imageHolder.append(imagePreview);

        closeOverlay.append(closeImage);
        overlay.append(closeOverlay, imageHolder);
        $('.main-section').append(overlay);
    })

});