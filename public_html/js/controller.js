"use strict";

app.controller("headController", function ($scope, userData) {
    $scope.title = 'The Soul Network';
    //$scope.init = function() { };

    userData.loginUser('scienide', 'fuck0ff',
            function (data, status, headers, config) {
                $scope.data = data;
                sessionStorage['token'] = data.token_type + ' ' + data.access_token;
                console.log('user ' + data.userName + ' logged in.');
            },
            function (error, status, headers, config) {
                console.log(status, error);
            });

    userData.logoutUser(
            function (data, status, headers, config) {
                sessionStorage.clear();
                console.log('user logged out.');
            },
            function (data, status, headers, config) {
                console.log(status, error);
            });
});