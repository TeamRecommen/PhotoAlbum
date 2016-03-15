var app = app || {};

(function (scope) {
    var PictureInputModel = function(name, albumId, comment, data) {
        this._name = name;
        this._albumId = albumId;
        this.rating = 0;
        this.comment = comment;
        this._data = data;
    };

    PictureInputModel.prototype.getPictureInputModel = function getPictureInputModel(){
        return {
            name: this._name,
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