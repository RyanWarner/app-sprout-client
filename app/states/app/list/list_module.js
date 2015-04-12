'use strict';

var list = angular.module( 'list',
[
	'ui.router'
] );


list.config( function( $stateProvider )
{
	$stateProvider.state( 'app.list',
	{
		url: 'list/',
		views:
		{
			'child-content':
			{
				templateUrl: 'states/app/list/list_template.html',
				controller: 'ListController as list'
			}
		},
		activeNav: 'list'
	} );
} );
