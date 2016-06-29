'use strict';

/* global angular */

(function() {
	var list = angular.module('list', [
		'ui.router',
		'listFactory',
		'ngEnter',
		'ngAnimate',
		'spinner',
		'aList'
	]);


	list.config(function($stateProvider) {
		$stateProvider.state('app-root.list', {
			url: '/list',
			views: {
				'app-content': {
					templateUrl: 'states/app-root/list/list_template.html',
					controller: 'ListController as list'
				}
			}
		});
	});
})();
