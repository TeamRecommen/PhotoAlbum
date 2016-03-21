define(['q'], function(Q){
    return (function () {
        function Requester() {
            this.appId = 'kid_Z1d1z2oEJ-';
            this.appSecret = '1796d478bcf54ef8b10abddde51bfc45';
            this.baseUrl = 'https://baas.kinvey.com/';
        }

        Requester.prototype.get = function(url, useSession) {
            return this.makeRequest('GET', url, null, useSession);
        };

        Requester.prototype.post = function(url, data, useSession) {
            return this.makeRequest('POST', url, data, useSession);
        };

        Requester.prototype.put = function (url, data, useSession){
            return this.makeRequest('PUT', url, data, useSession);
        };

        Requester.prototype.makeRequest = function(method, url, data, useSession) {
            var token,
                defer = Q.defer(),
                _this = this,
                options = {
                    method: method,
                    url: url,
                    success: function (data) {
                        defer.resolve(data);
                    },
                    error: function (error) {
                        defer.reject(error);
                    }
                };

            $.ajaxSetup({
                beforeSend: function(xhr, settings) {
                    if (!useSession) {
                        token = _this.appId + ':' + _this.appSecret;
                        xhr.setRequestHeader('Authorization', 'Basic ' + btoa(token));
                    } else {
                        token = sessionStorage['sessionAuth'];
                        xhr.setRequestHeader('Authorization', 'Kinvey ' + token);
                    }
                    if(data) {
                        xhr.setRequestHeader('Content-Type', 'application/json');
                        settings.data = JSON.stringify(data);
                        return true;
                    }
                }
            });

            $.ajax(options);

            return defer.promise;
        };

        return new Requester();
    }());
});