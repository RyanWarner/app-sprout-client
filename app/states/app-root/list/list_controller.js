'use strict';

var list = angular.module( 'list' );

list.controller( 'ListController', function( $rootScope, $scope, listFactory )
{
	// This is a controller.

	$scope.stateName = 'list';

	console.log( 'ListController active!' );

	$scope.list = [  ];

	var getList = function(  )
	{
		listFactory.getList(  )
		.then( function( list )
		{
			$scope.list = list;
		} );
	};

	getList(  );

} );
