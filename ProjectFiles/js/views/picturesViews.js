var app = app || {};

app.pictureViews = (function () {
    function PictureViews() {
    }

    PictureViews.prototype.showPictures = function (data, albumId) {
        var _this = this;
        $.get('templates/picturesTemplate.html', function (templ) {
            var json = {
                pictures: data
            };
            var rendered = Mustache.render(templ, json);
            $('.main-section').html(rendered);
            $('#add-picture').on('click', function () {
                var createPictureDiv = $('<div>')
                    .addClass('add-picture-form');
                var nameLabel = $('<label>').attr('for', 'picture-name').text('Picture title:');
                var pictureName = $('<input>').attr('id', 'picture-name').addClass('picture-name');
                var uploadLabel = $('<label>').attr('for', 'picture-upload').addClass('picture-upload').text('Choose File');
                var pictureFile = $('<input>').attr({
                    type: 'file',
                    id: 'picture-upload'
                }).addClass('picture-input').change(function () {
                    var reader = new FileReader(),
                        file = this.files[0];

                    reader.addEventListener("load", function () {
                        $.sammy(function () {
                            this.trigger('add-picture', {base64data: reader.result, albumId: albumId})
                        })
                    }, false);

                    if (file) {
                        reader.readAsDataURL(file);
                    }
                });

                createPictureDiv.append(nameLabel, pictureName, uploadLabel, pictureFile);
                $(this).parent().empty().append(createPictureDiv);
            });
        }).then(function () {
            $('.single-picture').on('click', function () {
                _this.singlePicturePopup(data);
            });
        });

    };

    PictureViews.prototype.showTopPictures = function (data) {
        $.get('templates/homeTemplate', function (templ) {
            var rendered = Mustache.render(templ, data);
            $('.main-section').html(rendered);
        })
    };

    PictureViews.prototype.singlePicturePopup = function (data) {
        $.get('templates/singlePictureTemplate.html', function (templ) {
            var rendered = Mustache.render(templ, data);
            $('.main-section').append(rendered);
            $('#close-overlay').on('click', function () {
                $('#gallery-overlay').remove();
            })
        })
    };

    return {
        load: function () {
            return new PictureViews();
        }
    }
})();
