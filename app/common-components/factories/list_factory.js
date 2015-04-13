'use strict';


var listFactory = angular.module( 'listFactory', [ ] );

listFactory.factory( 'listFactory', function( $http, $q, $state, appConstants )
{
	var listFactoryApi = {  };

	listFactoryApi.getList = function(  )
	{
		var deferred = $q.defer(  );
		var promise = deferred.promise;

		$http( {

			method: 'get',
			withCredentials: true,
			url: appConstants.BACKEND_URL + '/api/user/list'

		} )
		.success( function( data )
		{
			console.log( 'Get list success: ', data );

			deferred.resolve( data.listItems );
		} )
		.error( function( error )
		{
			console.log( 'Get list error: ', error );
			deferred.reject( error );
		} );

		return promise;
	};


	// Return public API.

	return listFactoryApi;
} );
