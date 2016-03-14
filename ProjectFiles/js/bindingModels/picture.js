var app = app || {};

(function (scope) {
    var PictureInputModel = function(name) {
        this._name = name;
    };

    scope.pictureInputModel = function(name) {
        return new PictureInputModel(name);
    }
})(app);