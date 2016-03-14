var app = app || {};

(function (scope) {
    var AlbumInputModel = function(name) {
        this._name = name;
        this._creator = sessionStorage.username;
        this.backGroundPicture = 'No picture';
    };

    AlbumInputModel.prototype.getAlbumInputModel = function() {
        return {
            name: this._name,
            createdBy: this._creator,
            backGroundPicture: this.backGroundPicture
        }
    };

    scope.albumInputModel = function(name) {
        return new AlbumInputModel(name);
    }
})(app);