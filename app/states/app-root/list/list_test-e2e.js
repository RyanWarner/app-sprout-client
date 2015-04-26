'use strict';

var protractor = require( 'protractor' );

describe( 'App List', function(  )
{
	var httpBackendMock = function( )
	{
		angular.module( 'httpBackendMock', [ 'appSproutClient', 'ngMockE2E' ] )
		.run( function( $httpBackend )
		{
			var response =
			{
				newListItem:
				{
					_id: 'abc',
					name: 'new list item'
				}
			};

			$httpBackend.whenPOST( '/api/user/list' ).respond( function( method, url, data, headers )
			{
				return [ 200, response, {  } ];
			} );
		} );

		browser.addMockModule( 'httpBackendMock', httpBackendMock );
	};


	it( 'should add an item to the list', function(  )
	{
		browser.get( 'http://localhost:8080/app/list' );
		// browser.waitForAngular(  );
		// browser.manage(  ).window(  ).maximize(  );

		element( by.model( 'newItem' ) ).sendKeys( 'new list item' );
		element( by.css( 'div.enter-icon' ) ).click(  );

		var list = element.all( by.repeater( 'item in list' ) );

		expect( list.count(  ) ).toEqual( 1 );
		expect( list.get( 0 ).element( by.model( 'item.name' ) ).getAttribute( 'value' ) ).toEqual( 'new list item' );
	} );

	it( 'should update an existing item', function(  )
	{
		browser.get( 'http://localhost:8080/app/list' );

		element( by.model( 'newItem' ) ).sendKeys( 'new list item' );
		element( by.css( 'div.enter-icon' ) ).click(  );

		var list = element.all( by.repeater( 'item in list' ) );

		expect( list.count(  ) ).toEqual( 1 );

		var newListItemElement = list.get( 0 ).element( by.model( 'item.name' ) );

		newListItemElement.clear(  );
		newListItemElement.sendKeys( 'updated list item' );
		newListItemElement.sendKeys( protractor.Key.ENTER );

		expect( newListItemElement.getAttribute( 'value' ) ).toEqual( 'updated list item' );
	} );
} );
