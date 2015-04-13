'use strict';

var root = angular.module( 'root' );

root.controller( 'RootController', function( $rootScope, $scope, $state, sessionFactory )
{
	// This is a controller.

	$scope.stateName = 'root';

	$scope.email = '';
	$scope.password = '';

	$scope.registerAndLogin = function(  )
	{
		var user = {  };

		user.email = $scope.email;
		user.password = $scope.password;

		console.log( user );

		sessionFactory.registerAndLogin( user )
		.then( function(  )
		{
			$state.go( 'app' );
		} );
	};

	console.log( 'RootController active!' );

} );
