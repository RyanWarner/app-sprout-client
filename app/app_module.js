'use strict';

var appSproutClient = angular.module( 'appSproutClient',
[
	'exampleDirective',

	'reverseFilter',
	'appConstants',

	'root',
	'app'
] );

appSproutClient.config( function( $urlRouterProvider, $locationProvider )
{
	$urlRouterProvider.otherwise( '/' );
	$locationProvider.html5Mode( true );
} );




appSproutClient.run( function( $rootScope )
{
	$rootScope.$on( '$stateChangeSuccess', function( event, toState, toParams, fromState, fromParams )
	{
		$rootScope.fromState = fromState;
		$rootScope.fromParams = fromParams;

		$rootScope.toState = toState;
		$rootScope.toParams = toParams;
	} );

} );
