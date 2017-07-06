(function() {
    'use strict';

    angular
        .module('app')
        .controller('ListUserController', ListUserController);

    ListUserController.$inject = ['$rootScope','$scope','$timeout','dataService','$q' ]; 

    /* @ngInject */
    function ListUserController($rootScope,$scope,$timeout,dataService,$q) { 
     
    	 var vm = this;
    	 var table = null;
    	 vm.init=function(){
    		 var promises = [
    		                 loadData()
    		                ];
    		 
    		 $q.all(promises).then(function() {
    			 defineDatatables();
             });
    		
    	 };
    	 
    	 function loadData() {
             var deferred = $q.defer();
             setTimeout(function() {
                 vm.datas = [];  
           
                 dataService.getUserAll().then(function (data) {
                     if (data != null) {
                    	 vm.datas=data;
                         deferred.resolve(true);
                     } else {
                         deferred.reject(false);
                     }
                      
                 });
             }, 0);
             return deferred.promise;
         } 
    	 
    	//function define parent datatables
	    function defineDatatables() {
	        var dataX = vm.datas;
	        table = $('#jq-datatables-example').DataTable({
	            'searching': false,
	            'paging': true,
	            'bLengthChange': false,
	            'sDom': 'lfrtip',
	            'data': dataX,
	            'destroy': true,

	            'columns': [
	                {
	                    className: 'details-control',
	                    data: null,
	                    defaultContent: '<a href="#" ><label class="checkbox-inline"><input type="checkbox" class="btn-check">&nbsp;</label></a>'
	                },
	                { data: 'id' },
	                { data: 'account' },
	                { data: 'name' },
	                { data: 'profession' },
	                { data: 'phone' },
	                { data: 'email' }

	            ],
	            responsive: true
	        });
	    };
	    
	    vm.check=function(ev){
	    	 if ($(this).is(":checked")) {
	                arrKdApl = [];
	                table.column(1).data().each(function (value, index) {
	                    //arrKdApl.push(value);
	                });
	                $(':checkbox', table.rows().nodes()).prop('checked', this.checked);
	                
	            }
	            else {
	                $(':checkbox', table.rows().nodes()).prop('checked', null);
	                //arrKdApl = [];
	            }
	    };
    	 
    	 vm.init();
    	
    }
})();