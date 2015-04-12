'use strict';

var app = angular.module( 'app',
[
	'ui.router',

	'list',
	'account'
] );


app.config( function( $stateProvider )
{
	$stateProvider.state( 'app',
	{
		url: '/app',
		views:
		{
			'app':
			{
				templateUrl: 'states/app/app_template.html',
				controller: 'AppController as app'
			}
		}
	} );
} );
