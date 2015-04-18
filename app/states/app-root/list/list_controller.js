'use strict';

var list = angular.module( 'list' );

list.controller( 'ListController', function( $rootScope, $scope, listFactory, $timeout )
{
	// This is a controller.

	$scope.stateName = 'list';

	// console.log( window.Velocity ); this is working!

	console.log( 'ListController active!' );

	$scope.list = [  ];

	var listCopy;

	var getList = function(  )
	{
		listFactory.getList(  )
		.then( function( list )
		{
			if( list.length === 0 )
			{
				console.log( list.length );
				$scope.list = list;
				listCopy = angular.copy( $scope.list );
				$scope.addNewListItem(  );
			}
			else
			{
				$scope.list = list;
				listCopy = angular.copy( $scope.list );
			}
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

	var saveListItemAnimation = function( index )
	{
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
	};

	$scope.saveList = function( item, index, event )
	{


		// If trying to save a newly created list item with no value,
		// don't do anything.
		if( ( item.name === undefined ) && ( item._id === undefined ) )
		{
			return;
		}

		// Because we are using the reverse filter,
		// we need to get the actual index.
		var realIndex = $scope.list.length - index - 1;

		console.log( item.name );
		console.log( listFactory.list[ realIndex ].name );

		// If the new value is the same as the factory value,
		// dont do anything.
		if( item.name === listCopy[ realIndex ].name )
		{
			return;
		};

		// If trying to save an existing list item with no value,
		// delete it.
		if( ( item.name === '' ) && ( item._id !== undefined ) )
		{
			$scope.deleteListItem( item, index );
			listCopy = angular.copy( $scope.list );
			return;
		}


		listFactory.upsertListItem( item )
		.then( function( response )
		{
			// If the user is creating a new item,
			// we need to give it an ID that we get back from the server.
			if( response.newListItem )
			{	
				$scope.list[ realIndex ]._id = response.newListItem._id;
			}

			listCopy = angular.copy( $scope.list );

			saveListItemAnimation( index );
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
