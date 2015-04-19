'use strict';

var account = angular.module( 'account' );

account.controller( 'AccountController', function( $rootScope, $scope, sessionFactory, $timeout )
{
	$scope.stateName = 'app.account';

	console.log( 'AccountController active!' );

	$timeout( function(  )
	{
		$scope.user = sessionFactory.user;
		console.log( $scope.user );
	} );
	

} );
