'use strict';


var userFactory = angular.module( 'userFactory', [  ] );

userFactory.factory( 'userFactory', function( $http, $q, appConstants, storageFactory )
{
	var userFactoryApi = {  };

	userFactoryApi.updateUserInfo = function( userInfo )
	{
		var deferred = $q.defer(  );
		var promise = deferred.promise;

		$http( {

			method: 'post',
			url: appConstants.BACKEND_URL + '/api/user/info',
			withCredentials: true,
			data:
			{
				'userInfo': userInfo
			}

		} )
		.success( function( data )
		{
			console.log( 'Update account success: ', data );

			storageFactory.local.setObject( 'user', data );

			deferred.resolve( data );
		} )
		.error( function( error )
		{
			console.log( 'Update account error: ', error );
			deferred.reject( error );
		} );

		return promise;
	};

	// Return public API.

	return userFactoryApi;
} );
