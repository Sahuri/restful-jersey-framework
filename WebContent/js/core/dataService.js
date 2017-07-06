(function () {
    'use strict';
//factory service API
angular.module('app.services').factory('dataService', dataService);
dataService.$inject = ['$rootScope', '$http', '$q'];
///* @ngInject */
function dataService($rootScope, $http, $q) {



    var service = {
    		getUserAll: getUserAll
    };

    return service;

    // ---------------
    // PUBLIC METHODS.
    // ---------------



    function getUserAll() {
        return $http.get($rootScope.restPath+'/UserService/all')
            .then(success,fail);

        function success(response) {
            return response.data;
        }

        function fail(e) {
            return ('XHR Failed for getUserAll')(e);
        }
    }

    
}
})();