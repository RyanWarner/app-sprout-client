'use strict';

var account = angular.module( 'account' );

account.controller( 'AccountController', function( $rootScope, $scope )
{

	// This is a controller.

	$scope.stateName = 'app.account';

	console.log( 'AccountController active!' );

} );
