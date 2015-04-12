'use strict';

var parentState2 = angular.module( 'parentState2',
[
	'ui.router',

	'list',
	'account'
] );


parentState2.config( function( $stateProvider )
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
