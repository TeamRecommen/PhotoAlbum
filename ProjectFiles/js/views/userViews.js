var app = app || {};

app.userViews = (function () {
    function showLoginPage(selector) {
        $.get('templates/loginTemplate.html', function (templ) {
            $(selector).html(templ);
            $('#login-button').on('click', function () {
                console.log('login be maina');

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