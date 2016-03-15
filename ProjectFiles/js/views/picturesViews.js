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
                    .addClass('add-picture-form')
                    .append($('<input>').attr('type', 'file'))
                    .append($('<button>').text('Add').on('click', function () {
                        var name = $('#picture-name').val();

                        $.sammy(function () {
                            this.trigger('add-picture', {name: name})
                        })
                    }));
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
