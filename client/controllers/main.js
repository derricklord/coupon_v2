angular.module('MyApp')
  .controller('MainCtrl', function($scope, Coupons) {

    $scope.coupons = Coupons.query();
    
    $scope.headingTitle = 'Top 10 Coupons';
    $scope.couponType = ['Dining', 'Entertainment', 'Clothing', 'All'];
    $scope.filterByType = function(type) {
      //$scope.coupons = Coupons.query({ couponType: couponType });
      $scope.headingTitle = type;
        
      if(type === 'All'){
        $scope.filter = '';
      }else{
        $scope.filter = type;
      }        
      
    };
    
    
    /*
    $scope.alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];

    $scope.genres = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy',
      'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food',
      'Home and Garden', 'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality',
      'Romance', 'Sci-Fi', 'Sport', 'Suspense', 'Talk Show', 'Thriller',
      'Travel'];

    $scope.genres = ['Action', 'Suspense'];
    $scope.headingTitle = 'Top 12 Shows';
    //$scope.shows = Show.query();
    $scope.shows = [];
    $scope.filterByGenre = function(genre) {
      $scope.shows = Show.query({ genre: genre });
      $scope.headingTitle = genre;
    };
    $scope.filterByAlphabet = function(char) {
      $scope.shows = Show.query({ alphabet: char });
      $scope.headingTitle = char;
    };
    */
    
    
    
  });