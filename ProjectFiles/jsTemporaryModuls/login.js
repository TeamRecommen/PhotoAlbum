var app = app || {};

(function (scope) {
    function login() {
        var username = $('#username').val(),
            password = $('#password').val(),
            currentUser = {
                "username": username,
                "password": password
            };

        $.ajax({
            type: "POST",
            url: "https://baas.kinvey.com/user/kid_Z1d1z2oEJ-/login",
            data: currentUser,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic a2lkX1oxZDF6Mm9FSi06MTc5NmQ0NzhiY2Y1NGVmOGIxMGFiZGRkZTUxYmZjNDU=");
            },
            success: function (data) {
                sessionStorage.authToken = data._kmd.authtoken;
                //do something here
            },
            error: function (error) {
                console.error(error);
                alert('Invalid username or password');
            }
        })
    }

    scope.login = login;
})(app);
