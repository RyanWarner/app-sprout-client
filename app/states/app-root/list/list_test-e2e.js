'use strict';

var mock = require( 'protractor-http-mock' );

describe( 'App List', function(  )
{
	mock(
	[
		{
			request:
			{
				path: '/api/user/list',
				withCredentials: true,
				method: 'post',
				data:
				{
					listItem:
					{
						name: 'new list item'
					}
				}
			},
			response:
			{
				status: 200,
				data:
				{
					newListItem:
					{
						_id: 'abc',
						name: 'new list item'
					}
				}
			}
		},
		{
			request:
			{
				path: '/api/user/list',
				withCredentials: true,
				method: 'get'
			},
			response:
			{
				status: 200,
				data: []
			}
		},
		{
			request:
			{
				path: '/api/user/list',
				withCredentials: true,
				method: 'put',
				data:
				{
					listItem:
					{
						_id: 'abc',
						name: 'new list item'
					}
				}
			},
			response:
			{
				status: 200
			}
		}
	] );


	// beforeEach( function(  )
	// {
	// 	mock.clearRequests(  );
	// } );

	afterEach( function(  )
	{
		mock.teardown(  );
	} );


	it( 'should add an item to the list', function(  )
	{
		browser.ignoreSynchronization = false;

		browser.get( 'http://localhost:8080/app/list' );

		element( by.model( 'newItem' ) ).sendKeys( 'new list item' );
		element( by.css( '.enter-icon' ) ).click(  );

		var list = element.all( by.repeater( 'item in list' ) );
		browser.sleep( 20 );

		expect( list.count(  ) ).toEqual( 1 );
		expect( list.get( 0 ).element( by.model( 'item.name' ) ).getAttribute( 'value' ) ).toEqual( 'new list item' );

		expect( mock.requestsMade(  ) ).toEqual(
		[
			{
				url: 'http://localhost:9000/api/user/list',
				withCredentials: true,
				method: 'get'
			},
			{
				url: 'http://localhost:9000/api/user/list',
				withCredentials: true,
				method: 'post',
				data:
				{
					listItem:
					{
						name: 'new list item'
					}
				} }
		] );
	} );

	// it( 'should update an existing item', function(  )
	// {
	// 	browser.get( 'http://localhost:8080/app/list' );

	// 	element( by.model( 'newItem' ) ).sendKeys( 'new list item' );
	// 	element( by.css( 'div.enter-icon' ) ).click(  );

	// 	var list = element.all( by.repeater( 'item in list' ) );

	// 	expect( list.count(  ) ).toEqual( 1 );

	// 	var newListItemElement = list.get( 0 ).element( by.model( 'item.name' ) );

	// 	newListItemElement.clear(  );
	// 	newListItemElement.sendKeys( 'updated list item' );
	// 	newListItemElement.sendKeys( protractor.Key.ENTER );

	// 	expect( newListItemElement.getAttribute( 'value' ) ).toEqual( 'updated list item' );
	// } );

	it( 'should delete an existing item', function(  )
	{
		mock.clearRequests(  );
		// browser.get( 'http://localhost:8080/app/list' );

		// element( by.model( 'newItem' ) ).sendKeys( 'new list item' );
		// element( by.css( 'div.enter-icon' ) ).click(  );

		var list = element.all( by.repeater( 'item in list' ) );

		expect( list.count(  ) ).toEqual( 1 );

		var deleteElement = list.get( 0 ).element( by.css( '.delete-list-item' ) );
		// var deleteElement = deleteElements.get( 0 );
		// console.log( 'deleteElement', deleteElement );

		deleteElement.click(  );
		browser.sleep( 20 );
		expect( list.count(  ) ).toEqual( 0 );

		expect( mock.requestsMade(  ) ).toEqual(
		[
			{
				url: 'http://localhost:9000/api/user/list',
				withCredentials: true,
				method: 'put',
				data:
				{
					listItem:
					{
						_id: 'abc',
						name: 'new list item'
					}
				}
			}
		] );
	} );
} );
