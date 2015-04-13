'use strict';


var listFactory = angular.module( 'listFactory', [ ] );

listFactory.factory( 'listFactory', function( $http, $q, $state, appConstants )
{
	var listFactoryApi = {  };

	listFactoryApi.registerAndLogin = function( user )
	{
		var deferred = $q.defer(  );
		var promise = deferred.promise;

		$http( {

			method: 'post',
			url: appConstants.BACKEND_URL + '/api/user/register',
			//withCredentials: true,
			data: user

		} )
		.success( function( data )
		{
			console.log( 'Registration success: ', data );

			deferred.resolve( data );
		} )
		.error( function( error )
		{
			console.log( 'Registration error: ', error );
			deferred.reject( error );
		} );

		return promise;
	};


	// Return public API.

	return listFactoryApi;
} );
