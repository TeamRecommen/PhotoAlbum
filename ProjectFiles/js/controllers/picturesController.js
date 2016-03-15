var app = app || {};

app.pictureController = (function () {
    function PictureController(model, viewBag) {
        this._model = model;
        this._viewBag = viewBag;
    }

    PictureController.prototype.showPictures = function (albumId) {
        var _this = this;

        _this._model.getAllPictures(albumId)
            .then(function (pictures) {
                _this._viewBag.showPictures(pictures);
            })
    };

    PictureController.prototype.showPicturesByRating = function () {
        var _this = this;

        _this._model.getAllPictures()
            .then(function (pictures) {
                pictures = pictures.sort(function (a, b) {
                    return a.rating - b.rating
                });

                _this._viewBag.showPictures(pictures);
            })
    };

    PictureController.prototype.addPicture = function (data) {
        var _this = this,
            obj = app.pictureInputModel(data.name),
            pictureOutputModel = obj.getPictureInputModel();

        this._model.addNewPicture(pictureOutputModel).then(
            _this._model.getAllPictures()
                .then(function (pictures) {
                    _this.showPictures(pictures);
                })
        );
    };


    return {
        load: function (model, viewBag) {
            return new PictureController(model, viewBag)
        }
    }
})();
