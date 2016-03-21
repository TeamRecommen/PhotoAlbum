define(['mustache', 'sammy'], function(Mustache, Sammy){
    return (function () {
        function PictureViews() {
            this.selector = $('.main-section');
        }

        PictureViews.prototype.showPictures = function (data, albumId) {
            var _this = this;
            $.get('templates/picturesTemplate.html', function (templ) {
                var json = {
                    pictures: data
                };
                var rendered = Mustache.render(templ, json);
                _this.selector.html(rendered);
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
                            var comment = $('#picture-name').val();
                            Sammy(function () {
                                this.trigger('add-picture', {base64data: reader.result, albumId: albumId, comment: comment})
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
                    var photoId = $(this).attr('data-id');
                    var info = {
                        allPics: data,
                        currentPicId: photoId
                    };
                    _this.singlePicturePopup(info);
                });
            });

        };

        PictureViews.prototype.showTopPictures = function (data) {
            var _this = this;
            $.get('templates/homeTemplate', function (templ) {
                var rendered = Mustache.render(templ, data);
                _this.selector.html(rendered);
            })
        };

        PictureViews.prototype.singlePicturePopup = function (data) {
            var _this = this;
            var currentPic = data.allPics;
            var outputObj;
            for (var pic in currentPic) {
                if (currentPic[pic]._id == data.currentPicId) {
                    outputObj = currentPic[pic];
                }
            }

            $.get('templates/singlePictureTemplate.html', function (templ) {
                var rendered = Mustache.render(templ, outputObj);
                _this.selector.append(rendered);
                $('#close-overlay').on('click', function () {
                    $('#gallery-overlay').remove();
                });

                $('.picture-like-button').on('click', function() {
                    Sammy(function() {
                        this.trigger('update-pic-rating', outputObj);
                    })
                })
            })
        };

        return new PictureViews();
    })();
});