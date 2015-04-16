'use strict';

var list = angular.module( 'list' );

list.controller( 'ListController', function( $rootScope, $scope, listFactory, $timeout )
{
	// This is a controller.

	$scope.stateName = 'list';

	// console.log( window.Velocity ); this is working!

	console.log( 'ListController active!' );

	$scope.list = [  ];

	var getList = function(  )
	{
		listFactory.getList(  )
		.then( function( list )
		{
			if( list.length === 0 )
			{
				console.log( list.length );
				$scope.list = list;
				$scope.addNewListItem(  );
			}
			else
			{
				$scope.list = list;
			}
		} );
	};

	getList(  );

	$scope.addNewListItem = function(  )
	{
		// $timeout( function(  )
		// {
			$scope.list.push( { } );
		// } );
		
		$timeout( function(  )
		{
			var newListInputElement = document.getElementsByClassName( 'list-item-input' )[ 0 ];
			// console.log( angular.element( newListInputElement ) );

			newListInputElement.focus(  );
			$scope.list[ $scope.list.length - 1 ].name = ' ';
			// newListInputElement.select(  );
		} );
		
		// 
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
		// If trying to save a newly created list item with no value,
		// don't do anything.
		if( ( item.name === undefined ) && ( item._id === undefined ) )
		{
			return;
		}

		// If trying to save an existing list item with no value,
		// delete it.
		if( ( item.name === '' ) && ( item._id !== undefined ) )
		{
			$scope.deleteListItem( item, index );
		}

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

	$scope.deleteListItem = function( item, index )
	{
		console.log( item );
		var inverseIndex = $scope.list.length - index - 1;

		listFactory.deleteListItem( item )
		.then( function(  )
		{
			$scope.list.splice( inverseIndex, 1 );
		} );
	};

} );
