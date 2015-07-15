// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var nameApp = angular.module('starter', ['ionic', 'uiGmapgoogle-maps']);
 
nameApp.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    });
  $urlRouterProvider.otherwise("/");
  
});
 
nameApp.controller('HomeCtrl', function($scope) {
  function initialize() {
    console.log("Initialize");
    var myLatlng = new google.maps.LatLng(45, -73);
 
    var mapOptions = {
      center: myLatlng,
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
    $scope.map = map;
  }
  
  //google.maps.event.addDomListener(window, 'load', initialize());
  ionic.Platform.ready(initialize);

});

nameApp.run(function($state) {
  // must ensure the platform is ready before any google operations
  ionic.Platform.ready(function() {
    console.log("Type of: "+ typeof google);
    if (typeof google === 'undefined' || typeof google === undefined) {
      console.log("Google maps unavailable");
    }
    console.log('APP STATE DEVICEREADY');
  });
  

});
