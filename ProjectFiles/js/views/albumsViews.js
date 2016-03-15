var app = app || {};

app.albumViews = (function () {
    function AlbumsViews() {
    }

    AlbumsViews.prototype.showAlbums = function showAlbums(data) {
        $.get('templates/albumsTemplate.html', function (templ) {
            var json = {
                albums: data
            };
            var rendered = Mustache.render(templ, json);
            $('.main-section').html(rendered);
            $('#create-album').on('click', function () {
                var createAlbumDiv = $('<div>')
                    .addClass('create-album-form')
                    .append($('<input>').attr('placeholder', 'Album Name').attr('id', 'album-name'))
                    .append($('<button>').text('Create').on('click', function () {
                        var name = $('#album-name').val();

                        $.sammy(function () {
                            this.trigger('add-album', {name: name})
                        })
                    }));
                $(this).parent().empty().append(createAlbumDiv);
            });

            $('.gallery-view').on('click', function () {
                var albumId = $(this).attr('data-id');
                $.sammy(function () {
                    this.trigger('redirectUrl', {url: '#/albums/' + albumId});
                });
            });
        });
    };

    AlbumsViews.prototype.showTopAlbums = function showTopAlbums(data) {
        $.get('templates/homeTemplate', function (templ) {
            var rendered = Mustache.render(templ, data);
            $('.main-section').html(rendered);
        });

    };

    return {
        load: function () {
            return new AlbumsViews();
        }
    }
})();
