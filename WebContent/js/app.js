   
(function() {
    'use strict';
    
	var app = angular.module('app', [
	                                 'ui.router'
	                                 ,'app.services'
	        ]);


	app.config(routeConfig);
	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function routeConfig($stateProvider, $urlRouterProvider) {
	   $stateProvider
	       .state('list', {
	           url: '/',
	           templateUrl: 'pages/list-user.html',
	           controller: 'ListUserController',
	           controllerAs: 'vm',
	           title: 'list'
	       });
	   
	   $urlRouterProvider.otherwise('/');
	}

	  app.run(function ($rootScope) {
	        $rootScope._ = _;
	        $rootScope.restPath =config.restPath;
	        
	     
	        
	        //$rootScope.filterdata = null;
	        //$rootScope.culture = null;
	    });
})();