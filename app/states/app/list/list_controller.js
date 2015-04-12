'use strict';

var list = angular.module( 'list' );

list.controller( 'ListController', function( $rootScope, $scope )
{

	// This is a controller.

	$scope.stateName = 'list';

	console.log( 'ListController active!' );

} );
