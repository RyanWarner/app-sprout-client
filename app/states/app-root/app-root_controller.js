'use strict';

var appRoot = angular.module( 'appRoot' );

appRoot.controller( 'AppRootController', function( $rootScope, $scope, $state )
{
	console.log( 'AppRootController active!' );
	$scope.stateName = 'app-root';

	$scope.activeChildNav = $state.current.activeChildNav;

	$rootScope.$on( '$stateChangeSuccess', function(  )
	{
		$scope.activeChildNav = $state.current.activeChildNav;
	} );
} );
