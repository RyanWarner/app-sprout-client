'use strict';

var register = angular.module( 'register',
[
	'ui.router',
	'sessionFactory'
] );

register.config( function( $stateProvider )
{
	$stateProvider.state( 'register',
	{
		url: '/',
		views:
		{
			'homepage':
			{
				templateUrl: 'states/register/register_template.html',
				controller: 'RegisterController as register'
			}
		}
	} );
} );
