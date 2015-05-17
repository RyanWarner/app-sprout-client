'use strict';

var appConstants = angular.module( 'appConstants', [ ] );

appConstants.constant( 'appConstants',
{
	// Setup Config (!)

	BACKEND_URL: 'http://localhost:9000'
	// BACKEND_URL: 'http://ec2-54-186-189-69.us-west-2.compute.amazonaws.com:80'

} );
