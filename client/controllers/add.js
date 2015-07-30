angular.module('MyApp')
  .controller('AddCtrl', function($scope, $alert, Coupons, $window) {
    $scope.addCoupon= function() {
      Coupons.save({ desc: $scope.desc, isAdmin: true }).$promise
        .then(function() {
          $scope.desc = '';
          $scope.addForm.$setPristine();
          $alert({
            content: 'Coupon has been added.',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        $window.location.href = ''; //redirect to home
        })
        .catch(function(response) {
          $scope.desc = '';
          $scope.addForm.$setPristine();
          $alert({
            content: response.data.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };
  });