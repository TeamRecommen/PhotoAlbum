define(['userModel', 'userView', 'sammy'], function(model, view, Sammy){
    return (function () {
        function UserController(model, viewBag) {
            this._model = model;
            this._viewBag = viewBag;

        }

        UserController.prototype.loadLoginPage = function () {
            this._viewBag.showLoginPage()
        };

        UserController.prototype.login = function (data) {
            var userOutputModel = {
                username: data.username,
                password: data.password
            };

            this._model.login(userOutputModel)
                .then(function (success) {
                    sessionStorage['sessionAuth'] = success._kmd.authtoken;
                    sessionStorage['userId'] = success._id;
                    sessionStorage['username'] = success.username;
                    Sammy(function () {
                        this.trigger('redirectUrl', {url: '#/'});
                    })
                }).done();
        };

        UserController.prototype.logout = function () {
            return this._model.logout()
                .then(function () {
                    sessionStorage.clear();
                    Sammy(function () {
                        this.trigger('redirectUrl', {url: '#/'});
                    });
                });
        };

        UserController.prototype.register = function (data) {
            this._model.register(data)
                .then(function (success) {
                    sessionStorage['sessionAuth'] = success._kmd.authtoken;
                    sessionStorage['userId'] = success._id;
                    sessionStorage['username'] = success.username;
                    Sammy(function () {
                        this.trigger('redirectUrl', {url: '#/'});
                    })
                }).done();
        };

        return new UserController(model, view)
    }());
});