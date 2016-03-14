var app = app||{};

app.albumsModel = (function(){
    function AlbumsModel(requester){
        this.requester = requester;
        this.serviceUrl = this.requester.baseUrl + 'appdata/' + this.requester.appId + '/Albums';
    }

    AlbumsModel.prototype.getAllAlbums = function getAllAlbums (){
        return this.requester.get(this.serviceUrl, true)
    };

    AlbumsModel.prototype.addNewAlbum = function addAlbum (album){
        return this.requester.post(this.serviceUrl, album, true)
    };

    return {
        load: function(requester){
            return new AlbumsModel(requester)
        }
    }
})();
