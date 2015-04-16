'use strict';

var appSproutClient = angular.module( 'appSproutClient',
[
	'reverseFilter',
	'appConstants',

	'homepage',
	'register',
	'login',
	'appRoot',
	'ngAnimate'
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
