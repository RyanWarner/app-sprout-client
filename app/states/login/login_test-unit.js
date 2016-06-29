'use strict';

/* global inject, expect */

describe('Root', function() {
	var scope;
	var controller;

	beforeEach(function() {
		module('appSproutClient');
	});

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		controller = $controller('LoginController', {$scope: scope});
	}));

	it('should have a scope variable', function() {
		expect(scope.stateName).to.equal('login');
	});
});
