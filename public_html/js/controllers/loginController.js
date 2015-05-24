app.controller("loginController", function ($scope, $location, userData, profileData) {
    $scope.login = function() {
        userData.loginUser($scope.login.userName, $scope.login.password,
                function() {
                    $location.path('index');
                }, function() {
                    alert('error on login!');
                });
    }
});