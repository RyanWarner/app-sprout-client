'use strict';

( function(  )
{
	var homepage = angular.module( 'homepage',
	[
		'ui.router',
		'sessionFactory'
	] );

	homepage.config( function( $stateProvider )
	{
		$stateProvider.state( 'homepage',
		{
			url: '/',
			views:
			{
				homepage:
				{
					templateUrl: 'states/homepage/homepage_template.html',
					controller: 'HomepageController as homepage'
				}
			}
		} );
	} );

} )(  );