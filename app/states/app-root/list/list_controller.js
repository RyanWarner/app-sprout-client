'use strict';

var list = angular.module( 'list' );

list.controller( 'ListController', function( $rootScope, $scope, listFactory, $timeout )
{
	// This is a controller.

	$scope.stateName = 'list';

	// console.log( window.Velocity ); this is working!

	console.log( 'ListController active!' );

	$scope.$watch( 'aList', function(  )
	{
		console.log( '' );
		console.log( 'List has changed!' );
		console.log( $scope.aList );
		console.log( '' );
	} );
} );
