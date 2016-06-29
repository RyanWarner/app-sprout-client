'use strict';

/* global angular */

(function() {
	var register = angular.module('register');

	register.controller('RegisterController', function($rootScope, $scope, $state, sessionFactory) {
		$scope.stateName = 'register';

		$scope.name = '';
		$scope.email = '';
		$scope.password = '';
		$scope.loading = false;

		$scope.registerAndLogin = function() {
			if (!$scope.form.$valid) {
				return;
			}

			$scope.loading = false;

			var user = { };

			user.name = $scope.name;
			user.email = $scope.email;
			user.password = $scope.password;

			sessionFactory.registerAndLogin(user)
			.then(function() {
				$scope.loading = false;
				$state.go('app-root.list');
			});
		};
	});
})();
