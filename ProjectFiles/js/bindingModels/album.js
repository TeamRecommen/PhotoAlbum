var app = app || {};

(function (scope) {
    var AlbumInputModel = function(name) {
        this.name = name;
        this.creator = sessionStorage.username;
        this.backGroundPicture = 'No picture';
    };

    AlbumInputModel.prototype.getAlbumInputModel = function() {
        return {
            name: this.name,
            createdBy: this.creator,
            backGroundPicture: this.backGroundPicture
        }
    };

    scope.albumInputModel = function(name) {
        return new AlbumInputModel(name);
    }
})(app);