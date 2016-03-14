var app = app || {};

app.albumController = (function(){
    function AlbumController(model, viewBag){
        this._model = model;
        this._viewBag = viewBag;
    }

    AlbumController.prototype.showAlbums = function showAlbums(){
        var _this = this;

        _this._model.getAllAlbums()
            .then(function(albums){
                _this._viewBag.showAlbums(albums);
            })
    };

    AlbumController.prototype.showAlbumsByRating = function showAlbumsByRating(){
        var _this = this;

        _this._model.getAllAlbums()
            .then(function(albums){
                albums = albums.sort(function(a, b){
                   return a.rating - b.rating
                });

                _this._viewBag.showAlbums(albums);
            })
    };

    AlbumController.prototype.addAlbum = function addAlbum(){

    };

    return {
        load: function(model, viewBag){
            return new AlbumController(model, viewBag)
        }
    }
})();
