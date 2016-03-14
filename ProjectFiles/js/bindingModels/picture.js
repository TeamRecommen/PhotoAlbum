var app = app || {};

(function (scope) {
    var PictureInputModel = function(name) {
        this._name = name;
        this._content = '';
    };

    scope.pictureInputModel = function(name) {
        return new PictureInputModel(name);
    }
})(app);