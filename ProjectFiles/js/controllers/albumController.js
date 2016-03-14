var app = app || {};

app.albumController = (function(){
    function AlbumController(model, viewBag){
        this._model = model;
        this._viewBag = viewBag;
    }

    return {
        load: function(){
            return new AlbumController()
        }
    }
})();
