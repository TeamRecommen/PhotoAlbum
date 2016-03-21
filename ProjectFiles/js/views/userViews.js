define(['sammy'], function(Sammy){
    return (function () {
        function UserViews(){
            this.selector = $('.main-section');
        }

        UserViews.prototype.showLoginPage = function showLoginPage() {
            var _this = this;
            $.get('templates/loginTemplate.html', function (templ) {
                _this.selector.html(templ);
                $('#login-button').on('click', function () {

                    var username = $('#login-username').val(),
                        password = $('#login-password').val();

                    Sammy(function () {
                        this.trigger('login', {username: username, password: password});
                    });
                });

                $('#register-button').on('click', function() {

                    var regUsername = $('#register-username').val(),
                        regPassword = $('#register-password').val();

                    Sammy(function() {
                        this.trigger('register', {username: regUsername, password: regPassword})
                    })
                })
            })
        };

        return new UserViews();
    }());
});