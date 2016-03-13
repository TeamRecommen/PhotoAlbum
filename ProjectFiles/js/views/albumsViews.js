var app = app || {};

app.albumViews = (function() {
    function AlbumsViews(){}

    AlbumsViews.prototype.showAlbums = function showAlbums(data) {
        $.get('templates/albumsTemplate.html', function (templ) {
            $('.main-section').html(templ);
        });
    };

    return {
        load: function () {
            return new AlbumsViews();
        }
    }
})();
