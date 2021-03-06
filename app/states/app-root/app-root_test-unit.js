'use strict';

/* global inject */
/* global expect */

describe('App', function() {
	var scope;
	var controller; // eslint-disable-line no-unused-vars

	beforeEach(function() {
		module('appSproutClient');
	});

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		controller = $controller('AppRootController', { $scope: scope });
	}));

	it('should have a scope variable', function() {
		expect(scope.stateName).to.equal('app-root');
	});
});
