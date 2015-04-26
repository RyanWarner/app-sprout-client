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
				console.log( 'POST' );

				console.log( 'POST' );

				return [ 200, response, {  } ];
			} );
  		} );

  		browser.addMockModule( 'httpBackendMock', httpBackendMock );
	};

		


	it( 'should add a todo', function(  )
	{
		browser.ignoreSynchronization = false;
		browser.get( 'http://localhost:8080/app/list' );
		browser.waitForAngular(  );
		browser.manage(  ).window(  ).maximize(  );

		element( by.model( 'newItem' ) ).sendKeys( 'new list item' );
		element( by.css( 'div.enter-icon' ) ).click(  );

		var list = element.all( by.repeater( 'item in list' ) );
		expect( list.count(  ) ).toEqual( 1 );

		console.log( list.get( 0 ).element( by.css( '.list-item-input' ) ) );
		expect( list.get( 0 ).element( by.model( 'item.name' ) ).getAttribute( 'value' ) ).toEqual( 'new list item' );
	} );
} );
