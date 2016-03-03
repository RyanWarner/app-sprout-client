'use strict';

( function(  )
{
	var aList = angular.module( 'aList', [ ] );

	aList.directive( 'aList', function(  )
	{
		return {

			restrict: 'E',
			scope:
			{
				list: '='
			},
			controller: 'AListController',
			templateUrl: 'common-components/directives/a-list/a-list_template.html'

		};
	} );

} )(  );
