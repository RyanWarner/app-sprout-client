'use strict';

var list = angular.module( 'list' );

list.controller( 'ListController', function( $rootScope, $scope, listFactory, $timeout )
{
	// This is a controller.

	$scope.stateName = 'list';

	console.log( window.Velocity );

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

	$scope.addNewListItem = function(  )
	{
		$scope.list.push( { } );
	};

	$scope.keyPress = function( item, index, event )
	{
		if( event.keyCode === 13 )
		{
			$scope.saveList( item, index, event );
		}
	};

	$scope.saveList = function( item, index, event )
	{
		console.log( event );
		listFactory.upsertListItem( item )
		.then( function( response )
		{
			// If the user is creating a new item,
			// we need to give it an ID that we get back from the server.
			if( response.newListItem )
			{
				// Because we are using the reverse filter,
				// we need to get the actual index.
				var realIndex = $scope.list.length - index - 1;
				$scope.list[ realIndex ]._id = response.newListItem._id;
			}

			var listItems = document.getElementsByClassName( 'list-item' );
			var savedListItem = listItems[ index ];
			savedListItem.style.backgroundColor = '#77E056';
			savedListItem.style.WebkitTransition = 'none';
			$timeout( function(  )
			{
				savedListItem.style.WebkitTransition = 'background-color 1s ease-in';
				savedListItem.style.backgroundColor = '#fcfcfa';
			}, 100 );
			
			savedListItem.addEventListener( 'webkitTransitionEnd', function(  )
			{
				savedListItem.style.WebkitTransition = '';
				savedListItem.style.backgroundColor = '';
			} );
		} );
	};

} );
