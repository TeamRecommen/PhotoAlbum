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
                var pictureName = $('<input>').attr('id', 'picture-name').addClass('picture-name');
                var pictureFile = $('<input>').attr('type', 'file');
                var btn = $('<button>').text('Add').on('click', function () {
                    var name = $('#picture-name').val();
                    $.sammy(function () {
                        //filereader for base64
                        this.trigger('add-picture', {name: pictureName.val(), content: pictureFile.val()})
                    })
                });
                createPictureDiv.append(pictureName, pictureFile, btn);
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
