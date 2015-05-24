"use strict";

app.factory('userData', function userData($http) {
    var baseUrl = 'http://softuni-social-network.azurewebsites.net/api/users/';
    var loggedIn = false;
    
    function loginUser(username, password, success, error) {
        $http({
            method: 'POST',
            url: baseUrl + 'login',
            data: {
                username: username,
                password: password
            }
        })
        .success(function (data, status, headers, config) {
            //sessionStorage['token'] = data.token_type + ' ' + data.access_token;
            setSessionToken(data);
            loggedIn = true;
            console.log('user ' + data.userName + ' logged in.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
                console.log(status, data);
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
                loggedIn = false;
                sessionStorage.clear();
                console.log('user logged out.');
                success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
                console.log(status, data);
                error(data, status, headers(), config);
        });
    }
    
    function registerUser(username, password, confirmPassword, name, email, success, error) {
        $http({
            method: 'POST',
            url: baseUrl + 'register',
            data: {
                username: username,
                password: password,
                confirmPassword: confirmPassword,
                name: name,
                email: email
            }
        })
        .success(function (data, status, headers, config) {
            loggeIn = true;
            setSessionToken(data);
            console.log('user ' + data.userName + ' registered.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }
    
    function previewUser(userName) {
        $http({
            method: 'GET',
            url: baseUrl + userName + '/preview',
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Preview for ' + userName + ' fetched.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }
    
    function getUserFullData(userName) {
        $http({
            method: 'GET',
            url: baseUrl + userName,
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Full data for ' + userName + ' fetched.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }
    
    function searchUsersByName(userName) {
        $http({
            method: 'GET',
            url: baseUrl + 'search?searchTerm=' + userName,
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Successful search for ' + userName + '.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }
    
    function getFriendWall(userName, startId, pageSize) {        
        // Set default page size & startId if not set
        if (!pageSize) {
            pageSize = 5;
        }
        if (!startId) {
            startId = '';
        }
        // ------------ //
        
        $http({
            method: 'GET',
            url: baseUrl + userName + '/wall?StartPostId=' + startId + '&PageSize=' + pageSize,
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Wall fetched for ' + userName + '.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }
    
    function getFriendFullFriendList(userName) {
        $http({
            method: 'GET',
            url: baseUrl + userName + '/friends',
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Friend\'s full list fetched for ' + userName + '.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }
    
    function getFriendPreviewFriendList(userName) {
        $http({
            method: 'GET',
            url: baseUrl + userName + '/friends/preview',
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Friend\'s preview list fetched for ' + userName + '.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }    
    
    function setSessionToken(data) {        
        sessionStorage['token'] = data.token_type + ' ' + data.access_token;
        sessionStorage['userName'] = data.userName;
    }
    
    return {
        loginUser : loginUser,
        logoutUser : logoutUser,
        registerUser : registerUser,
        previewUser : previewUser,
        getUserFullData : getUserFullData,
        searchUsersByName : searchUsersByName,
        getFriendWall : getFriendWall,
        getFriendFullFriendList : getFriendFullFriendList,
        getFriendPreviewFriendList : getFriendPreviewFriendList
    };
});