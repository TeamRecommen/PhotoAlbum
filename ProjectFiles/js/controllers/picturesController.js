define(['pictureModel', 'pictureView', 'picture', 'sammy'], function(model, view, pictureInputModel, Sammy){
    return (function () {
        function PictureController(model, viewBag) {
            this._model = model;
            this._viewBag = viewBag;
        }

        PictureController.prototype.showPictures = function (albumId) {
            var _this = this;
            _this._model.getAllPictures(albumId)
                .then(function (pictures) {
                    _this._viewBag.showPictures(pictures, albumId);
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
                albumId = data.albumId,
                obj = new pictureInputModel(data),
                pictureOutputModel = obj.getPictureInputModel();

            this._model.addNewPicture(pictureOutputModel)
                .then(function () {
                    _this.showPictures(albumId);
                })
        };

        PictureController.prototype.updatePicture = function (data) {
            var _this = this,
                albumId = data.albumId;

            data.rating++;

            this._model.updatePicture(data)
                .then(function () {
                    _this.showPictures(albumId);
                    Sammy(function () {
                        this.trigger('update-album-rating', {albumId: albumId});
                    })
                })
        };

        return new PictureController(model, view);
    })();
});