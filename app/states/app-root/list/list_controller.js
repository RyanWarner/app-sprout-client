'use strict';

/* global angular */

(function() {
	var list = angular.module('list');

	list.controller('ListController', function($scope) {
		$scope.stateName = 'list';
	});
})();
