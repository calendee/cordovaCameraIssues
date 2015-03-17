// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
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
})

.controller("CameraController", function($scope, $cordovaCamera) {

  console.log("Camera Controller!");

  $scope.data = {
    image : null,
    memoryHog : []
  };

  $scope.takePic = function() {

    console.log("Loading crap..");

    var counter = 0;
    while(counter < 40000000) {
      $scope.data.memoryHog[counter] = '01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101';
      counter++;
    }

    console.log("Taking pic!");
    var options = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
    };

    $cordovaCamera.getPicture(options).then(function(imageURI) {
      $scope.data.image = imageURI;
    }, function(err) {
      console.log("Failed to capture image!")
      // error
    });

  }

})