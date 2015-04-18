'use strict';

var spinner = angular.module( 'spinner', [ ] );

spinner.directive( 'spinner', function(  )
{
	return {

		restrict: 'E',
		templateUrl: 'common-components/directives/spinner/spinner_template.html'

	};
} );
