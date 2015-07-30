angular.module('MyApp')
  .factory('Coupons', function($resource) {
    return $resource('/api/coupons/:id');
  });