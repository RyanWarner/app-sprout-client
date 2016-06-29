'use strict';

/* global inject */
/* global expect */

describe('Account', function() {
	var scope;
	var controller;

	beforeEach(function() {
		module('appSproutClient');
	});

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		controller = $controller('AccountController', { $scope: scope });
	}));

	it('should have a scope variable', function() {
		expect(scope.stateName).to.equal('app.account');
	});
});
