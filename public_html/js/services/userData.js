/*
app.factory('userData', function userData($resource) {
    var resource = $resource('http://softuni-social-network.azurewebsites.net/api/users/:url',
    {
        url: '@url'
    });
    
    function userLogin() {
        return resource.post();
    }
});
*/

app.factory('userData', function userData($http) {
    var baseUrl = 'http://softuni-social-network.azurewebsites.net/api/users/';
    
    function loginUser(username, password, success, error) {
        $http({
            method: 'POST',
            url: baseUrl + 'login',
            //headers: {},
            data: {
                username: username,
                password: password
            }
        })
        .success(function (data, status, headers, config) {                    
                success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
        });
    }
    
    function logoutUser(success, error) {
        $http({
            method: 'POST',
            url: baseUrl + 'logout',
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
                success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
        });
    }
    
    function registerUser(username, password, confirmPassword, name, email, 
                            success, error) {
        $http({
            method: 'POST',
            url: baseUrl + register,
            data: {
                username: username,
                password: password,
                confirmPassword: confirmPassword,
                name: name,
                email: email
            }
        })
        .success(function (data, status, headers, config) {
                success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
        });
    }
    
    return {
        loginUser: loginUser,
        logoutUser: logoutUser
    };
});