'use strict';

var gulp            = require( 'gulp' );
var Karma           = require( 'karma' ).Server;
var inject          = require( 'gulp-inject' );
var angularFilesort = require( 'gulp-angular-filesort' );
var es = require('event-stream');

var path            = require( '../../paths.js' );
var error           = require( '../../error-handler.js' );

gulp.task( 'karma-inject', function( done )
{
	var appJsSource    = gulp.src( [ path.to.destination + '/**/*.js', '!' + path.to.destination + '/bower/**/*.*' ] );
	var sortedAppJs    = appJsSource.pipe( angularFilesort(  ) );

	var bowerSource    = gulp.src( [ path.to.bower.scripts ], { read: false } );

	var unitTestsSource    = gulp.src( [ path.to.tests.unit ], { read: false } );

	var allJs = es.merge( sortedAppJs, bowerSource, unitTestsSource );

	gulp.src( path.to.tests.karmaConfig )
		.pipe( inject( allJs,
		{
			starttag: 'files: [',
			endtag: ']',
			transform: function ( filepath, file, i, length )
			{
				return '"..' + filepath + '"' + ( i + 1 < length ? ',' : '' );
			}
	  } ) )
	  .pipe( gulp.dest( './tests/' ) );
} );

gulp.task( 'unit-tests', function( done )
{
	new Karma(
	{
	    configFile: path.to.tests.karmaConfig,
	    singleRun: true
  	}, done ).start(  );
} );
