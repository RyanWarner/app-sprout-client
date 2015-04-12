'use strict';

var gulp    = require( 'gulp' );
var connect = require( 'gulp-connect' );

var path    = require( '../../paths.js' );



gulp.task( 'fonts', function(  )
{
	return gulp.src( path.to.fonts.source )
		.pipe( gulp.dest( path.to.fonts.destination ) );
} );

gulp.task( 'images', [ 'favicon' ], function(  )
{
	return gulp.src( path.to.images.source )
		.pipe( gulp.dest( path.to.images.destination ) );
} );

gulp.task( 'favicon', function(  )
{
	return gulp.src( path.to.favicon.source )
		.pipe( gulp.dest( path.to.favicon.destination ) );
} );


