'use strict';

/* global angular */

(function() {
	var login = angular.module('login');

	login.controller('LoginController', function($scope, $state, sessionFactory) {

		$scope.stateName = 'login';

		$scope.email = '';
		$scope.password = '';

		$scope.loginUser = function() {
			if(!$scope.form.$valid) {
				return;
			}

			var user = {};

			user.email = $scope.email;
			user.password = $scope.password;

			sessionFactory.login(user)
			.then(function() {
				$state.go('app-root.list');
			});
		};
	});
})();
