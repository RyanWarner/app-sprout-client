'use strict';

var gulp           = require('gulp');

var mainBowerFiles = require('main-bower-files');

var sass           = require('gulp-sass');
var prefix         = require('gulp-autoprefixer');

var concat         = require('gulp-concat');
var streamqueue    = require('streamqueue');
var minifyCSS      = require('gulp-minify-css');
var filter         = require('gulp-filter');

var path           = require('../../paths.js');
var error          = require('../../error-handler.js');



gulp.task('build-css', function() {
	return streamqueue({objectMode: true},

		// Select all bower styles.

		gulp.src(mainBowerFiles({

			paths: {
				bowerDirectory: path.to.bower.source,
				bowerrc: path.to.bower.config,
				bowerJson: path.to.bower.manifest
			}

		}),
		{
			base: path.to.bower.source
		})
		.pipe(filter('**/*.css')),



		// Select all source styles.

		gulp.src(path.to.sass.main)
		.pipe(sass())
		.on('error', error.handler)
		.pipe(prefix('last 2 versions', {cascade: true}))
		.on('error', error.handler))



	// Then concatenate and minify.

	.pipe(concat(path.to.main.css.file))
	.pipe(minifyCSS())
	.pipe(gulp.dest(path.to.destination));
});
