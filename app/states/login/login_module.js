'use strict';

var login = angular.module( 'login',
[
	'ui.router',
	'sessionFactory'
] );

login.config( function( $stateProvider )
{
	$stateProvider.state( 'login',
	{
		url: '/',
		views:
		{
			'homepage':
			{
				templateUrl: 'states/login/login_template.html',
				controller: 'LoginController as login'
			}
		}
	} );
} );
