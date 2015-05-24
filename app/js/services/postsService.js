'use strict';

socialNetworkApp.factory('postsService',
    function postsService($http, $q, baseServiceUrl) {

        return {
            getPosts: function (pageSize, lastPostId) {
                var url = baseServiceUrl + '/me/feed?StartPostId=' + lastPostId
                    + '&PageSize=' + pageSize;

                var deferred = $q.defer();
                $http.get(url)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error)
                    });

                return deferred.promise;
            },

            likePost: function (postId) {
                var url = baseServiceUrl + '/Posts/' + postId + '/likes';

                var deferred = $q.defer();
                $http.post(url)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error)
                    });

                return deferred.promise;
            },

            unlikePost: function (postId) {
                var url = baseServiceUrl + '/Posts/' + postId + '/likes';

                var deferred = $q.defer();
                $http.delete(url)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error)
                    });

                return deferred.promise;
            }
        }
    });