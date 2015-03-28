// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('starter',
['ionic',
'com.htmlxprs.encounter.controllers',
'com.htmlxprs.encounter.services',
'com.htmlxprs.encounter.directives'])
.config(['$stateProvider',function($stateProvider){
  $stateProvider.state('home',{
    url:'/home',
    controller:'HomeController',
    templateUrl:'views/home.html'
  }).state('chat', {
    url: '/chat',
    controller: 'ChatController',
    templateUrl: 'views/chat.html'
  });
}])
.run(['$ionicPlatform', '$rootScope', '$state', function($ionicPlatform, $rootScope, $state) {
  $state.go('home');
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}])
