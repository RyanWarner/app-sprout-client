'use strict';


var sessionFactory = angular.module( 'sessionFactory', [  ] );

sessionFactory.factory( 'sessionFactory', function( $http, $q, $state, appConstants, storageFactory )
{
	var sessionFactoryApi = {  };

	sessionFactoryApi.registerAndLogin = function( user )
	{
		console.log( 'userFactoryApi registerAndLogin' );
		console.log( 'Registering user with backend at: ', appConstants.BACKEND_URL );

		var deferred = $q.defer(  );
		var promise = deferred.promise;

		$http( {

			method: 'post',
			url: appConstants.BACKEND_URL + '/api/user/register',
			withCredentials: true,
			data: user

		} )
		.success( function( data )
		{
			console.log( 'Registration success: ', data );

			storageFactory.local.setObject( 'user', data );

			deferred.resolve( data );
		} )
		.error( function( error )
		{
			console.log( 'Registration error: ', error );
			deferred.reject( error );
		} );

		return promise;
	};

	sessionFactoryApi.login = function( user )
	{
		console.log( 'sessionFactoryApi login' );
		console.log( 'Login user with backend: ', appConstants.BACKEND_URL );

		var deferred = $q.defer(  );
		var promise = deferred.promise;

		$http( {

			method: 'post',
			url: appConstants.BACKEND_URL + '/api/user/session',
			withCredentials: true,
			data: user

		} )
		.success( function( data )
		{
			console.log( 'Login success: ', data );

			storageFactory.local.setObject( 'user', data );

			deferred.resolve( data );
		} )
		.error( function( error )
		{
			console.log( 'Login error: ', error );
			deferred.reject( error );
		} );

		return promise;
	};

	sessionFactoryApi.logout = function(  )
	{
		console.log( 'userFactoryApi registerAndLogin' );
		console.log( 'Registering user with backend at: ', appConstants.BACKEND_URL );

		var deferred = $q.defer(  );
		var promise = deferred.promise;

		$http( {

			method: 'delete',
			url: appConstants.BACKEND_URL + '/api/user/session',
			withCredentials: true

		} )
		.success( function( data )
		{
			console.log( 'Logout success: ', data );

			sessionFactoryApi.user = {  };

			deferred.resolve( data );
		} )
		.error( function( error )
		{
			console.log( 'Logout error: ', error );
			deferred.reject( error );
		} );

		return promise;
	};


	// Return public API.

	return sessionFactoryApi;
} );
