angular.module('MyApp')
  .factory('CouponsUtil', function($http) {
    return {
        delete: function(id){
            return $http.delete('/api/coupons/' + id);
        }
    };
    
  });