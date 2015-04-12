'use strict';

var account = angular.module( 'account',
[
	'ui.router'
] );


account.config( function( $stateProvider )
{
	$stateProvider.state( 'app.account',
	{
		url: 'account/',
		views:
		{
			'child-content':
			{
				templateUrl: 'states/app/account/account_template.html',
				controller: 'AccountController as account'
			}
		},
		activeTopNav: 'account'
	} );
} );
