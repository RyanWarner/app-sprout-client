'use strict';

( function(  )
{
	var account = angular.module( 'account',
	[
		'ui.router'
	] );


	account.config( function( $stateProvider )
	{
		$stateProvider.state( 'app-root.account',
		{
			url: '/account',
			views:
			{
				'app-content':
				{
					templateUrl: 'states/app-root/account/account_template.html',
					controller: 'AccountController as account'
				}
			}
		} );
	} );

} )(  );
