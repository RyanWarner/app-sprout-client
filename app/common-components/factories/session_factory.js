'use strict';


var sessionFactory = angular.module( 'sessionFactory', [ ] );

sessionFactory.factory( 'sessionFactory', function( $http, $q, $state, appConstants )
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

    return sessionFactoryApi;
}
);
