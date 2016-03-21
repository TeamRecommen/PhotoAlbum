define(['mustache', 'sammy'], function(Mustache, Sammy){
    return (function () {
        function AlbumsViews() {
            this.selector = $('.main-section');
        }

        AlbumsViews.prototype.showAlbums = function showAlbums(data) {
            var _this = this;
            $.get('templates/albumsTemplate.html', function (templ) {
                var json = {
                    albums: data
                };
                var rendered = Mustache.render(templ, json);
                _this.selector.html(rendered);
                $('#create-album').on('click', function () {
                    var createAlbumDiv = $('<div>')
                        .addClass('create-album-form')
                        .append($('<h3>').text('Create album'))
                        .append($('<input>').attr('placeholder', 'Album Name').attr('id', 'album-name'))
                        .append($('<button>').text('Create').on('click', function () {
                            var name = $('#album-name').val();

                            Sammy(function () {
                                this.trigger('add-album', {name: name})
                            })
                        }));
                    $(this).parent().empty().append(createAlbumDiv);
                });

                $('.gallery-view').on('click', function () {
                    var albumId = $(this).attr('data-id');
                    Sammy(function () {
                        this.trigger('redirectUrl', {url: '#/albums/' + albumId});
                    });
                });
            });
        };

        AlbumsViews.prototype.showTopAlbums = function showTopAlbums(data) {
            var _this = this;
            var json = {
                albums: data
            };

            $.get('templates/homeTemplate.html', function (templ) {
                var rendered = Mustache.render(templ, json);
                _this.selector.html(rendered);
            }).then(function () {
                    $('.gallery-view').on('click', function () {
                        var albumId = $(this).attr('data-id');
                        Sammy(function () {
                            this.trigger('redirectUrl', {url: '#/albums/' + albumId});
                        });
                    })
                }
            );

        };

        return new AlbumsViews();
    })();
});