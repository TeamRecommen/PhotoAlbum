var app = app || {};

app.userViews = (function () {
    function showLoginPage(selector) {
        $.get('templates/login.html', function (templ) {
            $(selector).html(templ);
            $('#login-button').on('click', function () {

                var username = $('#login-username').val(),
                    password = $('#login-password').val();

                $.sammy(function () {
                    this.trigger('login', {username: username, password: password});
                });
            })
        })
    }

    return {
        load: function () {
            return {
                showLoginPage: showLoginPage
            }
        }
    }
}());