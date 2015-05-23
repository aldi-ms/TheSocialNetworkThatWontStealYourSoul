"use strict";

app.factory('postData', function postData($http) {
    var baseUrl = 'http://softuni-social-network.azurewebsites.net/api/Posts/';

    function addNewPost(postContent, userName) {
        $http({
            method: 'POST',
            url: baseUrl,
            headers: {
                Authorization: sessionStorage['token']
            },
            data: {
                postContent: postContent,
                username: userName
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Posted successful (id:' + data.id + ').');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }

    function getPostById(postId) {
        $http({
            method: 'GET',
            url: baseUrl + postId,
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Post id:' + postId + ' fetched.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }

    function editPost(postId, postContent) {
        $http({
            method: 'POST',
            url: baseUrl + postId,
            headers: {
                Authorization: sessionStorage['token']
            },
            data: {
                postContent: postContent
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Post id:' + postId + ' edited.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }

    function deletePost(postId) {
        $http({
            method: 'DELETE',
            url: baseUrl + postId,
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Post id:' + postId + ' deleted.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }

    function likePost(postId) {
        $http({
            method: 'POST',
            url: baseUrl + postId + '/likes',
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Post id:' + postId + ' liked.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }
    
    function unlikePost(postId) {
        $http({
            method: 'DELETE',
            url: baseUrl + postId + '/likes',
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Post id:' + postId + ' unliked.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }

    function getPostLikesFullData(postId) {
        $http({
            method: 'GET',
            url: baseUrl + postId + '/likes',
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Post id:' + postId + ' full likes data fetched.');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }

    function previewPostLikes(postId) {
        $http({
            method: 'GET',
            url: baseUrl + postId + '/likes/preview',
            headers: {
                Authorization: sessionStorage['token']
            }
        })
        .success(function (data, status, headers, config) {
            console.log('Post id:' + postId + ' likes preview fetched ('
            + data.totalLikeCount + ' ttl).');
            success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
            console.log(status, data);
            error(data, status, headers(), config);
        });
    }

    return {
        addNewPost : addNewPost,
        getPostById : getPostById,
        editPost : editPost,
        deletePost : deletePost,
        likePost : likePost,
        unlikePost : unlikePost,
        getPostLikesFullData : getPostLikesFullData,
        previewPostLikes : previewPostLikes
    }
});