define(['angular', 'grande', 'app'], function (ng, grande) {
  'use strict';

  ng
    .module('app.controllers')
    .controller('HomeController', function ($scope, Helpers) {
      $scope.welcome = 'Texy Dev';
      $scope.helpers = Helpers;
      grande.bind(document.querySelectorAll('article'));
    });

});
