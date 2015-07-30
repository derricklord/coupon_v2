angular.module('MyApp')
  .controller('DetailCtrl', function($scope, $rootScope, $routeParams, Coupons, CouponsUtil, Subscription, $window) {
    Coupons.get({id: $routeParams.id}, function(coupon){
        $scope.coupon = coupon;
    });
    
    
    $scope.deleteCoupon = function(coupon){  
        CouponsUtil.delete(coupon._id)
            .success(function(){
                console.log('Coupon removed');
                $window.location.href = ''; //redirect to home
            })
            .error(function(error){
                console.log(error);
            });    
    };
      /*
      coupon.$delete(function() {
        $window.location.href = ''; //redirect to home
      });
      */
    /*
      Show.get({ _id: $routeParams.id }, function(show) {
        $scope.show = show;

        $scope.isSubscribed = function() {
          return $scope.show.subscribers.indexOf($rootScope.currentUser._id) !== -1;
        };

        $scope.subscribe = function() {
          Subscription.subscribe(show).success(function() {
            $scope.show.subscribers.push($rootScope.currentUser._id);
          });
        };

        $scope.unsubscribe = function() {
          Subscription.unsubscribe(show).success(function() {
            var index = $scope.show.subscribers.indexOf($rootScope.currentUser._id);
            $scope.show.subscribers.splice(index, 1);
          });
        };

        $scope.nextEpisode = show.episodes.filter(function(episode) {
          return new Date(episode.firstAired) > new Date();
        })[0];
      });
    */
    });