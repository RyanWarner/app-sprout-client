'use strict';

( function(  )
{
	var account = angular.module( 'account' );

	account.controller( 'AccountController', function( $rootScope, $scope, storageFactory, userFactory, $timeout )
	{
		$scope.stateName = 'app.account';
		$scope.loading = false;
		$scope.justSaved = false;

		console.log( 'AccountController active!' );

		$timeout( function(  )
		{
			$scope.user = storageFactory.local.getObject( 'user' );
			console.log( $scope.user );
		} );

		$scope.updateUserInfo = function(  )
		{
			if( !$scope.form.$valid )
			{
				return;
			}

			$scope.loading = true;

			var userInfo = {  };

			userInfo.name = $scope.user.name;
			userInfo.email = $scope.user.email;
			userInfo.password = $scope.user.password;

			userFactory.updateUserInfo( userInfo )
			.then( function(  )
			{
				$timeout( function(  )
				{
					$scope.loading = false;
					$scope.justSaved = true;
					$scope.user.password = '';

					$timeout( function(  )
					{
						$scope.justSaved = false;
					}, 2200 );
				}, 400 );
			} );
		};
	} );

} )(  );