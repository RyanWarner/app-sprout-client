'use strict';

var aList = angular.module( 'aList' );

aList.controller( 'AListController', function( $rootScope, $scope, listFactory, $timeout )
{

	// console.log( window.Velocity ); this is working!

	console.log( 'ListController active!' );

	$scope.list = [  ];
	$scope.newItem = '';

	var listCopy;

	$scope.loading = true;

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

			$timeout( function(  )
			{
				$scope.loading = false;
			}, 200 );
		} );
	};

	getList(  );
	listCopy = angular.copy( $scope.list );

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

	$scope.addNewKeyPress = function( item, event )
	{
		if( event.keyCode === 13 )
		{
			$scope.addNewListItem( item );
		}
	};

	$scope.addNewListItem = function( itemValue )
	{
		if( ( itemValue === '' ) || ( itemValue === undefined ) )
		{
			return;
		}

		var newItem =
		{
			'name': itemValue
		};

		$scope.list.push( newItem );
		$scope.saveList( newItem, 0, event );
	};

	var saveListItemAnimation = function( index )
	{
		var listItems = document.getElementsByClassName( 'list-item' );
		var savedListItem = listItems[ index ];
		var enterIcon = document.getElementsByClassName( 'enter-icon' )[ 0 ];

		savedListItem.style.backgroundColor = '#B7E4A9';
		savedListItem.style.WebkitTransition = 'none';

		enterIcon.style.backgroundColor = '#78b066';
		enterIcon.style.WebkitTransition = 'none';

		$timeout( function(  )
		{
			savedListItem.style.WebkitTransition = 'background-color 1s ease-in';
			savedListItem.style.backgroundColor = '#fcfcfa';

			enterIcon.style.WebkitTransition = 'background-color 1s ease-in';
			enterIcon.style.backgroundColor = '#688e5c';
		}, 50 );

		savedListItem.addEventListener( 'webkitTransitionEnd', function(  )
		{
			savedListItem.style.WebkitTransition = '';
			savedListItem.style.backgroundColor = '';
		} );
	};

	var updateListCopy = function(  )
	{
		listCopy = angular.copy( $scope.list );
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


		// If the new value is the same as the factory value,
		// dont do anything.
		if( ( listCopy[ realIndex ] ) && ( item.name === listCopy[ realIndex ].name ) )
		{
			return;
		};

		// If trying to save an existing list item with no value,
		// delete it.
		if( ( item.name === '' ) && ( item._id !== undefined ) )
		{
			$scope.deleteListItem( item, index );
			return;
		}


		listFactory.upsertListItem( item )
		.then( function( response )
		{
			// If the user is creating a new item,
			// we need to give it an ID that we get back from the server.
			if( response.newListItem )
			{
				$timeout( function(  )
				{
					$scope.list[ realIndex ]._id = response.newListItem._id;
					$scope.newItem = '';
				} );
			}

			updateListCopy(  );

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
			updateListCopy(  );
		} );
	};

} );
