'use strict';

/* global angular */

(function() {
	var homepage = angular.module('homepage');

	homepage.controller('HomepageController', function($rootScope, $scope, $state, sessionFactory) {
		// This is a controller.

		$scope.stateName = 'homepage';

		$scope.email = '';
		$scope.password = '';

		$scope.registerAndLogin = function() {
			var user = {};

			user.email = $scope.email;
			user.password = $scope.password;

			sessionFactory.registerAndLogin(user)
			.then(function() {
				$state.go('app-root.list');
			});
		};
	});
})();
