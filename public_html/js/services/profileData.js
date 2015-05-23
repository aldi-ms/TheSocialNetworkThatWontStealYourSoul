"use strict";

app.factory('profileData', function profileData($http) {
    var baseUrl = 'http://softuni-social-network.azurewebsites.net/api/me/';
    
    function getSelfData() {
        $http({
            method: 'GET',
            url: baseUrl,
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Data for logged user (self) fetched.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }
    
    function getSelfFriendList() {
        $http({
            method: 'GET',
            url: baseUrl + 'friends',
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Friend list for logged user (self) fetched.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }
    
    function getFriendRequests() {
        $http({
            method: 'GET',
            url: baseUrl + 'requests',
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Friend requests for logged user (self) fetched.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }
    
    function sendFriendRequest(userName) {
        $http({
            method: 'POST',
            url: baseUrl + 'requests/' + userName,
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Friend request to user ' + userName + ' sent.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }
    
    function approveFriendRequest(requestId) {
        $http({
            method: 'PUT',
            url: baseUrl + 'requests/' + requestId + '?status=approved',
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Friend request id:' + requestId + ' approved.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }
    
    function rejectFriendRequest(requestId) {
        $http({
            method: 'PUT',
            url: baseUrl + 'requests/' + requestId + '?status=rejected',
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Friend request id:' + requestId + ' rejected.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }
    
    function getSelfNewsFeedPages(startId, pageSize) {
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
            url: baseUrl + 'feed?StartPostId=' + startId + '&PageSize=' + pageSize,
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('News feed for logged user (self) fetched.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }
    
    
    
    
    
    return {
        getSelfData : getSelfData,
        getSelfFriendList : getSelfFriendList,
        getFriendRequests : getFriendRequests,
        sendFriendRequest : sendFriendRequest,
        acceptFriendRequest : approveFriendRequest,
        rejectFriendRequest : rejectFriendRequest,
        getSelfNewsFeed : getSelfNewsFeedPages
    }
});