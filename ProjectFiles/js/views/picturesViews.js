var app = app || {};

app.pictureViews = (function () {
    function PictureViews() {
    }

    PictureViews.prototype.showPictures = function (data) {
        $.get('templates/picturesTemplate.html', function (templ) {
            var json = {
                pictures: data
            };
            var rendered = Mustache.render(templ, json);
            $('.main-section').html(rendered);
            $('#add-picture').on('click', function () {
                console.log('Hi');
                var createPictureDiv = $('<div>')
                    .addClass('add-picture-form');
                var nameLabel = $('<label>').attr('for', 'picture-name').text('Picture title:');
                var pictureName = $('<input>').attr('id', 'picture-name').addClass('picture-name');
                var uploadLabel = $('<label>').attr('for', 'picture-upload').addClass('picture-upload').text('Choose File');
                var pictureFile = $('<input>').attr({type: 'file', id: 'picture-upload'}).addClass('picture-input');
                var btn = $('<button>').text('Add').on('click', function () {
                    var name = $('#picture-name').val();
                    $.sammy(function () {
                        //filereader for base64
                        this.trigger('add-picture', {name: pictureName.val(), content: pictureFile.val()})
                    })
                });
                createPictureDiv.append(nameLabel, pictureName, uploadLabel, pictureFile, btn);
                $(this).parent().empty().append(createPictureDiv);
            });
        });
    };

    PictureViews.prototype.showTopPictures = function (data) {
        $.get('templates/homeTemplate', function (templ) {
            var rendered = Mustache.render(templ, data);
            $('.main-section').html(rendered);
        })
    };

    return {
        load: function () {
            return new PictureViews();
        }
    }
})();
