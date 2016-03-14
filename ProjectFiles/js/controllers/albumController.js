var app = app || {};

app.albumController = (function () {
    function AlbumController(model, viewBag) {
        this._model = model;
        this._viewBag = viewBag;
    }

    AlbumController.prototype.showAlbums = function showAlbums() {
        var _this = this;

        _this._model.getAllAlbums()
            .then(function (albums) {
                _this._viewBag.showAlbums(albums);
            })
    };

    AlbumController.prototype.showAlbumsByRating = function showAlbumsByRating() {
        var _this = this;

        _this._model.getAllAlbums()
            .then(function (albums) {
                albums = albums.sort(function (a, b) {
                    return a.rating - b.rating
                });

                _this._viewBag.showAlbums(albums);
            })
    };

    AlbumController.prototype.addAlbum = function addAlbum(data) {
        var _this = this;

        var obj = app.albumInputModel(data.name);
        var albumOutputModel = obj.getAlbumInputModel();
<<<<<<< HEAD

        this._model.addNewAlbum(albumOutputModel);
        //this._viewBag.showAlbums();
=======

        this._model.addNewAlbum(albumOutputModel).then(
            _this._model.getAllAlbums()
                .then(function (albums) {
                    _this.showAlbums(albums);
                })
        );


>>>>>>> 3517f60a9cbb4885a80f7ba6b6dc5876a996d523
    };

    return {
        load: function (model, viewBag) {
            return new AlbumController(model, viewBag)
        }
    }
})();
