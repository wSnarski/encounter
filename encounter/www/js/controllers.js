angular.module('com.htmlxprs.encounter.controllers',[])
.controller('HomeController',
['$scope','USER','$state',
function($scope,USER,$state){
  $scope.user={};
  $scope.next=function(){
    USER.name=$scope.user.name;
    $state.go('chat');
  }
}]).controller('ChatController',
['$scope','$rootScope',
function($scope,$rootScope){

}]);
