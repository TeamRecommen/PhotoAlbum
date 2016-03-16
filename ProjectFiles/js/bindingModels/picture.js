var app = app || {};

(function (scope) {
    var PictureInputModel = function(data) {
        this._albumId = data.albumId;
<<<<<<< HEAD
        this.rating = 0;
        this._comment = data.comment;
=======
        this.rating = data.rating;
        this.comment = '';
>>>>>>> f4f4671aff047eead6cbd4049368cdd6b3472953
        this._data = data.base64data;
        this._name = sessionStorage.username,
        this._id = data._id
    };

    PictureInputModel.prototype.getPictureInputModel = function getPictureInputModel(){
        return {
            base64data: this._data,
            comment: this._comment,
            rating: this.rating,
            albumId: this._albumId,
            name: this._name,
            id: this._id
        }
    };

    scope.pictureInputModel = function(name) {
        return new PictureInputModel(name);
    }
})(app);