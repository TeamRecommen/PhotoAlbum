var app = app || {};

(function (scope) {
    var PictureInputModel = function(data) {
        this._albumId = data.albumId;
        this.rating = 0;
        this.comment = '';
        this._data = data.base64data;
    };

    PictureInputModel.prototype.getPictureInputModel = function getPictureInputModel(){
        return {
            base64data: this._data,
            comment: this.comment,
            rating: this.rating,
            albumId: this._albumId
        }
    };

    scope.pictureInputModel = function(name) {
        return new PictureInputModel(name);
    }
})(app);