'use strict';

var app = angular.module( 'app' );

app.controller( 'AppController', function( $rootScope, $scope, $state )
{
	console.log( 'AppController active!' );
	$scope.stateName = 'app';

	$scope.activeChildNav = $state.current.activeChildNav;

	$rootScope.$on( '$stateChangeSuccess', function(  )
	{
		$scope.activeChildNav = $state.current.activeChildNav;
	} );
} );
