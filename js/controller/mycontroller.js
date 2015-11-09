// Create controller function & export
// Controls everything inside scope of html div
let MyController = function ($scope) {

  // Scope ng-click function
  // Set initial button 
  $scope.add = 0;
  $scope.message = 'likes';

  $scope.addLike = function () {
    console.log('add like');
    // Increment of 1
    $scope.add++;

    // Turnary statement to change like to likes
    $scope.message = ($scope.add === 1) ? 'like' : 'likes';

  };
 
};

// Injecting Controller into scope
MyController.$inject = ['$scope'];

export default MyController;