"use strict";

app.controller("mainController", function ($scope, $location, userData, postData, profileData) {
    $scope.title = 'The Soul Network';
    $scope.userData = userData;
    if (sessionStorage['token'] != null) {
        $scope.logged = true;
    }
    //userData.logoutUser();
    /*
    //username, password, confirmPassword, name, email, success, error
    userData.registerUser('scienide00', 'fuck0ff', 'fuck0ff', 'SCiENiDE', 'fk@this',
        function (data, status, headers, config) {

        },
        function(data, status, headers, config) {

        });
    */    
    //userData.loginUser('scienide00', 'fuck0ff',
    //function(data) {
    //    $scope.userData = data;
    //});  
    //userData.logoutUser();  
    //userData.getUserFullData('scienide');
    //userData.getFriendWall('John');
    
    //postData.addNewPost('post from js', 'scienide00')
    //postData.getPostById(2196);
    //postData.likePost(2196);
    //postData.unlikePost(2196);
    //postData.previewPostLikes(2196);
    //postData.deletePost(2196);
    //profileData.getSelfData();
    //profileData.sendFriendRequest('scienide');
    //profileData.getFriendRequests();
    //profileData.acceptFriendRequest(1703);
    //profileData.getSelfFriendList();
    //profileData.getSelfNewsFeed();
});