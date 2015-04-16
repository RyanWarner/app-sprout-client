'use strict';

var login = angular.module( 'login' );

login.controller( 'LoginController', function( $rootScope, $scope, $state, sessionFactory )
{
	// This is a controller.

	$scope.stateName = 'login';

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
			$state.go( 'app-root.list' );
		} );
	};

	console.log( 'HomepageController active!' );

} );
