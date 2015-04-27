'use strict';

var mock = require( 'protractor-http-mock' );

describe( 'App List', function(  )
{

	afterEach( function(  )
	{
		mock.teardown(  );
	} );


	it( 'should add an item to the list', function(  )
	{
		mock(
		[
			{
				request:
				{
					path: '/api/user/list',
					method: 'POST'
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
					method: 'GET'
				},
				response:
				{
					status: 200,
					data: []
				}
			}
		] );

		browser.get( 'http://localhost:8080/app/list' );

		element( by.model( 'newItem' ) ).sendKeys( 'new list item' );
		element( by.css( '.enter-icon' ) ).click(  );

		var list = element.all( by.repeater( 'item in list' ) );
		browser.sleep(10000);

		expect( list.count(  ) ).toEqual( 1 );
		expect( list.get( 0 ).element( by.model( 'item.name' ) ).getAttribute( 'value' ) ).toEqual( 'new list item' );

		// expect( mock.requestsMade(  ) ).toEqual(
		// [
		// 	{ url: '/api/user/list', method: 'POST' },
		// 	{ url: '/api/user/list', method: 'GET' }
		// ] );
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

	// it( 'should delete an existing item', function(  )
	// {
	// 	browser.get( 'http://localhost:8080/app/list' );

	// 	element( by.model( 'newItem' ) ).sendKeys( 'new list item' );
	// 	element( by.css( 'div.enter-icon' ) ).click(  );

	// 	var list = element.all( by.repeater( 'item in list' ) );

	// 	expect( list.count(  ) ).toEqual( 1 );

	// 	var deleteElement = list.get( 0 ).element( by.css( '.delete-list-item' ) );

	// 	deleteElement.click(  );
	// 	expect( list.count(  ) ).toEqual( 0 );
	// } );
} );
