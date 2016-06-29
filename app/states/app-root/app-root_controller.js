'use strict';

/* global angular */

(function() {
	var appRoot = angular.module('appRoot');

	appRoot.controller('AppRootController', function($rootScope, $scope, $state, sessionFactory) {
		$scope.stateName = 'app-root';

		$scope.activeChildNav = $state.current.activeChildNav;

		$rootScope.$on('$stateChangeSuccess', function() {
			$scope.activeChildNav = $state.current.activeChildNav;
		});

		$scope.logout = function() {
			sessionFactory.logout()
			.then(function() {
				$state.go('homepage');
			});
		};
	});
})();
