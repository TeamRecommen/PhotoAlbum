var app = app || {};

(function (scope) {
    var AlbumInputModel = function(name) {
        this._name = name;
        this._creator = sessionStorage.username;
        this.backGroundPicture = 'No picture';
    };

    scope.albumInputModel = function(name) {
        return new AlbumInputModel(name);
    }
})(app);