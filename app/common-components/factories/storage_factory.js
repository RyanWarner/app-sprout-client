'use strict';


var storageFactory = angular.module( 'storageFactory', [  ] );

storageFactory.factory( 'storageFactory', function( $window )
{
	var storageFactoryApi = {  };

	storageFactoryApi.local =
	{
		set: function( key, value )
		{
			$window.localStorage[ key ] = value;
		},
		get: function( key )
		{
			return $window.localStorage[ key ];
		},
		setObject: function( key, value )
		{
			$window.localStorage[ key ] = angular.toJson( value );
		},
		getObject: function( key )
		{
			return angular.fromJson( $window.localStorage[ key ] || '{}' );
		}
	};

	storageFactoryApi.session =
	{
		set: function( key, value )
		{
			$window.sessionStorage[ key ] = value;
		},
		get: function( key )
		{
			return $window.sessionStorage[ key ];
		},
		setObject: function( key, value )
		{
			$window.sessionStorage[ key ] = angular.toJson( value );
		},
		getObject: function( key )
		{
			return angular.fromJson( $window.sessionStorage[ key ] || '{}' );
		}
	};

	// Return public API.

	return storageFactoryApi;
} );
