'use strict';

var register = angular.module( 'register' );

register.controller( 'RegisterController', function( $rootScope, $scope, $state, sessionFactory )
{
	// This is a controller.

	$scope.stateName = 'register';

	$scope.name = '';
	$scope.email = '';
	$scope.password = '';

	$scope.registerAndLogin = function(  )
	{
		var user = {  };

		user.name = $scope.name;
		user.email = $scope.email;
		user.password = $scope.password;

		console.log( user );

		sessionFactory.registerAndLogin( user )
		.then( function(  )
		{
			$state.go( 'app-root.list' );
		} );
	};

	console.log( 'RegisterController active!' );

} );
